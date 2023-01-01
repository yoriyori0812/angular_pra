import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListComponent } from './list/list.component';
import { SettingComponent } from './setting/setting.component';
import { MainComponent } from './main/main.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { Main2Component } from './main2/main2/main2.component';
import { OtherComponent } from './main2/other/other.component';
import { Setting2Component } from './main2/setting2/setting2.component';
import { WorkComponent } from './work/work.component';

import { SearchmountainsService } from './service/searchmountains.service';
import { SearchpersonService } from './service/searchperson.service';

import { Links, LINKS_INFO} from './app-common';
import { LoginedComponent } from './logined/logined.component';



@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    ListComponent,
    SettingComponent,
    MainComponent,
    Main2Component,
    OtherComponent,
    Setting2Component,
    WorkComponent,
    LoginedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    NgxChartsModule
  ],
  providers: [ {provide: LINKS_INFO, useValue: Links}, SearchmountainsService, SearchpersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
