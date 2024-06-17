import { Component, Input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { NumberPipe } from '../../extras/pipes'
import { IntegerExists } from '../../models/general'
import { Meme } from '../../models/meme'

@Component({
  selector: 'app-meme',
  standalone: true,
  imports: [UpperCasePipe, NumberPipe],
  templateUrl: './meme.component.html',
  styleUrl: './meme.component.scss'
})
export class MemeComponent {

  @Input() meme: Meme = {"id": 0, "likes": 0, "name": "", "location": ""}
  @Input() locPrefix: string = ""

  likedMemes: IntegerExists = {}

  likeMeme(memeId: number): any {
    this.likedMemes[memeId] = true
  }

  getMemeUrl(prefix: string, url: string): string {
    return `${prefix}${url}`
  }
}
