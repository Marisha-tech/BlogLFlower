/*
* Модуль необходим для того, чтобы использовать HttpClient как в админском модуле (admin.module.ts), так и в главном модуле (app.module.ts)*/

import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [HttpClientModule],
  exports: [HttpClientModule],
})

export class SharedModule {


}
