import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDetailViewComponent } from './component-detail-view.component';

describe('ComponentDetailViewComponent', () => {
  let component: ComponentDetailViewComponent;
  let fixture: ComponentFixture<ComponentDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentDetailViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
