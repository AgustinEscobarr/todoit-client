export class TravelData{
    constructor(private marca:string='',private modelo:string='',private falla:string='',private address:string='',private date:string='',private time:string=''){
        this.marca=marca;
        this.modelo=modelo;
        this.falla=falla;
        this.address=address;
        this.date=date;
        this.time=time;
    }
}