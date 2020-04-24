import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

/* Added all routes
  - Benjamin Kanerva 1751504
*/
const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/menu/menu.module#MenuPageModule'
  },
  {
    path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule'
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'skills',
    loadChildren: () => import('./pages/skills/skills.module').then(m => m.SkillsPageModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./pages/projects/projects.module').then(m => m.ProjectsPageModule)
  },
  {
    path: 'extra',
    loadChildren: () => import('./pages/extra/extra.module').then(m => m.ExtraPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
