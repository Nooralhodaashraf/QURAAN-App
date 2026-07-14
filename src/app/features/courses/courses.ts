import { Component } from '@angular/core';
import { CoursesHeader } from './component/courses-header/courses-header';
import { Start } from './component/start/start';

@Component({
  selector: 'app-courses',
  imports: [CoursesHeader, Start],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {}
