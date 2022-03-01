import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBandingComponent } from './two-way-banding.component';

describe('TwoWayBandingComponent', () => {
  let component: TwoWayBandingComponent;
  let fixture: ComponentFixture<TwoWayBandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayBandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayBandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
