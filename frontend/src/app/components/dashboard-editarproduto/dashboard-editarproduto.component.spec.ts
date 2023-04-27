import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEditarprodutoComponent } from './dashboard-editarproduto.component';

describe('DashboardEditarprodutoComponent', () => {
  let component: DashboardEditarprodutoComponent;
  let fixture: ComponentFixture<DashboardEditarprodutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardEditarprodutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardEditarprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
