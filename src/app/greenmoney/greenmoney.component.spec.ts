import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenmoneyComponent } from './greenmoney.component';

describe('GreenmoneyComponent', () => {
  let component: GreenmoneyComponent;
  let fixture: ComponentFixture<GreenmoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenmoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenmoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
