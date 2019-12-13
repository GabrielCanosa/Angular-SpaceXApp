import { Component, OnInit } from '@angular/core';
import { SpacexService } from 'src/app/services/spacex.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.css']
})
export class MissionsComponent implements OnInit {

  missions:any[]= [];

  constructor(private _spacexService: SpacexService, private route:ActivatedRoute, private router:Router) {
    this.route.params.subscribe( response => {
      this._spacexService.GetAllMissions().subscribe( data => {
        this.missions = data;
        console.log(this.missions);
      })
    })
  }

  ngOnInit() {
  }

  getMissionDescription(missionName){
    this.missions.forEach(function (value) {
      if(value.mission_name == missionName){

        if(!value.description) { value.description = ''; }
        if(!value.twitter) { value.twitter = ''; }
        if(!value.website) { value.website = ''; }
        if(!value.wikipedia) { value.wikipedia = ''; }

        document.getElementById('nav-tabContent').innerHTML = `
          <div class="tab-pane fade show active" role="tabpanel">
              <p style="font-family: 'Nanum Gothic Coding', monospace; font-weight: bold;">
                ${value.description}
              </p>
              <a href="${value.twitter}"><p style="font-family: 'Nanum Gothic Coding', monospace; font-weight: bold;">
                ${value.twitter}
              </p></a>
              <a href="${value.website}"><p style="font-family: 'Nanum Gothic Coding', monospace; font-weight: bold;">
                ${value.website}
              </p></a>
              <a href="${value.wikipedia}"><p style="font-family: 'Nanum Gothic Coding', monospace; font-weight: bold;">
                ${value.wikipedia}
              </p></a>
          </div>
        `;
      }
    });
  }
}
