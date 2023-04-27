import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAddprodutosComponent } from './dashboard-addprodutos.component';

describe('DashboardAddprodutosComponent', () => {
  let component: DashboardAddprodutosComponent;
  let fixture: ComponentFixture<DashboardAddprodutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAddprodutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAddprodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
