import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYoupageComponent } from './thank-youpage.component';

describe('ThankYoupageComponent', () => {
  let component: ThankYoupageComponent;
  let fixture: ComponentFixture<ThankYoupageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankYoupageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYoupageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
