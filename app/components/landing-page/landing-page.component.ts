import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { MemesService } from '../../services/memes.service';
import { MemeComponent } from '../meme/meme.component';
import { IntegerExists } from '../../models/general'
import { loadLocalStorage, storeLocalStorage } from '../../extras/helpers'


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ReactiveFormsModule, MemeComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
  title: string = 'Memes Library';
  quoteForm: FormGroup;
  memes: any = []
  locPrefix: string = ""
  keywords: string = ""
  likedMemes: IntegerExists = {}
  localStorageKey: string = "likedMemes"

  constructor(
    private fb: FormBuilder, 
    private memesService: MemesService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
    ) {
    this.quoteForm = this.fb.group({
      keywords: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.likedMemes = loadLocalStorage(this.document, this.localStorageKey)
    if(this.likedMemes === null){
      this.likedMemes = {}
      storeLocalStorage(this.document, this.localStorageKey, {})
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

  updateLikeDb(memeId: number) {
    const _data: any = {
      key: 'myPrecious',
      memeId: memeId
    }
    this.memesService.likeMeme(_data).subscribe( (response: any) => { })
  }

  updateLikedMemes = (memeId: number, lm: IntegerExists): any => {
    storeLocalStorage(this.document, this.localStorageKey, lm)
    this.updateLikeDb(memeId)
  }

  onSubmit() {
    this.keywords = this.quoteForm.value.keywords || ''
    if(this.keywords.length){
      this.fetchMemes()
    }
    
  }

  switchToMountainQuotes() {
    this.router.navigate(['/mountains'])
  }
}
