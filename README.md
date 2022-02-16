# BlogLFlower

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.10.

### Languages and Tools
![Angular](https://img.shields.io/badge/-Angular-090909?style=for-the-badge&logo=Angular)
![HTML](https://img.shields.io/badge/-HTML5-090909?style=for-the-badge&logo=HTML5)
![CSS](https://img.shields.io/badge/-CSS-090909?style=for-the-badge&logo=CSS3)
![JavaScript](https://img.shields.io/badge/-JS-090909?style=for-the-badge&logo=JavaScript)
![AngularMaterial](https://img.shields.io/badge/-AngularMaterial-090909?style=for-the-badge&logo=AngularMaterial)

## Подключение плагина редактора
<a href="https://www.npmjs.com/package/ngx-quill">https://www.npmjs.com/package/ngx-quill
<ul>
<li>
<code>npm i ngx-quill</code>
</li>
<li>для проектов, использующих Angular < v5.0.0 установить <code>npm install ngx-quill@1.6.0</code>
</li>
<li>
<p>установить @angular/core, @angular/common, @angular/forms, @angular/platform-browser, quillv1.x, @types/quillv1.x и rxjs одноранговые зависимости ngx-quill</p>
<p>Т.к. есть все пакеты, кроме quill, то необходимо его установить <code>npm install quill</code></p>
<p>Если возникают ошибки, например: <br>
 Module '"quill"' has no exported member 'Delta'. Did you mean to use 'import Delta from "quill"' instead?<br>
 тогда установить <code>@types/quill": "^1.3.10"</code></p>
<p>Если всё равно ошибки, тогда в package.json в dependencies прописать <code>@types/quill": "^1.3.10"</code> пересобрать проект (npm install)</p>
</li>
<li>
<p>В глабальном файле стилей (style.scss) подключить стили темы: bubble.css, snow.css и core.css quilljs в свой index.html (вы можете найти их в node_modules/quill/dist), или добавьте их в свои файлы css/scss с @importинструкциями, или добавьте их внешние стили в свою сборку процесс.</p>
<code>
    @ import  '~quill/dist/quill.core.css'; 
    @ import  '~quill/dist/quill.bubble.css'; 
    @ import  '~quill/dist/quill.snow.css' ;
</code>
</li>
</ul>

<p>
<b>СОВЕТ:</b> Если вы используете модули с отложенной загрузкой, вам нужно добавить QuillModule.forRoot()их к импорту в корневом модуле, чтобы убедиться, что Config сервисы зарегистрированы.</p>

## Добавление PWA
<ol>
<li>Остановить выполнение проекта (ctrl+C)</li>
<li>Запустить установку ng add @angular/pwa, подтвердить выполнение
<p>Появятся файлы (manifest.webmanifest, ngsw-config.json)</p>
<p>В src\app\app.module.ts появляется ServiceWorkerModule, который регистрируется в imports</p>
</li>
<li>Отредактировать ngsw-config.json:
<p>Закэшировать шрифты:</p>
<p>
<code> "files": [<br>
                "/favicon.ico",<br>
                "/index.html",<br>
                "/manifest.webmanifest",<br>
                "/*.css",<br>
                "/*.js"<br>
              ],<br>
              "urls": [<br>
                "https://fonts.googleapis.com/css?family=Roboto"<br>
              ]</code>
</p>
<p>На уровне "assetGroups" создать "dataGroups":</p>
<code>
  "dataGroups": [<br>
    {<br>
      "name": "firebase-posts",<br>
      "urls": [<br>
        "https://angularblogtest-1b8f2-default-rtdb.firebaseio.com/**"<br>
      ],<br>
      "cacheConfig": {<br>
        "maxSize": 5,<br>
        "maxAge": "3600"<br>
      }<br>
    }<br>
  ]
</code>
</li>
<li>Сделать production сборку<br>
<code>ng build --prod</code>
</li>
<li>После чего в корне создалась папка dist </li>
</ol>

## Деплой приложения
Зайти в firebase -> hoisting -> начать<br>
Установить firebase-tools<br>
npm install -g firebase-tools<br>
После установки пакета возвращаемся в firebase, нажимаем далее<br>
firebase login<br>
Если не было аккаунта, то откроется вкладка браузера, где можно выбрать аккаунт<br>
firebase init<br>
Обязательно нужно находиться в корневой папке (cd.. - выйти из папки)<br>

 Are you ready to proceed? (Y/n) Y<br>
Выбрать Hoisting c FireBase (выбрать пробелом -> enter)<br>
Какой проект используем?<br>
Use an existing project<br>

Выбрать проект
What do you want to use as your public directory? Какая директория является публичной? dist/AngularBlogTest<br>
Configure as a single-page app (rewrite all urls to /index.html)? Необходимо ли конфигурировать данное приложение как single page application? - Y<br>
Set up automatic builds and deploys with GitHub? Настроить автоматические сборки и развертывания с помощью GitHub? - y<br>
For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository) Marisha-tech/BlogLFlower<br>
Set up the workflow to run a build script before every deploy? (y/N) - y<br>
File dist/AngularBlogTest/index.html already exists. Overwrite? - n<br>
firebase deploy<br>

После чего в консоло сообщение Firebase initialization complete!<br>
В корне приложения появляются файлы .firebaserc, firebase.json<br>

Переходим в firebase нажимаем далее<br>
В консоли написать <code>firebase deploy</code><br>
