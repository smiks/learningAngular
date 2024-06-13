import { Component, Input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { NumberPipe } from '../../extras/pipes'

@Component({
  selector: 'app-meme',
  standalone: true,
  imports: [UpperCasePipe, NumberPipe],
  templateUrl: './meme.component.html',
  styleUrl: './meme.component.scss'
})
export class MemeComponent {

  @Input() location: string = ""
  @Input() name: string = ""
  @Input() likes: number = 0
  @Input() locPrefix: string = ""

  getMemeUrl(prefix: string, url: string): string {
    return `${prefix}${url}`
  }
}
