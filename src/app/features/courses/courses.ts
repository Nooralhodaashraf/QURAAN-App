import { Component } from '@angular/core';
import { CoursesHeader } from './component/courses-header/courses-header';
import { Start } from './component/start/start';
import { Studies } from './component/studies/studies';
import { KidsCourse } from './component/kids-course/kids-course';
import { Knowladge } from './component/knowladge/knowladge';

@Component({
  selector: 'app-courses',
  imports: [CoursesHeader, Start, Studies, KidsCourse, Knowladge],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {
  getApidata(id: any) {
    throw new Error('Method not implemented.');
  }
}
