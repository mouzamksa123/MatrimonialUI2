import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPreferencesComponent } from './edit-preferences.component';

describe('EditPreferencesComponent', () => {
  let component: EditPreferencesComponent;
  let fixture: ComponentFixture<EditPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPreferencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
