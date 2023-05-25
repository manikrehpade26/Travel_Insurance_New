import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTravellerComponent } from '../add-traveller/add-traveller.component';
import { DemoComponentComponent } from '../main-page/demo-component.component';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  isDisabled = true;
  travellerList: any[] = [];
  Cost:number=0;
  feesNtaxes : number=0;
  discount : number=0;
  grandTotal: number=0;
  constructor( private dialog: MatDialog) {
    
  }

  data = [
    {Fare: 'Total Cost',Amount:0},
    {Fare: 'Fees & Taxes',Amount:0},
    {Fare: 'Discount',Amount:0 },
    {Fare: 'Grand Total',Amount:0}
  ];

  changeValue()
  {
    this.data[0].Amount=this.Cost;
    this.data[1].Amount=this.feesNtaxes;
    this.data[2].Amount=this.discount;
    this.data[3].Amount=this.grandTotal;
  }

  showPrice(){
    this.Cost= 1562*this.travellerList.length;
    this.feesNtaxes= this.travellerList.length*113;
    this.discount= this.travellerList.length * 125;
    this.grandTotal=((this.Cost)+(this.feesNtaxes)-(this.discount));

    this.changeValue();
  }

columnNames = Object.keys(this.data[0]);

  capitalize(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  
  
  ngOnInit() {
      this.travellerList = [];
      console.log(this.travellerList.length)
  }
  addTraveller() {
    const dialogRef = this.dialog.open(AddTravellerComponent, {disableClose: true});
    dialogRef.afterClosed().subscribe(data => {
      console.log("Dialog op",data);
      if (data) {
        this.travellerList.push(data);
       this.showPrice(); 
      }
    })
  }
  deleteTraveller(index:number) {
    this.travellerList.splice(index,1)
  }
}


