import { Component, OnInit, Input} from '@angular/core';
import { Calendrier } from '../models/calendrier.model';
import { CalendrierService } from '../services/calendrier.service';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.scss']
})
export class CalendrierComponent implements OnInit {
  @Input() Calendrier!: Calendrier;
  OM!: string;
  
  constructor(private calendrierService: CalendrierService){ }

  ngOnInit(): void {
      //ServerRequest later
      this.OM = "OM";
  }

  onShowInfo(){
    // This function has to redirect to the page of the match where we can have full infos on the selected match
    const URL = "https://www.om.fr/fr";
    // const URL = "OM vs " + this.calendrierService.getCalendrierById(this.Calendrier.team);
    window.open(URL, '_blank');
  }

}
