import {NgModule, Provider} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {HomePageComponent} from './home-page/home-page.component';
import {PostPageComponent} from './post-page/post-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatTabsModule} from "@angular/material/tabs";
import { SkillSectionComponent } from './shared/components/sections/skill-section/skill-section.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatMenuTrigger} from "@angular/material/menu";
import { PostComponent } from './shared/components/post/post.component';
import { HeaderMainComponent } from './shared/components/headers/header-main/header-main.component';
import {HeaderComponent} from "./shared/components/headers/header/header.component";
import { FooterComponent } from './shared/components/footers/footer/footer.component';
import {SharedModule} from "./shared/shared.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./shared/auth.interceptor";

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true, // чтобы не перетирались интерсепторы и чтобы при добавлении еще одного интерсептора он был добавлен последовательно
  useClass: AuthInterceptor,
}

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PostPageComponent,
    SkillSectionComponent,
    PostComponent,
    HeaderMainComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule,
    MatProgressBarModule,
    // MatMenuTrigger,

  ],
  providers: [INTERCEPTOR_PROVIDER],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
