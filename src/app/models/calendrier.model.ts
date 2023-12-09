//Model of a match, calendar is a collection of matches, need to change names and create another component
export class Calendrier{
    //add logos of the team
    id!: number;
    team!: string; 
    competition!: string; 
    date!: Date;
    location?: string;
}