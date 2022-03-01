import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Repetidor3Component } from './repetidor3.component';

describe('Repetidor3Component', () => {
  let component: Repetidor3Component;
  let fixture: ComponentFixture<Repetidor3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Repetidor3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Repetidor3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
