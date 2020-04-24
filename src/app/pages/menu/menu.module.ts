import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuPage } from './menu.page';

/*
Added all the paths to the menu page
- Benjamin Kanerva 1751504
*/
const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'profile',
        loadChildren: '../profile/profile.module#ProfilePageModule'
      },
      {
        path: 'skills',
        loadChildren: '../skills/skills.module#SkillsPageModule'
      },
      {
        path: 'projects',
        loadChildren: '../projects/projects.module#ProjectsPageModule'
      },
      {
        path: 'extra',
        loadChildren: '../extra/extra.module#ExtraPageModule'
      },
      {
        path: 'contact',
        loadChildren: '../contact/contact.module#ContactPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/profile'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }
