import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from '../../services/customerService/customerService.service';
import {movieDetail} from './entity';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

  detail:any;
  movieId:number;
  keywords:any;
  environ:any;
  crew:any;
  titles:any;
  titleLoad:boolean;
  crewLoad:boolean;

  constructor(public activeRouter: ActivatedRoute, public movie: CustomerService) {
    this.detail=new movieDetail();
    this.environ=environment;
  }

  async getKeyword(type){
    this.movie.getMovieOtherDetails(this.movieId,type)
      .subscribe((data:any) => {
        this.keywords=data;
    });
  }

  async getCrew(type){
    this.crewLoad=true;
    this.movie.getMovieOtherDetails(this.movieId,type)
      .subscribe((data:any) => {
        this.crew=data;
        this.crewLoad=false;
    });
  }

  async getTitle(type){
    this.titleLoad=true;
    this.movie.getMovieOtherDetails(this.movieId,type)
      .subscribe((data:any) => {
        this.titles=data;
        this.titleLoad=false;
    });
  }

  ngOnInit() {
    this.activeRouter.paramMap.subscribe((route: any) => {
      this.keywords=[];
      this.crew=[];
      this.titles=[];
      this.movieId = route.params.id;
      this.getKeyword("keywords");
      this.getCrew("credits");
      this.getTitle("alternative_titles");
      this.detail=JSON.parse(localStorage.getItem(this.movieId.toString()));
      if(this.detail==null || this.detail=="" || this.detail==undefined){
        this.movie.getMovieDetails(this.movieId,1)
          .subscribe((data:any) => {
            this.detail=data;
          });
       }
    });
  }

  userMsg(option){
    // this.messageList.push({"parMsg":{"msg":option.optionName,"userClass":"other","url":"./../assets/images.png"}})
    // this.customer.getMovieDetails(option.id,this.companyId)
    //   .subscribe((data:any) => {
    //     this.message=data;
    //     this.message.parMsg["url"]="./../assets/customer.jpeg";
    //     this.messageList.push(this.message);
    //     window.scrollTo(0,document.body.scrollHeight);
    //   });
      window.scrollTo(0,document.body.scrollHeight);
  }

}
