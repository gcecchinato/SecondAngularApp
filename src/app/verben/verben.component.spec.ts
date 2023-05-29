import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbenComponent } from './verben.component';

describe('VerbenComponent', () => {
  let component: VerbenComponent;
  let fixture: ComponentFixture<VerbenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerbenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerbenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
