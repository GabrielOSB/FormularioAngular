import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { courses } from './course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: courses [] = [
    { _id: '1', name: 'Angular', category: 'Front-end' }
  ]
  
  displayedColumns = ['name','category']

  constructor(private router: Router){
    // this.courses = [];
  }

  ngOnInit(): void {
  }

  CoursesComponent() {
    this.router.navigate(['/courses'])
  }
}
