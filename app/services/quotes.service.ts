import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostRequestQOTD, PostRequestQuotes } from '../models/postRequest';
import { ApiResponse, ApiResponseQOTD, Quote } from '../models/quote';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  getQuotesURL: string = "https://quotes.secure-atom.com/api/post/searchQuotes/"
  getQOTDURL: string = "https://quotes.secure-atom.com/api/post/getQOTD/"

  constructor(private http: HttpClient) { }

  getQuotes(requestData: PostRequestQuotes) {
    return this.http.post<ApiResponse<Quote>>(this.getQuotesURL, requestData)
  }

  getQOTD(requestData: PostRequestQOTD) {
    return this.http.post<ApiResponseQOTD<Quote>>(this.getQOTDURL, requestData)
  }
}
