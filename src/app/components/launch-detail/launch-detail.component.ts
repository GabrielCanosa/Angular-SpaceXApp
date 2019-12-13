import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexService } from 'src/app/services/spacex.service';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-launch-detail',
  templateUrl: './launch-detail.component.html',
  styleUrls: ['./launch-detail.component.css']
})
export class LaunchDetailComponent implements OnInit {

  launch:any;
  image:any;

  constructor(private router:ActivatedRoute, private _spacexService: SpacexService, private _sanitizer: DomSanitizer) {
    this.router.params.subscribe( params => {
        this._spacexService.GetLaunchById(params['flight_number']).subscribe( (data:any) => {
          this.launch = data;
          if(!this.launch.links.flickr_images[0]){
            this.image = this.launch.links.mission_patch;
          } else {
            this.image = this.launch.links.flickr_images[0];
          }
            
        });
    });
  }

  getVideoIframe(url) {
    var video, results;
 
    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];
 
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
  }


  ngOnInit() {
  }

}
