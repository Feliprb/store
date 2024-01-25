import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailView } from './order-detail.view';

describe('OrderDetailView', () => {
  let component: OrderDetailView;
  let fixture: ComponentFixture<OrderDetailView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailView ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
