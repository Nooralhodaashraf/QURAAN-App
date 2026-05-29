import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSec } from './course-sec';

describe('CourseSec', () => {
  let component: CourseSec;
  let fixture: ComponentFixture<CourseSec>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseSec],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseSec);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
