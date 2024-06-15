import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarpiercingComponent } from './earpiercing.component';

describe('EarpiercingComponent', () => {
  let component: EarpiercingComponent;
  let fixture: ComponentFixture<EarpiercingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EarpiercingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarpiercingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
