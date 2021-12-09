import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HistoryPageComponent } from './component/history-page/history-page.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UserprofileComponent } from './component/userprofile/userprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoryPageComponent,
    DashboardComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
