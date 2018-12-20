import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MygiftcardsComponent } from './mygiftcards.component';

describe('MygiftcardsComponent', () => {
  let component: MygiftcardsComponent;
  let fixture: ComponentFixture<MygiftcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MygiftcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MygiftcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
