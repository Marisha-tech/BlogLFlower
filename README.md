# BlogLFlower

<p>BlogLFlower - информационый сайт о растениеводстве</p>
<p>Проект создан с помощью Angular CLI версии 12.2.10</p>
Используются:
<ol> 
<li>AngularMaterial</li>
<li>плагин редактора quill</li>
<li>firebase</li>
</ol>

<p>Проект: https://bloglflower.web.app/</p>
<p>Админка: https://bloglflower.web.app/admin</p>

<ol>
<li>В публичной части размещен список постов о растениях. В необходимый пост можно перейти по кнопке "Открыть"</li>
<li>В административной части сайта существует возможность создавать/редактировать/удалять посты.</li>
<li>БД подключена с использованием firebase с помощью методов, которые позволяют работать с firebase как c RestAPI (набор URL, к которым идет обращение и получение данных)</li>
<li>В административной части сайта используется форма авторизации с проверкой на валидацию, обработкой ошибок. Права пользователей настраиваются в firebase. Время жизни токена 3600.</li>
<li>Без авторизации с правами администратора невозможно попасть на любую страницу админки (например https://bloglflower.web.app/admin/dashboard)</li>
<li>В административной части используется фильтрация по названию поста (search.pipe.ts)</li>
<li>При создании/удалении/редактировании поста выводится сообщение (например "Пост создан"). Реализовано с помощью созданного плагина сообщений (alert.component.ts)</li>
<li>Используется локализация (regicterLocaleDate). При выводе даты поста используется pipe date (| date:'medium':'':'ru')  </li>
<li>Деплой приложения осуществлен с помощью firebase</li>
</ol>



### Languages and Tools
![Angular](https://img.shields.io/badge/-Angular-090909?style=for-the-badge&logo=Angular)
![HTML](https://img.shields.io/badge/-HTML5-090909?style=for-the-badge&logo=HTML5)
![CSS](https://img.shields.io/badge/-CSS-090909?style=for-the-badge&logo=CSS3)
![TypeScript](https://img.shields.io/badge/-TypeScript-090909?style=for-the-badge&logo=TypeScript)
![AngularMaterial](https://img.shields.io/badge/-AngularMaterial-090909?style=for-the-badge&logo=AngularMaterial)

## Подключение плагина редактора (quill)
<a href="https://www.npmjs.com/package/ngx-quill">https://www.npmjs.com/package/ngx-quill
<ol>
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
</ol>

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
<ol>
<li>Зайти в firebase -> hoisting -> начать</li>
<li>Установить firebase-tools
<code>npm install -g firebase-tools</code></li>
<li>После установки пакета возвращаемся в firebase, нажимаем далее</li>
<li><code>firebase login</code></li>
<li>Если не было аккаунта, то откроется вкладка браузера, где можно выбрать аккаунт</li>
<li><code>firebase init</code></li>
<li>!!!!!!!!!Обязательно нужно находиться в корневой папке (cd.. - выйти из папки)</li>
<li>Are you ready to proceed? (Y/n) Y</li>
<li>Выбрать Hoisting c FireBase (выбрать пробелом -> enter)</li>
<li>Use an existing project Какой проект используем?</li>
<li>Выбрать пр</li>
<li>What do you want to use as your public directory? Какая директория является публичной? dist/AngularBlogTest</li>
<li>Configure as a single-page app (rewrite all urls to /index.html)? Необходимо ли конфигурировать данное приложение как single page application? - Y</li>
<li>Set up automatic builds and deploys with GitHub? Настроить автоматические сборки и развертывания с помощью GitHub? - y</li>
<li>For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository) Marisha-tech/BlogLFlower</li>
<li>Set up the workflow to run a build script before every deploy? (y/N) - y</li>
<li>File dist/AngularBlogTest/index.html already exists. Overwrite? - n</li>
<li><code>firebase deploy</code></li>
<li>После чего в консоло сообщение Firebase initialization complete!<br>
В корне приложения появляются файлы .firebaserc, firebase.json</li>
<li>Переходим в firebase нажимаем далее</li>
<li>В консоли написать <code>firebase deploy</code></li>
</ol>
