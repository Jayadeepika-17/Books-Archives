import { Component } from '@angular/core';
import {ApiServiceService} from'./api-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Books-review';
  booksList;
  booksReview: Object;
  archiev: Object;
  bookShow:boolean = true;
  reviewShow:boolean = false;
  archievShow:boolean = false;
  constructor(private apiService :ApiServiceService){}
  ngOnInit(){
    this.apiService.getNamesofBooks().subscribe(res=>{
      this.booksList = res;
      console.log('getNamesofBooks==>', res)
    })
    this.apiService.getHandReviewofBooks().subscribe(res=>{
      this.booksReview = res;
      console.log('getHandReviewofBooks==>', res) 
    })
    this.apiService.getArchievsofBooks().subscribe(res=>{
      this.archiev = res; 
      console.log('getArchievsofBooks==>', res)
    })

  }
  totalBooksList(){
    this.bookShow = true;
    this.reviewShow = false;
    this.archievShow = false;
  }
  totalBooksReview(){
    this.bookShow = false;
    this.reviewShow = true;
    this.archievShow = false;
  }
  archievList(){
    this.bookShow = false;
    this.reviewShow = false;
    this.archievShow = true;

  }
}
