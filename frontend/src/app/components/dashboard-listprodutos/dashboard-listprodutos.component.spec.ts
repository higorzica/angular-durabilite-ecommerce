import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardListprodutosComponent } from './dashboard-listprodutos.component';

describe('DashboardListprodutosComponent', () => {
  let component: DashboardListprodutosComponent;
  let fixture: ComponentFixture<DashboardListprodutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardListprodutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardListprodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
