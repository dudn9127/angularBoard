import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {AppRouterModule} from './app.router.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Test2Component } from './test2/test2.component';
import {HttpClientModule} from '@angular/common/http';
import {DateFormPipe} from './test2/test2.pipe';
import { GuardComponent } from './guard/guard.component';
import {RouterModule} from '@angular/router';
import {AuthGuard} from './auth.guard';
import { SampleDirective } from './sample.directive';
import { Sample4Component } from './sample4/sample4.component';
import { Sample5Component } from './sample5/sample5.component';
import { Sample6Component } from './sample6/sample6.component';
import { BoardComponent } from './board/board.component';
import { CreateComponent } from './board/create/create.component';
import { ShowComponent } from './board/show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    DateFormPipe,
    GuardComponent,
    SampleDirective,
    Sample4Component,
    Sample5Component,
    Sample6Component,
    BoardComponent,
    CreateComponent,
    ShowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  exports: [ RouterModule ]
})
export class AppModule { }
