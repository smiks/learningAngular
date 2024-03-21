import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuoteOfTheDayComponent } from './components/quote-of-the-day/quote-of-the-day.component';
import { QuotesComponent } from './components/quotes/quotes.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { 
  title: string = 'Quotes Library';

}
 