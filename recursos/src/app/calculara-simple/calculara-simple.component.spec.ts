import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularaSimpleComponent } from './calculara-simple.component';

describe('CalcularaSimpleComponent', () => {
  let component: CalcularaSimpleComponent;
  let fixture: ComponentFixture<CalcularaSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcularaSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcularaSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
