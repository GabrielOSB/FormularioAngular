import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { courses } from './course.model';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: courses [] = [
    //{ _id: '1', name: 'Angular', category: 'Front-end' }
  ]
  coursesAPI: [] = []
  displayedColumns = ['name','category']

  constructor(private router: Router, private coursesService: CoursesService){
    // this.courses = [];
  }

  ngOnInit(): void {
    this.coursesService.getcoursesAPI().subscribe((data: any) => {
      this.coursesAPI = data.products;
      console.log(data);
    });
  }

  CoursesComponent() {
    this.router.navigate(['/courses'])
  }
}
