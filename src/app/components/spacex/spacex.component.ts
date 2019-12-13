import { Component } from '@angular/core';
import { SpacexService } from 'src/app/services/spacex.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spacex',
  templateUrl: './spacex.component.html',
  styleUrls: ['./spacex.component.css']
})
export class SpacexComponent {

  companyData:any;

  constructor(private _spacexService:SpacexService, private router:ActivatedRoute) {
    this.router.params.subscribe(params => {
      this._spacexService.GetCompanyInfo().subscribe( data => {
        console.log(data);
        this.companyData = data;
      })
    })
  }

}
