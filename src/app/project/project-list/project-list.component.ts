import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

    projects :any[] = [
      {
        "name": "企业协作平台",
        "desc": "这是一个企业内部的项目",
        "coverImg": "assets/img/covers/0.jpg"
      },
      {
        "name": "企业协作平台",
        "desc": "这是一个企业内部的项目",
        "coverImg": "assets/img/covers/1.jpg"
      },
    ]
  constructor() { }

  ngOnInit() {
  }

}
