import {Injectable} from '@angular/core';
import { Calendrier } from '../models/calendrier.model';

@Injectable({
    providedIn: 'root'
})
export class CalendrierService{
    calendars: Calendrier[]= [
        {id: 1, team: "Real Madrid", competition: "Mondial des clubs - J1", date: new Date, location: "Orange Vélodrome"},
        {id: 2, team: "AC Milan", competition: "Champions League - Finale", date: new Date},
        {id: 3, team: "Etoile Rouge de Belgrade", competition: "Match amical", date: new Date, location: "Orange Vélodrome"},
        {id: 4, team: "FC Geugnon", competition: "Ligue 1", date: new Date}];

    getAllCalendrier(): Calendrier[]{
        return this.calendars
    }

    getCalendrierById(CalendrierId: string): string{
        const Calendrier = this.calendars.find(calendrier => calendrier.team === CalendrierId);
        if(Calendrier){
            return Calendrier.team;
        }else{
            throw new Error("Match non trouvé");
        }
    }
}