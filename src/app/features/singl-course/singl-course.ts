import { Component } from '@angular/core';
import { CourseHeroS } from './components/course-hero-s/course-hero-s';

@Component({
  selector: 'app-singl-course',
  imports: [CourseHeroS],
  templateUrl: './singl-course.html',
  styleUrl: './singl-course.css',
})
export class SinglCourse {}
