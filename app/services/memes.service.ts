import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostRequestMemes } from '../models/postRequest';
import { ApiResponse, Meme } from '../models/meme';

@Injectable({
  providedIn: 'root'
})
export class MemesService {

  searchMemesURL: string = "https://memes.secure-atom.com/api/post/extSearch/"

  constructor(private http: HttpClient) { }

  getMemes(requestData: PostRequestMemes) {
    return this.http.post<ApiResponse<Meme>>(this.searchMemesURL, requestData)
  }
}
