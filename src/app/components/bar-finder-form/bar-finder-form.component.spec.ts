import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarFinderFormComponent } from './bar-finder-form.component';

describe('BarFinderFormComponent', () => {
  let component: BarFinderFormComponent;
  let fixture: ComponentFixture<BarFinderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarFinderFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarFinderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
