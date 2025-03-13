import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecettesCreateComponent } from './recettes-create.component';

describe('RecettesCreateComponent', () => {
  let component: RecettesCreateComponent;
  let fixture: ComponentFixture<RecettesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecettesCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecettesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
