import { Component, OnInit, Inject, signal, effect } from '@angular/core';
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
  keywords = signal<string>("")
  loadingInProgress: boolean = false
  likedMemes: IntegerExists = {}
  localStorageKey: string = "likedMemes"
  subscriptions: any = []

  constructor(
    private fb: FormBuilder, 
    private memesService: MemesService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
    ) {
    this.quoteForm = this.fb.group({
      keywords: ['', [Validators.required]]
    })

    effect(() => {
      if(this.keywords().length >= 3) {
        this.loadingInProgress = true
        this.fetchMemes()
      }
      else if(this.keywords().length == 0){
        this.memes = []
      }
    })
  }

  ngOnInit(): void {
    this.likedMemes = loadLocalStorage(this.document, this.localStorageKey)
    if(this.likedMemes === null){
      this.likedMemes = {}
      storeLocalStorage(this.document, this.localStorageKey, {})
    }
  }

  ngOnDestroy(): void {
    for(const s of this.subscriptions){
      s.unsubscribe()
    }
  }

  fetchMemes() {
    const _data: any = {
      key: 'myPrecious',
      keywords: this.keywords()
    }
    const tmp = this.memesService.getMemes(_data).subscribe( (response: any) => {
      this.memes = Object.values(response.memes)
      this.locPrefix = response.locPrefix
      this.loadingInProgress = false
    })

    this.subscriptions.push(tmp)
  }

  updateLikeDb(memeId: number) {
    const _data: any = {
      key: 'myPrecious',
      memeId: memeId
    }
    const tmp = this.memesService.likeMeme(_data).subscribe( (response: any) => { })
    this.subscriptions.push(tmp)
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
