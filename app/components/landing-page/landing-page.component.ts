import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { QuotesService } from '../../services/quotes.service';
import { Router } from '@angular/router';
import { QuoteOfTheDayComponent } from '../quote-of-the-day/quote-of-the-day.component';
import { QuotesComponent } from '../quotes/quotes.component';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ReactiveFormsModule, QuoteOfTheDayComponent, QuotesComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  title: string = 'Quotes Library';
  quoteForm: FormGroup;
  quotes: any = []
  keywords: string = ""

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

  switchToMountainQuotes() {
    this.router.navigate(['/mountains'])
  }
}
