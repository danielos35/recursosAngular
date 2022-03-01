import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijitoComponent } from './hijito.component';

describe('HijitoComponent', () => {
  let component: HijitoComponent;
  let fixture: ComponentFixture<HijitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HijitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
