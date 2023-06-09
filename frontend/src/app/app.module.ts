import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; /**FormsModule is the standard Angular directive for two-way data binding */

import { AppComponent } from './app.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { DeplacementComponent } from './deplacement/deplacement.component';
import { ConfigDetailComponent } from './config-detail/config-detail.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StopComponent } from './stop/stop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; /**HttpClientModule is the module that includes the HttpClient service */
import { CommonModule } from '@angular/common';
import { DefaultConfComponent } from './default-conf/default-conf.component';
import { ReceipeComponent } from './receipe/receipe.component';
import { ReceipeListComponent } from './receipe-list/receipe-list.component';
import { ReceipeDetailsComponent } from './receipe-details/receipe-details.component';
import { RecordloopComponent } from './recordloop/recordloop.component';
import { GcodeComponent } from './gcode/gcode.component';
import { VoidComponent } from './void/void.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigurationComponent,
    DeplacementComponent,
    ConfigDetailComponent,
    StopComponent,
    DefaultConfComponent,
    ReceipeComponent,
    ReceipeListComponent,
    ReceipeDetailsComponent,
    RecordloopComponent,
    GcodeComponent,
    VoidComponent,
    /*DefaultConfComponent,*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, /***The HttpClientInMemoryWebApiModule module intercepts HTTP requests and returns simulated server responses. Remove it when a real server is ready to receive requests. */
    CommonModule
  ],
  bootstrap: [AppComponent], 
})
export class AppModule { }
