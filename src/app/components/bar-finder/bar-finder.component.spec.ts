import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchFinderComponent } from './bar-finder.component';

describe('MatchFinderComponent', () => {
  let component: MatchFinderComponent;
  let fixture: ComponentFixture<MatchFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchFinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
