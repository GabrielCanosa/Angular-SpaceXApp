import { Component, OnInit } from '@angular/core';
import { SpacexService } from 'src/app/services/spacex.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css']
})
export class RocketsComponent implements OnInit {

  rockets:any[]= [];

  constructor(private _spacexService: SpacexService, private route:ActivatedRoute, private router:Router) {
    this.route.params.subscribe( response => {
      this._spacexService.GetAllRockets().subscribe( data => {
        this.rockets = data;
        console.log(this.rockets);
      })
    })
  }

  GetRocketDetails(id){
    this.router.navigate(['/rocket', id]);
  }

  ngOnInit() {
  }

}
