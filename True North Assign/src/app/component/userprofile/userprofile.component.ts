import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  data : any;
  constructor(private route : ActivatedRoute) { 
        
  }
 
  ngOnInit(): void {
    this.data = JSON.parse(this.route.snapshot.queryParams.data);
    console.log(this.data);
  }

}
