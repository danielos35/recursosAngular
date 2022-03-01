import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonCalcuComponent } from './son-calcu.component';

describe('SonCalcuComponent', () => {
  let component: SonCalcuComponent;
  let fixture: ComponentFixture<SonCalcuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonCalcuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SonCalcuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
