import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";
import {MatButtonModule} from '@angular/material/button';
import { FirstTabComponent } from './tabs/first-tab/first-tab.component';
import { MainComponent } from './tabs/main/main.component';
import { StartPageComponent } from './start-page/start-page.component';
import {MatTabsModule} from "@angular/material/tabs";
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path:'',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path:'main',
    component: StartPageComponent,
  },
  {
    path:'tasks',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/grammar'
      },
      {
        path: 'grammar',
        component: FirstTabComponent
      }
    ]
  },
  {
    path:'**',
    redirectTo: '/main'
  }

]


@NgModule({
  declarations: [
    AppComponent,
    FirstTabComponent,
    MainComponent,
    StartPageComponent,
    ToggleButtonComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
