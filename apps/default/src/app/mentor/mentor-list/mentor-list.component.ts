import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { DataService } from '../../core/data.service';
import { Mentor } from '../../shared/models/mentor';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MentorListComponent implements OnInit {
  mentors: Mentor[];
  constructor(
    private dataService: DataService,
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit() {
    this.getMentors();
    this.breadcrumbService.set('mentor', 'Enabler');
  }

  getMentors() {
    this.dataService.getMentors().subscribe((response) => {
      this.mentors = response.sort((a, b) => {
        return (
          new Date(b.updatedTs).getTime() - new Date(a.updatedTs).getTime()
        );
      });
    });
  }
}
