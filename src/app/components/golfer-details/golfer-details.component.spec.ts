import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GolferDetailsComponent } from './golfer-details.component';

describe('GolferDetailsComponent', () => {
  let component: GolferDetailsComponent;
  let fixture: ComponentFixture<GolferDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GolferDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GolferDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
