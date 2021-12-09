import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/service/myservice.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  history1 = [];
  user: any = {};

  constructor(private service: MyserviceService) {
    this.service.historyList.subscribe(list => {
      this.history1 = []
      this.history1 = list;
    })
    this.service.searchHistory.subscribe(data => {
      console.log(this.history1);

      if (data !== '') {
        this.service.addUser(data);
      }

    }, error => {
      console.log(error)
    });
  }
  ngOnInit(): void {

  }




  removeSearch(index) {
    this.service.removeHistory(index);
  }
}
