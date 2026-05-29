import { Component } from '@angular/core';
import { Header } from './component/header/header';
import { Vision } from './component/vision/vision';
import { Teachers } from './component/teachers/teachers';

@Component({
  selector: 'app-about-us',
  imports: [Header, Vision, Teachers],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {}
