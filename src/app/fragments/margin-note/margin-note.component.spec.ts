import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarginNoteComponent } from './margin-note.component';

describe('MarginNoteComponent', () => {
  let component: MarginNoteComponent;
  let fixture: ComponentFixture<MarginNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarginNoteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MarginNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
