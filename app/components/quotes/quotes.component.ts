import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.scss'
})
export class QuotesComponent {

    @Input() quotes: any = []
    @Input() keywords: string = ""

    sanitizeQuote(quote: string): string {
      return quote.replaceAll('?&quot;', '"').replaceAll('&#39;', "'")
    }
}
