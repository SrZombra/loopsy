import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellarsFormComponent } from './cellars-form.component';

describe('CellarsFormComponent', () => {
  let component: CellarsFormComponent;
  let fixture: ComponentFixture<CellarsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellarsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellarsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
