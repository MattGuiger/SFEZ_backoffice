// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-driver-dialog',
  templateUrl: './driver-dialog.component.html',
  styles: [`table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  
  tr:nth-child(even) {
    background-color: #dddddd;
  }`]
})
export class DriverDialogComponent implements OnInit {
  title: string;
  message: string;
  driver_details: any;

  constructor(public dialogRef: MatDialogRef<DriverDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DriverDialogModel) {
    // Update view with given values
  }

  ngOnInit() 
  {

  }

  ngAfterContentInit()
  {
    this.driver_details = this.data.message
    console.log('driver',this.driver_details)
  }
  


  
}

/**
 * Class to represent confirm dialog model.
 *
 * It has been kept here to keep it as part of shared component.
 */
export class DriverDialogModel {
  drive: any;

  constructor(public title: string, public message:any) {
      this.drive = message
      console.log('mess',message)
  }
}
