import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { QuoteOfTheDayComponent } from './quote-of-the-day/quote-of-the-day.component';
import { QuotesComponent } from './quotes/quotes.component'
import { EventEmitter } from 'stream';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { QuotesService } from './services/quotes.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuoteOfTheDayComponent, QuotesComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { 
  title: string = 'Quotes Library';
  quoteForm: FormGroup;
  quotes: any = [{
    id: 0,
    quote: "test quote",
    author: "Author"
  }]
  keywords: string = ""
  showMountainsBtn: boolean = this.router.url === '/'

  constructor(
    private fb: FormBuilder, 
    private quotesService: QuotesService,
    private router: Router
    ) {
    this.quoteForm = this.fb.group({
      keywords: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.keywords = this.quoteForm.value.keywords || ''
    if(this.keywords.length){
      
      this.fetchQuotes()
    }
    
  }

  fetchQuotes() {
    const _data: any = {
      token: 'tttttoken',
      keywords: this.keywords
    }
    this.quotesService.getQuotes(_data).subscribe( (response) => {
      this.quotes = Object.values(response.quotes)
    })
  }

  goHome() {
    this.showMountainsBtn = true
    this.router.navigate(['/'])
  }

  switchToMountainQuotes() {
    this.showMountainsBtn = false
    this.router.navigate(['/mountains'])
  }
}
 