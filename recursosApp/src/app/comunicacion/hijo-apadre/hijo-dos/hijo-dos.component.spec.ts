import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoDosComponent } from './hijo-dos.component';

describe('HijoDosComponent', () => {
  let component: HijoDosComponent;
  let fixture: ComponentFixture<HijoDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HijoDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
