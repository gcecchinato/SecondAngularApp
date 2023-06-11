import { ComponentFixture, TestBed } from '@angular/core/testing';

import { verbenComponent } from './verben.component';

describe('verbenComponent', () => {
  let component: verbenComponent;
  let fixture: ComponentFixture<verbenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ verbenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(verbenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
