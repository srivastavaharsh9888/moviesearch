import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from '../../services/customerService/customerService.service';
import { movieCard } from './entity';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})

export class MovieCardComponent implements OnInit, OnDestroy {

  movieList : movieCard;
  headerString : string;
  environ:any;
  bind: boolean;
  finished:boolean;
  queryData:string;
  resultFound:boolean;
  
  constructor(public customer: CustomerService, public activeRouter: ActivatedRoute,public router: Router) {
    this.headerString="Trending";
    this.environ=environment;
    this.movieList=new movieCard();
    this.bind=false;
    this.finished=false;
    this.resultFound=false;
  }
  
  ngOnInit() {
    this.activeRouter.queryParams.subscribe((route: any) => {
      this.queryData = route.query;
      if(!(this.queryData===null || this.queryData=="" || this.queryData===undefined))
      {
        this.resultFound=false;
        this.showQueryData(this.queryData);
      }
      else{
        this.resultFound=false;
        this.bind=true;
        this.customer.getTrendinMovie(1)
        .subscribe((data:any) => {
          this.movieList=data;
        });
      }
    });
  }

  public setData(data)
  {
    this.movieList.results=this.movieList.results.concat((data.results))
    this.movieList.page=data.page;
    this.movieList.total_pages=data.total_pages;
    this.bind=false;
  }

  public onScrollDown(): void {
    if (this.movieList.page==this.movieList.total_pages)
      this.finished=true;
    else
    {
      this.activeRouter.queryParams.subscribe((route: any) => {
      this.queryData = route.query;
      if(!(this.queryData===null || this.queryData=="" || this.queryData===undefined))
      {
        this.bind=true;
        this.customer.getQueryMovie(this.movieList.page+1,this.queryData)
          .subscribe((data:any) => {
             this.setData(data);
        });
      }
      else
      {
        this.bind=true;
        this.customer.getTrendinMovie(this.movieList.page+1)
        .subscribe((data:any) => {
            this.setData(data);
        });
      }
      });
    }
}

  ngOnDestroy() {

  }

  openDetails(id,detail) {
    this.router.navigateByUrl('/details/'+id);
    localStorage.setItem(id,JSON.stringify(detail));
  }

  public showQueryData(query){
    this.headerString=query;
    this.finished=false;
    this.bind=true;
    this.customer.getQueryMovie(1,query)
      .subscribe((data:any) => {
        if(data.results.length==0){
          this.resultFound=true;
        }
        this.movieList=data;
        this.bind=false;
    });
  }

}

