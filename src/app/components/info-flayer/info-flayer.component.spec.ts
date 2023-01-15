import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFlayerComponent } from './info-flayer.component';

describe('InfoFlayerComponent', () => {
  let component: InfoFlayerComponent;
  let fixture: ComponentFixture<InfoFlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoFlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoFlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
