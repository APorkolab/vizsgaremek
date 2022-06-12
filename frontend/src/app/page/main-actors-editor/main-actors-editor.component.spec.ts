import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainActorsEditorComponent } from './main-actors-editor.component';

describe('MainActorsEditorComponent', () => {
  let component: MainActorsEditorComponent;
  let fixture: ComponentFixture<MainActorsEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainActorsEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainActorsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
