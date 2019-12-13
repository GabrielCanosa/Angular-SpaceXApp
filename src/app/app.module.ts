import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ROUTES } from '../app/app.routes'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SpacexComponent } from './components/spacex/spacex.component';
import { HistoryComponent } from './components/history/history.component';
import { ApiinfoComponent } from './components/apiinfo/apiinfo.component';
import { LandingpadsComponent } from './components/landingpads/landingpads.component';
import { LaunchesComponent } from './components/launches/launches.component';
import { MissionsComponent } from './components/missions/missions.component';
import { RocketsComponent } from './components/rockets/rockets.component';
import { RoadsterComponent } from './components/roadster/roadster.component';
import { AboutdevComponent } from './components/aboutdev/aboutdev.component';
import { NavbuttonsComponent } from './components/navbuttons/navbuttons.component';
import { RocketDetailComponent } from './components/rocket-detail/rocket-detail.component';
import { LaunchDetailComponent } from './components/launch-detail/launch-detail.component';

// Servicios
import { SpacexService } from './services/spacex.service';

//Pipes
import { MoneyPipe } from './pipes/money.pipe';
import { AddSharpPipe } from './pipes/add-sharp.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpacexComponent,
    HistoryComponent,
    ApiinfoComponent,
    LandingpadsComponent,
    LaunchesComponent,
    MissionsComponent,
    RocketsComponent,
    RoadsterComponent,
    AboutdevComponent,
    NavbuttonsComponent,
    MoneyPipe,
    AddSharpPipe,
    RocketDetailComponent,
    LaunchDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [SpacexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
