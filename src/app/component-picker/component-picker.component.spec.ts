import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPickerComponent } from './component-picker.component';

describe('ComponentPickerComponent', () => {
  let component: ComponentPickerComponent;
  let fixture: ComponentFixture<ComponentPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
