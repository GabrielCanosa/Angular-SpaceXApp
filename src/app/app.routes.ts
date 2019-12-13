import { Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { AboutdevComponent } from './components/aboutdev/aboutdev.component'
import { ApiinfoComponent } from './components/apiinfo/apiinfo.component'
import { HistoryComponent } from './components/history/history.component'
import { LandingpadsComponent } from './components/landingpads/landingpads.component'
import { LaunchesComponent } from './components/launches/launches.component'
import { MissionsComponent } from './components/missions/missions.component'
import { RoadsterComponent } from './components/roadster/roadster.component'
import { RocketsComponent } from './components/rockets/rockets.component'
import { SpacexComponent } from './components/spacex/spacex.component'
import { NavbuttonsComponent } from './components/navbuttons/navbuttons.component'
import { RocketDetailComponent } from './components/rocket-detail/rocket-detail.component';
import { LaunchDetailComponent } from './components/launch-detail/launch-detail.component';


export const ROUTES:Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'aboutDev', component: AboutdevComponent },
    { path: 'apiInfo', component: ApiinfoComponent },
    { path: 'history', component: HistoryComponent },
    { path: 'landingPads', component: LandingpadsComponent },
    { path: 'launches', component: LaunchesComponent },
    { path: 'launch/:flight_number', component: LaunchDetailComponent },
    { path: 'missions', component: MissionsComponent },
    { path: 'roadster', component: RoadsterComponent },
    { path: 'rockets', component: RocketsComponent },
    { path: 'rocket/:id', component: RocketDetailComponent },
    { path: 'spacex', component: SpacexComponent },
    { path: 'navButtons', component: NavbuttonsComponent},
    { path: '', pathMatch: 'full', redirectTo: 'apiInfo'},
    { path: '**', pathMatch: 'full', redirectTo: 'apiInfo'}
]