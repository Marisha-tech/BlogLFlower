import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {CreatePageComponent} from './create-page/create-page.component';
import {EditPageComponent} from './edit-page/edit-page.component';
import { HeaderAdminComponent } from './shared/components/header-admin/header-admin.component';
// import {AuthService} from "./shared/services/auth.service";
import {SharedModule} from "../shared/shared.module";
import {AuthGuard} from "./shared/services/auth.guard";
import {SearchPipe} from "./shared/search.pipe";
import { AlertComponent } from './shared/components/alert/alert.component';
import {AlertService} from "./shared/services/alert.service";
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,//CommonModule чтобы в админском модуле присутствовали все базовые директивы, пайпы и т.д.
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([//RouterModule для того, чтобы использовать внутренние роуты
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]},
          {path: 'create', component: CreatePageComponent, canActivate: [AuthGuard]},
          {path: 'post/:id/edit', component: EditPageComponent, canActivate: [AuthGuard]}
        ]
      }
    ]),
  ],
  exports: [RouterModule],
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    DashboardPageComponent,
    CreatePageComponent,
    EditPageComponent,
    HeaderAdminComponent,
    SearchPipe,
    AlertComponent,
    FooterComponent,
  ],
  providers: [AuthGuard, AlertService]
})
export class AdminModule {

}
