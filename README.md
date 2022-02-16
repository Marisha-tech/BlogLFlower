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
