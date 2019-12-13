import { Component, OnInit } from '@angular/core';
import { SpacexService } from 'src/app/services/spacex.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landingpads',
  templateUrl: './landingpads.component.html',
  styleUrls: ['./landingpads.component.css']
})
export class LandingpadsComponent implements OnInit {

  landingPads:any[]= [];

  constructor(private _spacexService: SpacexService, private route:ActivatedRoute) {
    this.route.params.subscribe(response=>{
      this._spacexService.GetAllLandingPads().subscribe(data=>{
        this.landingPads = data;
        console.log(this.landingPads);
      })
    })
  }

  ngOnInit() {
  }

}
