import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalServicesComponent } from './original-services.component';

describe('OriginalServicesComponent', () => {
  let component: OriginalServicesComponent;
  let fixture: ComponentFixture<OriginalServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OriginalServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginalServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
