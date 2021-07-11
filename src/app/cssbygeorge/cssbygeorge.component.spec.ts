import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssbygeorgeComponent } from './cssbygeorge.component';

describe('CssbygeorgeComponent', () => {
  let component: CssbygeorgeComponent;
  let fixture: ComponentFixture<CssbygeorgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssbygeorgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssbygeorgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
