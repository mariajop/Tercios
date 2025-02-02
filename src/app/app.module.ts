import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NewsComponent } from './components/news/news.component';
import { BarFinderComponent } from './components/bar-finder/bar-finder.component';
import { InfoFlayerComponent } from './components/info-flayer/info-flayer.component';
import { FooterComponent } from './components/footer/footer.component';
import { BarFinderFormComponent } from './components/bar-finder-form/bar-finder-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    NewsComponent,
    BarFinderComponent,
    InfoFlayerComponent,
    FooterComponent,
    BarFinderFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
