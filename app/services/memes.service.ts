import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostRequestMemes, PostRequestLikeMeme } from '../models/postRequest';
import { ApiResponseGetMemes, Meme, ApiResponseLikeMeme } from '../models/meme';
import { BASE_URL } from './config'

@Injectable({
  providedIn: 'root'
})
export class MemesService {

  searchMemesURL: string = BASE_URL + "post/extSearch/"
  likeMemeURL: string = BASE_URL + "post/extSearch/"

  constructor(private http: HttpClient) { }

  getMemes(requestData: PostRequestMemes) {
    return this.http.post<ApiResponseGetMemes<Meme>>(this.searchMemesURL, requestData)
  }

  likeMeme(requestData: PostRequestLikeMeme) {
    return this.http.post<ApiResponseLikeMeme>(this.likeMemeURL, requestData)
  }
}
