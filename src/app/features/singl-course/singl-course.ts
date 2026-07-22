import { Component } from '@angular/core';
import { CourseHeroS } from './components/course-hero-s/course-hero-s';
import { Learn } from './components/learn/learn';

@Component({
  selector: 'app-singl-course',
  imports: [CourseHeroS, Learn],
  templateUrl: './singl-course.html',
  styleUrl: './singl-course.css',
})
export class SinglCourse {}
