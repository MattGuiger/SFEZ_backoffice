import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';

// import { MatButtonModule, MatDialogModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
     MatDialogModule,
     MatSliderModule,
     MatSelectModule
  ],
  exports: [
    MatButtonModule, 
    MatDialogModule,
    MatSliderModule,
    MatSelectModule
  ]
})
export class CustomMaterialModule {
}