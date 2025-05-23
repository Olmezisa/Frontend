import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantFormComponent } from './variant-form.component';

describe('VariantFormComponent', () => {
  let component: VariantFormComponent;
  let fixture: ComponentFixture<VariantFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VariantFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
