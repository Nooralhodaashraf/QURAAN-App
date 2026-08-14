import { Component } from '@angular/core';
import { BlogsHero } from './components/blogs-hero/blogs-hero';

@Component({
  selector: 'app-blogs',
  imports: [BlogsHero],
  templateUrl: './blogs.html',
  styleUrl: './blogs.css',
})
export class Blogs {}
