import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoAPadreComponent } from './hijo-apadre.component';

describe('HijoAPadreComponent', () => {
  let component: HijoAPadreComponent;
  let fixture: ComponentFixture<HijoAPadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HijoAPadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoAPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
