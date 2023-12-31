- src
    - components
        - LoginForm.vue        // Компонент для страницы логина
        - ProfileForm.vue      // Компонент для страницы редактирования профиля
        - Chart.vue            // Компонент для страницы с графиками
        - WebSocketQueue.vue   // Компонент для страницы с очередью на WebSocket
        - Form.vue             // Компонент для общей формы
        - Portfolio.vue        // Компонент для страницы с верстками (портфолио)
        - Contacts.vue         // Компонент для страницы контактов
        - RestApiPage.vue      // Компонент для страницы с REST API / GraphQL
        - Examples.vue         // Компонент с базовыми примерами использования JS/TS

    - views
        - LoginPage.vue        // Страница логина, использует LoginForm.vue
        - ProfilePage.vue      // Страница редактирования профиля, использует ProfileForm.vue
        - ChartPage.vue        // Страница с графиками, использует Chart.vue
        - WebSocketPage.vue    // Страница с очередью на WebSocket, использует WebSocketQueue.vue
        - FormPage.vue         // Страница с общей формой, использует Form.vue
        - PortfolioPage.vue    // Страница с верстками (портфолио), использует Portfolio.vue
        - ContactsPage.vue     // Страница контактов, использует Contacts.vue
        - RestApiPage.vue      // Страница с REST API / GraphQL, использует RestApiPage.vue
        - ExamplesPage.vue     // Страница с базовыми примерами использования JS/TS, использует Examples.vue

    - store
        - index.ts             // Основной файл хранилища
        - login.ts             // Модуль хранилища для страницы логина
        - profile.ts           // Модуль хранилища для страницы редактирования профиля
        - chart.ts             // Модуль хранилища для страницы с графиками
        - websocket.ts         // Модуль хранилища для страницы с очередью на WebSocket
        - form.ts              // Модуль хранилища для общей формы
        - portfolio.ts         // Модуль хранилища для страницы с верстками (портфолио)
        - contacts.ts          // Модуль хранилища для страницы контактов
        - restapi.ts           // Модуль хранилища для страницы с REST API / GraphQL
        - examples.ts          // Модуль хранилища для страницы с базовыми примерами использования JS/TS

    - api                   // Модуль для работы с REST API / GraphQL
        - index.ts             // Основной файл модуля
        - login.ts             // Модуль для работы с API авторизации
        - profile.ts           // Модуль для работы с API профиля
        - chart.ts             // Модуль для работы с API графиков
        - websocket.ts         // Модуль для работы с WebSocket
        - form.ts              // Модуль для работы с API формы
        - portfolio.ts         // Модуль для работы с API портфолио
        - contacts.ts          // Модуль для работы с API контактов

    - plugins
        - pinia.ts             // Подключение и конфигурация Pinia

    - utils
        - auth.ts              // Утилиты для работы с авторизацией
        - validation.ts        // Утилиты для валидации форм

    - main.ts               // Основной файл приложения
    - router.ts             // Конфигурация маршрутизации
    - App.vue               // Основной компонент приложения
