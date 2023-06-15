import JSZip from 'jszip';

export default async function createAcrhive (html) {
    const zip = new JSZip();

    // Добавление файла styles.css в папку styles
    const cssContent = `.my-class { color: red; }`;
    zip.folder('styles').file('styles.css', cssContent);

    // Создание пустой папки images
    zip.folder('images');

    // Добавление файла index.html в корневую директорию
    zip.file('index.html', html);

    // Генерация архива
    const zipContent = await zip.generateAsync({ type: 'blob' });

    // Скачивание архива
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(zipContent);
    downloadLink.download = 'my-archive.zip';
    downloadLink.click();
}