import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { dashboardReducer } from './reducers/dashboard.reducer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListComponent } from './components/list.component';
import { FormComponent } from './components/form.component';
import { ResumeComponent } from './components/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      dashboard: dashboardReducer
    }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
