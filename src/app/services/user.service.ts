import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  userName: string='mehmet sert';//servis içindeki değişkeni test ts içerisnde ve test html içerisinde kullanabildim 
  // önce bahsi geçene component içerisinde servisi private bir değişken
  //olarak tanımladım ve buna serviste var olan nesne her neyse onun bilgisini atadım
  // daha sonra da bunu yine bahsi geçen componentin html dosyasında 
  //çağırdım 
  constructor(
    private http:HttpClient
  ) { }
  
    
  getFirstMovies(): Observable<results>{
    let headers= new HttpHeaders().set(	'x-rapidapi-key','d208f6567bmshe4cc93f28e3403fp1ec35ajsnd60249b08310',)
    .set('x-rapidapi-host', 'moviesdatabase.p.rapidapi.com');
    let url='https://moviesdatabase.p.rapidapi.com/titles/search/title/movie?info=mini_info&limit=50&page=1&titleType=movie';
    return this.http.get<results>(url,{headers})//bu url de fotoğraflar üzerinde 
    //işlem yapacağımı belirtiyorum
  }
  
  getUsers(obje:string):Observable<results>{
    let headers= new HttpHeaders().set(		'x-rapidapi-key','d208f6567bmshe4cc93f28e3403fp1ec35ajsnd60249b08310',)
    .set('x-rapidapi-host', 'moviesdatabase.p.rapidapi.com');
    let url=`https://moviesdatabase.p.rapidapi.com/titles/search/title/${obje}?info=mini_info&limit=50&page=1&titleType=movie`;
    return this.http.get<results>(url,{headers})//bu url de fotoğraflar üzerinde 
    //işlem yapacağımı belirtiyorum
  }
}

export interface results{
  entries: number;
  next: string;
  page: string;
  results: Array<Object[]>;
}

