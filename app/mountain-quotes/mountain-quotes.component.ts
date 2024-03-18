import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../services/quotes.service';

@Component({
  selector: 'app-mountain-quotes',
  standalone: true,
  imports: [],
  templateUrl: './mountain-quotes.component.html',
  styleUrl: './mountain-quotes.component.scss'
})
export class MountainQuotesComponent implements OnInit {
  quotes: any = [{
    id: 0,
    quote: "test quote",
    author: "Author"
  }]
  
  constructor(private quotesService: QuotesService) {
  }

  sanitizeQuote(quote: string): string {
    return quote.replaceAll('?&quot;', '"').replaceAll('&#39;', "'")
  }

  ngOnInit(): void {
    this.fetchQuotes()
  }

  fetchQuotes() {
    const _data: any = {
      token: 'tttttoken',
      keywords: "mountains"
    }
    this.quotesService.getQuotes(_data).subscribe( (response) => {
      this.quotes = Object.values(response.quotes)
    })
  }
}
