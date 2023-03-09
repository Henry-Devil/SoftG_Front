import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDriverSearchComponent } from './vehicle-driver-search.component';

describe('VehicleDriverSearchComponent', () => {
  let component: VehicleDriverSearchComponent;
  let fixture: ComponentFixture<VehicleDriverSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleDriverSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleDriverSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
