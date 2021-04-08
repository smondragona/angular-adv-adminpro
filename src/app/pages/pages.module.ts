import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';

//Modulos
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { FormsModule } from '@angular/forms';
import { AccountSettingsComponent } from './account-settings/account-settings.component'



//Componentes Duplicados

const PAGES_COMPONENT = [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
]

@NgModule({
  declarations: [
    PAGES_COMPONENT,
    AccountSettingsComponent
  ],
  exports: [
    PAGES_COMPONENT,
    AccountSettingsComponent
  ],
  imports: [ 
    CommonModule,
    SharedModule,
    ChartsModule,
    RouterModule,
    FormsModule,
    ComponentsModule
  ]
})
export class PagesModule { }
