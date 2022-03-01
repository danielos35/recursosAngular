import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RlocalesComponent } from './rlocales.component';

describe('RlocalesComponent', () => {
  let component: RlocalesComponent;
  let fixture: ComponentFixture<RlocalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RlocalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RlocalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
