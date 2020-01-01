import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexService } from 'src/app/services/spacex.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  historyItems:any[] = [];

  constructor(private router:ActivatedRoute, private _spacexService:SpacexService) {
    this.router.params.subscribe(params => {
      this._spacexService.GetHistory().subscribe( data => {
        this.historyItems = data;
        console.log(this.historyItems);
      })
    })
  }

  ngOnInit() {
  }

}
