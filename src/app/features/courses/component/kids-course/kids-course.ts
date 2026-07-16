import { Component, inject, OnInit } from '@angular/core';
import { Courses } from '../../../../core/service/courses';
import { CoursesInt } from '../../../../core/model/courses';

@Component({
  selector: 'app-kids-course',
  imports: [],
  templateUrl: './kids-course.html',
  styleUrl: './kids-course.css',
})
export class KidsCourse implements OnInit {
  private readonly courses = inject(Courses);
  coursItem: CoursesInt = {} as CoursesInt;
  courseId!: number;

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse() {
    this.courses.getApiId().subscribe({
      next: (res) => {
        console.log('the id');
        console.log(res);
        this.courseId = res[0].id;
        this.courses.getApidata(this.courseId).subscribe({
          next: (res) => {
            console.log(res);
            this.coursItem = res;
          },
          error: (err) => {
            console.log(err);
          },
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
