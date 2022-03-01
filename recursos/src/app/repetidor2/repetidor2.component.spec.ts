import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Repetidor2Component } from './repetidor2.component';

describe('Repetidor2Component', () => {
  let component: Repetidor2Component;
  let fixture: ComponentFixture<Repetidor2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Repetidor2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Repetidor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
