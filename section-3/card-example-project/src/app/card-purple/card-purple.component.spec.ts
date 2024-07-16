import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPurpleComponent } from './card-purple.component';

describe('CardPurpleComponent', () => {
  let component: CardPurpleComponent;
  let fixture: ComponentFixture<CardPurpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardPurpleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPurpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
