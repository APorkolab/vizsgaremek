import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchedMoviesEditorComponent } from './watched-movies-editor.component';

describe('WatchedMoviesEditorComponent', () => {
  let component: WatchedMoviesEditorComponent;
  let fixture: ComponentFixture<WatchedMoviesEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchedMoviesEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchedMoviesEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
