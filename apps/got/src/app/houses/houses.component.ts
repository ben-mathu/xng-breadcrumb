import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css'],
})
export class HousesComponent implements OnInit {
  houses$: Observable<{ name: string }[]>;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.houses$ = this.dataService.getHouses();
  }
}
