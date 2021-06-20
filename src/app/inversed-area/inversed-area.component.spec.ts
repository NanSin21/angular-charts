import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InversedAreaComponent } from './inversed-area.component';

describe('InversedAreaComponent', () => {
  let component: InversedAreaComponent;
  let fixture: ComponentFixture<InversedAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InversedAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InversedAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
