  import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkComponent } from './work/work.component';

import { ListComponent } from './list/list.component';
import { SettingComponent } from './setting/setting.component';
import { MainComponent } from './main/main.component';
import { LoginedComponent } from './logined/logined.component'

import {Main2Component} from './main2/main2/main2.component';
import {OtherComponent} from './main2/other/other.component';
import {Setting2Component} from './main2/setting2/setting2.component';

import {JudgeLoginGuard} from './service/judge-login.guard';


const routes: Routes = [
  {
    path: 'work',
    component: WorkComponent,
    data: {
      breadcrumb: 'Work'
    },
    children: [
      {
        path: 'main',
       component: MainComponent,
       data: {
         breadcrumb: "Main"
       }
      },
      {
        path: 'logined',
        component: LoginedComponent,
        canActivate: [JudgeLoginGuard],
        data: {
          breadcrumb: "Logined"
        }
      },
      {
        path: 'list',
       component: ListComponent,
       data: {
         breadcrumb: "List"
       },
      },
      {
        path: 'setting',
        component: SettingComponent,
        data: {
          breadcrumb: "Setting"
        }
      }
  ]
  }
  ,{
    path: 'work2',
    component: WorkComponent,
    data: {
      breadcrumb: 'Work'
    },
    children: [
      {
        path: 'main2',
       component: Main2Component,
       data: {
         breadcrumb: "Main"
       }
      },
      {
        path: 'other',
        component: OtherComponent,
        data: {
        breadcrumb: "Other"
        }
      },
      { path: 'setting2',
        component: Setting2Component,
        data: {
          breadcrumb: "Setting2"
          }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [JudgeLoginGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
