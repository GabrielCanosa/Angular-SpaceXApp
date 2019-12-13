import { Component, OnInit } from '@angular/core';
import { SpacexService } from 'src/app/services/spacex.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {

  launches:any[] = [];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(private _spacexService: SpacexService, private route:ActivatedRoute, private router:Router) {
    this.route.params.subscribe( response => {
      this._spacexService.GetAllLaunches().subscribe( data => {
        this.launches = data;
        console.log(this.launches);
        
        this.setPage(1);
      })
    })
  }

  GetLaunchDetail(flight_number){
    this.router.navigate(['/launch', flight_number]);
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this._spacexService.getPager(this.launches.length, page);

    // get current page of items
    this.pagedItems = this.launches.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  ngOnInit() {
  }

}
