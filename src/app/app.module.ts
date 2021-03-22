import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SupportComponent } from './support/support.component';
import { PerformanceComponent } from './performance/performance.component';
import { GoogleTrendsComponent } from './components/google-trends/google-trends.component';
import { FooterComponent } from './components/footer/footer.component';
import { PerformanceListComponent } from './components/performance-list/performance-list.component';
import { RenderFormComponent } from './components/render-form/render-form.component';
import { GithubStarsComponent } from './components/github-stars/github-stars.component';
import { NpmDownloadsComponent } from './components/npm-downloads/npm-downloads.component';
import { GithubStarsService } from './components/github-stars/github-stars.service'
import { NpmDownloadService } from './components/npm-downloads/npm-downloads.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SupportComponent,
    PerformanceComponent,
    GoogleTrendsComponent,
    FooterComponent,
    PerformanceListComponent,
    RenderFormComponent,
    GithubStarsComponent,
    NpmDownloadsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GithubStarsService, NpmDownloadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
