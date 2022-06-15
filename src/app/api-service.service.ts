import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getNamesofBooks(){
   return this.http.get('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=6xXkaqwJBKYPVPiALAyGhA2KVanSyDWs')
  }
  getHandReviewofBooks(){
    return this.http.get('https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=6xXkaqwJBKYPVPiALAyGhA2KVanSyDWs')
   }
   getArchievsofBooks(){
    return this.http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=6xXkaqwJBKYPVPiALAyGhA2KVanSyDWs')
   } 
}
