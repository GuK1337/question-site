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
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {DragDropModule} from "@angular/cdk/drag-drop";
import { SelectWordsComponent } from './components/select-words/select-words.component';
import {CorrectAnswerService} from "./services/correct-answer.service";
import { SelectImageComponent } from './components/select-image/select-image.component';
import { SecondTabComponent } from './tabs/second-tab/second-tab.component';

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
      },
      {
        path: 'wordstock',
        component: SecondTabComponent
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
    SelectWordsComponent,
    SelectImageComponent,
    SecondTabComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatIconModule,
    DragDropModule

  ],
  providers: [
    CorrectAnswerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
