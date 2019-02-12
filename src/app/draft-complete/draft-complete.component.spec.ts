import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftCompleteComponent } from './draft-complete.component';

describe('DraftCompleteComponent', () => {
  let component: DraftCompleteComponent;
  let fixture: ComponentFixture<DraftCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
