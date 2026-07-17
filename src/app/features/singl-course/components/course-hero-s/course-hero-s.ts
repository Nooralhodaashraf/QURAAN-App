import { Component } from '@angular/core';
import { CourseHero } from './course-hero/course-hero';
import { CourseRequestForm } from './course-request-form/course-request-form';
import { IntroductionSec } from './introduction-sec/introduction-sec';

@Component({
  selector: 'app-course-hero-s',
  imports: [CourseHero, CourseRequestForm, IntroductionSec],
  templateUrl: './course-hero-s.html',
  styleUrl: './course-hero-s.css',
})
export class CourseHeroS {}
