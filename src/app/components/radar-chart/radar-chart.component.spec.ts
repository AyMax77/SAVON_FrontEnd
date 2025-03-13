import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarChartComponent } from './radar-chat.component';

describe('RadarChatComponent', () => {
  let component: RadarChartComponent;
  let fixture: ComponentFixture<RadarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RadarChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
