import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkillsPage } from './skills.page';


/* Routing for tabs
  - Benjamin Kanerva 1751504
*/

const routes: Routes = [
  {
    path: '',
    component: SkillsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillsPageRoutingModule { }
