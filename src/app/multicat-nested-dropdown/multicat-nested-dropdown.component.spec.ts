import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticatNestedDropdownComponent } from './multicat-nested-dropdown.component';

describe('MulticatNestedDropdownComponent', () => {
  let component: MulticatNestedDropdownComponent;
  let fixture: ComponentFixture<MulticatNestedDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulticatNestedDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulticatNestedDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
