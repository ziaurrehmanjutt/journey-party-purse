import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyTripsPage } from './my-trips.page';

describe('MyTripsPage', () => {
  let component: MyTripsPage;
  let fixture: ComponentFixture<MyTripsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTripsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
