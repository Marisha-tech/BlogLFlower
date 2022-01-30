import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {PostPageComponent} from "./post-page/post-page.component";
import {SkillSectionComponent} from "./shared/components/sections/skill-section/skill-section.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},//для редиректа
      {path: '', component: HomePageComponent},
      {path: '', component: SkillSectionComponent},
      {path: 'post/:id', component: PostPageComponent}
    ]
  },
  {
    // path: 'admin', loadChildren: './admin/admin.module#AdminModule'//устарело
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules//стратегия загрузки различных lazy-loading модулей
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
