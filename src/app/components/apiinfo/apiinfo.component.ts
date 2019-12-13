import { Component, OnInit } from '@angular/core';
import { SpacexService } from 'src/app/services/spacex.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apiinfo',
  templateUrl: './apiinfo.component.html',
  styleUrls: ['./apiinfo.component.css']
})
export class ApiinfoComponent implements OnInit {

  apiInfo:any;

  constructor(private _spacexService:SpacexService, private route:ActivatedRoute) {
    this.route.params.subscribe(response =>{
      this._spacexService.GetApiInfo().subscribe(data =>{
        this.apiInfo = data;
      })
    })
  }

  ngOnInit() {
  }

}
