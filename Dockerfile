# Используем образ Node.js в качестве базового
FROM node:14 AS build-stage

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем файлы package.json и package-lock.json (если есть)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта в контейнер
COPY . .

# Собираем проект Vue с использованием TypeScript
RUN npm run build

# Второй этап - этап запуска проекта
FROM nginx:stable-alpine as production-stage

# Копируем собранные файлы проекта из первого этапа в образ Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Определяем порт, который будет открыт на контейнере
EXPOSE 80

# Запускаем Nginx при старте контейнера
CMD ["nginx", "-g", "daemon off;"]
