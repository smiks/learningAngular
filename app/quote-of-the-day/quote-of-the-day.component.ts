import { Component, Input, OnInit } from '@angular/core';
import { QuotesService } from '../services/quotes.service'


@Component({
  selector: 'app-quote-of-the-day',
  standalone: true,
  imports: [],
  templateUrl: './quote-of-the-day.component.html',
  styleUrl: './quote-of-the-day.component.scss'
})
export class QuoteOfTheDayComponent implements OnInit {

  qotd: any = {
    quote: "",
    author: "",
    keywords: ""
  };

  constructor(private quotesService: QuotesService) {}

  ngOnInit(): void {
    const _data: any = {
      token: 'tttttoken'
    }
    this.quotesService.getQOTD(_data).subscribe( (response) => {
      this.qotd = response.quote
    })
  }

}
