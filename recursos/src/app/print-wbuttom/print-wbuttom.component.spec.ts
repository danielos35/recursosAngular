import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintWButtomComponent } from './print-wbuttom.component';

describe('PrintWButtomComponent', () => {
  let component: PrintWButtomComponent;
  let fixture: ComponentFixture<PrintWButtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintWButtomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintWButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
