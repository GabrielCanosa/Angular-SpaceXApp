import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexService } from 'src/app/services/spacex.service';

@Component({
  selector: 'app-rocket-detail',
  templateUrl: './rocket-detail.component.html',
  styleUrls: ['./rocket-detail.component.css']
})
export class RocketDetailComponent implements OnInit {

  rocket:any;

  constructor(private router:ActivatedRoute, private _spacexService: SpacexService) {
    this.router.params.subscribe( params => {
        this._spacexService.GetRocketById(params['id']).subscribe( (data:any) => {
          this.rocket = data;
          console.log(this.rocket);
        });
    });
  }

  ngOnInit() {
  }

}
