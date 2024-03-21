import { Component, OnInit, Output } from '@angular/core';
import { QuotesService } from '../../services/quotes.service';
import { Router } from '@angular/router';

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

  constructor(private quotesService: QuotesService, private router: Router) {
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
      if(response.quotes){
        this.quotes = Object.values(response.quotes)
      }
    })
  }

  goHome() {
    this.router.navigate(['/'])
  }
}
