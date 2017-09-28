import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureSubComponent } from './feature-sub.component';

describe('FeatureSubComponent', () => {
  let component: FeatureSubComponent;
  let fixture: ComponentFixture<FeatureSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
