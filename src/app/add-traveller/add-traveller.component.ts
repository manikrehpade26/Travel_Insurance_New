import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-traveller',
  templateUrl: './add-traveller.component.html',
  styleUrls: ['./add-traveller.component.css']
})
export class AddTravellerComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<AddTravellerComponent>) {
    
  }
  // cost:number=600;
  // discount:number=125;
  // fees:number=113;
 

  
  ngOnInit() {
    
  }
  calculateAge(dob: Date) {
    return Math.round((new Date().getTime() - new Date(dob).getTime()) / (24* 3600*1000 * 365))
  }
  onSubmit(form: any) {
    console.log(form);
    let inputObj = form;
    inputObj.age = this.calculateAge(form.dob);
    // inputObj.cost=this.cost;
    // inputObj.discount=this.discount;
    // inputObj.fees=this.fees;
    this.dialogRef.close(inputObj);
  }
  closePopup() {
    this.dialogRef.close();
  }
  
  
 
 

}
