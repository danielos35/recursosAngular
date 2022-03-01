import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilitarButtomComponent } from './habilitar-buttom.component';

describe('HabilitarButtomComponent', () => {
  let component: HabilitarButtomComponent;
  let fixture: ComponentFixture<HabilitarButtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilitarButtomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilitarButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
