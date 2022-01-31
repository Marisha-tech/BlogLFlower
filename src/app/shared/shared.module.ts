/*
* Модуль необходим для того, чтобы использовать HttpClient как в админском модуле (admin.module.ts), так и в главном модуле (app.module.ts)*/

import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {QuillModule} from "ngx-quill";

@NgModule({
  imports: [
    HttpClientModule,
    QuillModule.forRoot(), //Подключение плагина редактора
  ],
  exports: [
    HttpClientModule,
    QuillModule, //Подключение плагина редактора
  ],
})

export class SharedModule {


}
