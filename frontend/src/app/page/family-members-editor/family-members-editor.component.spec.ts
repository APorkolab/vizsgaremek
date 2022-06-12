import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyMembersEditorComponent } from './family-members-editor.component';

describe('FamilyMembersEditorComponent', () => {
  let component: FamilyMembersEditorComponent;
  let fixture: ComponentFixture<FamilyMembersEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyMembersEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyMembersEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
