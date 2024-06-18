import { Component, Input, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { NumberPipe } from '../../extras/pipes'
import { Meme } from '../../models/meme'
import { IntegerExists } from '../../models/general'
import { loadLocalStorage, storeLocalStorage, safeReadFromObject } from '../../extras/helpers'

@Component({
  selector: 'app-meme',
  standalone: true,
  imports: [UpperCasePipe, NumberPipe],
  templateUrl: './meme.component.html',
  styleUrl: './meme.component.scss'
})
export class MemeComponent implements OnInit{

  @Input() meme: Meme = {"id": 0, "likes": 0, "name": "", "location": ""}
  @Input() locPrefix: string = ""
  @Input() likedMemes: IntegerExists = {}
  @Input() updateLikedMemes: any
  isLiked: boolean = false

  ngOnInit(): void {
    this.isLiked = safeReadFromObject(this.likedMemes, this.meme.id, false)
  }

  likeMeme(meme: Meme): any {
    meme.likes = +meme.likes + 1
    this.isLiked = true
    this.likedMemes[meme.id] = true
    this.updateLikedMemes(this.meme.id, this.likedMemes)
  }

  getMemeUrl(prefix: string, url: string): string {
    return `${prefix}${url}`
  }
}
