import { NgModule } from '@angular/core';
import {MatCardModule, MatListModule, MatMenuModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';


const items = [
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatMenuModule
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
