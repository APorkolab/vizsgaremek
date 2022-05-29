import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainActorsComponent } from './main-actors.component';

describe('MainActorsComponent', () => {
  let component: MainActorsComponent;
  let fixture: ComponentFixture<MainActorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainActorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
