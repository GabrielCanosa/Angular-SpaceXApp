import { Component, OnInit } from '@angular/core';
import { SpacexService } from 'src/app/services/spacex.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-roadster',
  templateUrl: './roadster.component.html',
  styleUrls: ['./roadster.component.css']
})
export class RoadsterComponent implements OnInit {

  roadster:any;

  constructor(private _spacexService: SpacexService, private route:ActivatedRoute) {
    this.route.params.subscribe( response => {
      this._spacexService.GetRoadster().subscribe( data => {
        this.roadster = data;
        console.log(this.roadster);
        console.log(this.roadster.flickr_images);
      })
    })
  }

  ngOnInit() {
  }

}
