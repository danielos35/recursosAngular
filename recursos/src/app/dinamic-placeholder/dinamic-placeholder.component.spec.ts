import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamicPlaceholderComponent } from './dinamic-placeholder.component';

describe('DinamicPlaceholderComponent', () => {
  let component: DinamicPlaceholderComponent;
  let fixture: ComponentFixture<DinamicPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinamicPlaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinamicPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
