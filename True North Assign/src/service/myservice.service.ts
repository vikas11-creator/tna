import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, switchMap } from 'rxjs/operators';
import { BehaviorSubject, Observable, ReplaySubject, Subject, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json; charset=utf-8'
  })
}
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) { 
    if (localStorage.getItem('data')) {
      let d = localStorage.getItem('data').split(',')
      this.historyList.next(d);
    }
   
  }
  private Url = 'https://api.github.com/users/octocat/repos';  

  getHeroes() {
    return this.http.get(this.Url, httpOptions)
  }
  getAllData(name) {

    const url = `https://api.github.com/search/users?q=${name}`;
    return this.http.get(url, httpOptions)
      .pipe(
        map((data: any) => {
          console.log(data);
          return data;
        }),
        catchError((error: any) => {
          console.log('getReportingMngrList catchError', error);
          return throwError(error.error);
        })
      );
  }

  getAvatar(name) {

    const url = `https://avatars.githubusercontent.com/name`;
    return this.http.get(url, httpOptions)
      .pipe(
        map((data: any) => {
          console.log(data);
          return data;
        }),
        catchError((error: any) => {
          console.log('getReportingMngrList catchError', error);
          return throwError(error.error);
        })
      );
  }
  getProfileData(url) {

    return this.http.get(url, httpOptions)
      .pipe(
        map((data: any) => {
          console.log(data);
          return data;
        }),
        catchError((error: any) => {
          console.log('getReportingMngrList catchError', error);
          return throwError(error.error);
        })
      );
  }
  searchHistory = new BehaviorSubject<String>('');
  historyList = new BehaviorSubject<any>([]);


  addUser(search) {
    let searchHistoryData = [];
    if (localStorage.getItem('data')) {
      searchHistoryData = localStorage.getItem('data').split(',');
      searchHistoryData.push(search);
    } else {
      searchHistoryData.push(search);
    }
    let item = [...new Set(searchHistoryData)];
    localStorage.setItem('data', item.toString());
    this.historyList.next(item);
    console.log(localStorage.getItem('data').split(','));
    
  }

  removeHistory(index) {

    let searchHistoryData = localStorage.getItem('data').split(',');
    searchHistoryData.splice(index,1);
    if (searchHistoryData.length > 0) {
      localStorage.setItem('data',  searchHistoryData.toString());
      console.log(localStorage.getItem('data').split(','));
      this.historyList.next(localStorage.getItem('data').split(','));
    }else{
      localStorage.setItem('data',  '');
      this.historyList.next([]);

    }
   
  }
}

