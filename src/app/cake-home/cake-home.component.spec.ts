import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeHomeComponent } from './cake-home.component';

describe('CakeHomeComponent', () => {
  let component: CakeHomeComponent;
  let fixture: ComponentFixture<CakeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakeHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
