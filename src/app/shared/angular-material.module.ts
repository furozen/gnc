import { NgModule } from '@angular/core';
import {MatCardModule, MatGridListModule, MatToolbarModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';


const items = [
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatToolbarModule
];


@NgModule({
  declarations: [],
  imports: [
    items
  ],
  exports: [
    items
  ]
})
export class AngularMaterialModule { }
