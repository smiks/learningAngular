import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainQuotesComponent } from './mountain-quotes.component';

describe('MountainQuotesComponent', () => {
  let component: MountainQuotesComponent;
  let fixture: ComponentFixture<MountainQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MountainQuotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MountainQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
