import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorsEditorComponent } from './directors-editor.component';

describe('DirectorsEditorComponent', () => {
  let component: DirectorsEditorComponent;
  let fixture: ComponentFixture<DirectorsEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectorsEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
