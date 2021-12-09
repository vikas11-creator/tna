import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { MyserviceService } from 'src/service/myservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'assignment';
  inpValues: any = {};
  image: any = {};
  history: any = '';
  profileDatas: any = '';
  constructor(private service: MyserviceService, private router: Router, public route: ActivatedRoute) {
    this.service.searchHistory.subscribe(res => {
      this.history = res
    })

  }

  ngOnInit(): void {
  }

  onEnter(val) {
    this.service.getAllData(val).subscribe(data => {
      this.inpValues = data.items;
      console.log(this.inpValues)
    });

    this.service.searchHistory.next(val)

    console.log(localStorage.getItem('dataSource'));
  }

  seeHistory(hist) {
    this.router.navigate(['/history']);
  }
  
  viewProfile(link) {
    console.log(link);
    this.service.getProfileData(link).subscribe(data => {
      this.profileDatas = data;
      console.log(data)
      let navigationExtras: NavigationExtras = {
        queryParams: {
          "data": JSON.stringify(data),
        }
      }
      this.router.navigate(["userprofile"], navigationExtras);

    });


  }
}
