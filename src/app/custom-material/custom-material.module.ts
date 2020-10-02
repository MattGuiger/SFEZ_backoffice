import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
// import { MatButtonModule, MatDialogModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, MatDialogModule
  ],
  exports: [
    MatButtonModule, MatDialogModule
  ]
})
export class CustomMaterialModule {
}