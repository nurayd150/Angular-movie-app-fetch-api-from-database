import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContentModule } from './content/content.module';
import { HighlightDirective } from './directives/highlight.directive';
import {HttpClientModule} from '@angular/common/http';
import { UserService } from './services/user.service';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    AboutComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContentModule,
    HttpClientModule,
    InputTextModule,
  ],
  providers: [UserService],
  bootstrap: [TestComponent]
})
export class AppModule { }
