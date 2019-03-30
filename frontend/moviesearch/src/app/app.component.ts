import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MovieCardComponent} from './ui/movie-card/movie-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  query:string;

  constructor(public router: Router) {

  }

  ngOnInit() {    
  }

  search(){
  	this.router.navigateByUrl('?query='+this.query);
  }

}
