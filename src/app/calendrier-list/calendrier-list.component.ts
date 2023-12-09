import { Component, OnInit } from '@angular/core';
import { Calendrier } from '../models/calendrier.model';
import { CalendrierService } from '../services/calendrier.service';

@Component({
  selector: 'app-calendrier-list',
  templateUrl: './calendrier-list.component.html',
  styleUrls: ['./calendrier-list.component.scss']
})

export class CalendrierListComponent implements OnInit {

  calendars!: Calendrier[];
  
  constructor(private calendrierService: CalendrierService){ }

  ngOnInit(): void {
    // Put the day of the competition (J1, rounds of 8 ...)in a separate field
    this.calendars = this.calendrierService.getAllCalendrier();
  }
}
