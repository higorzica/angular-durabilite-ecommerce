import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAddcategoriasComponent } from './dashboard-addcategorias.component';

describe('DashboardAddcategoriasComponent', () => {
  let component: DashboardAddcategoriasComponent;
  let fixture: ComponentFixture<DashboardAddcategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAddcategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAddcategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
