import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {HomePageComponent} from './home-page/home-page.component';
import {PostPageComponent} from './post-page/post-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatTabsModule} from "@angular/material/tabs";
import { SkillSectionComponent } from './shared/sections/skill-section/skill-section.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatMenuTrigger} from "@angular/material/menu";
import { PostComponent } from './shared/components/post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PostPageComponent,
    SkillSectionComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule,
    MatProgressBarModule,
    // MatMenuTrigger,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
