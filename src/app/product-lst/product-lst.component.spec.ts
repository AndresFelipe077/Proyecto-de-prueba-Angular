import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLstComponent } from './product-lst.component';

describe('ProductLstComponent', () => {
  let component: ProductLstComponent;
  let fixture: ComponentFixture<ProductLstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductLstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
