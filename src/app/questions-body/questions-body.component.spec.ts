import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsBodyComponent } from './questions-body.component';

describe('QuestionsBodyComponent', () => {
  let component: QuestionsBodyComponent;
  let fixture: ComponentFixture<QuestionsBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
