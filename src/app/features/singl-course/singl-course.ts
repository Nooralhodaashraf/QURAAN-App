import { Component } from '@angular/core';
import { CourseHeroS } from './components/course-hero-s/course-hero-s';
import { Learn } from './components/learn/learn';
import { Whoto } from './components/whoto/whoto';

@Component({
  selector: 'app-singl-course',
  imports: [CourseHeroS, Learn, Whoto],
  templateUrl: './singl-course.html',
  styleUrl: './singl-course.css',
})
export class SinglCourse {}
