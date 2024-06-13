import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MemesService } from '../../services/memes.service';
import { MemeComponent } from '../meme/meme.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ReactiveFormsModule, MemeComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  title: string = 'Memes Library';
  quoteForm: FormGroup;
  memes: any = []
  locPrefix: string = ""
  keywords: string = ""

  constructor(
    private fb: FormBuilder, 
    private memesService: MemesService,
    private router: Router
    ) {
    this.quoteForm = this.fb.group({
      keywords: ['', [Validators.required]]
    })
  }


  onSubmit() {
    this.keywords = this.quoteForm.value.keywords || ''
    if(this.keywords.length){
      
      this.fetchMemes()
    }
    
  }

  fetchMemes() {
    const _data: any = {
      key: 'myPrecious',
      keywords: this.keywords
    }
    this.memesService.getMemes(_data).subscribe( (response: any) => {
      this.memes = Object.values(response.memes)
      this.locPrefix = response.locPrefix
    })
  }

  switchToMountainQuotes() {
    this.router.navigate(['/mountains'])
  }
}
