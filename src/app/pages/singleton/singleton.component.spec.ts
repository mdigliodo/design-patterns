import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletonPatternComponent } from './singleton.component';

describe('SingletonPatternComponent', () => {
  let component: SingletonPatternComponent;
  let fixture: ComponentFixture<SingletonPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingletonPatternComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingletonPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
