import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class CustomerService {
  environment:any;

  constructor(public http: HttpClient) {
  }

  getTrendinMovie(page:number): Subject<string> {
    const dataSubject = new Subject<any>();
    this.http.get(
      `${environment.serviceBaseURL}latestmovie/?page=${page}`)
      .subscribe((data) => {
        dataSubject.next(data);
      },(err) => {
        console.log(err);
      });
    return dataSubject;
  }

  getQueryMovie(page:number,query:string): Subject<string> {
    const dataSubject = new Subject<any>();
    this.http.get(
      `${environment.serviceBaseURL}querymovie/?page=${page}&query=${query}`)
      .subscribe((data) => {
        dataSubject.next(data);
      },(err) => {
        console.log(err);
      });
    return dataSubject;
  }

  getMovieDetails(movieId: number,page:number): Subject<any> {
    const dataSubject = new Subject<any>();
    let id: number;
    this.http.get(
      `${environment.serviceBaseURL}message/?movieId=${movieId}&page=${page}`)
      .subscribe((message) => {
        dataSubject.next(message);
      },(err)=>{
        console.log(err)
      });
    return dataSubject;
  }

  
  getMovieOtherDetails(movieId: number,type:string): Subject<any> {
    const dataSubject = new Subject<any>();
    let id: number;
    this.http.get(
      `${environment.serviceBaseURL}moviekeyword/?movieId=${movieId}&type=${type}`)
      .subscribe((message) => {
        dataSubject.next(message);
      },(err)=>{
        console.log(err)
      });
    return dataSubject;
  }


}
