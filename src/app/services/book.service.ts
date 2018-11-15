import { Injectable } from '@angular/core';
import { AppConst } from '../constants/app-const';
import { Http, Headers } from '@angular/http';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private serverPath: string = AppConst.serverPath;

  constructor(private http : Http) { }
  getBookList(){
    let url = AppConst.serverPath+"/book/bookList";

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.get(url,  {headers: tokenHeader});
  }
  getBook(id:number){
    let url = AppConst.serverPath+"/book/"+id;

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.get(url,  {headers: tokenHeader});
  }
  searchBook(keyword:string){
    let url = AppConst.serverPath+"/book/searchBook";

  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem("xAuthToken")
  	});
  	return this.http.post(url,keyword,{headers: tokenHeader});
  }
}
