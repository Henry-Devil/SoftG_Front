import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePComponent } from './page-principal.component';

describe('DashboardComponent', () => {
  let component: PagePComponent;
  let fixture: ComponentFixture<PagePComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
