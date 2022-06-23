import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomMaterialModule } from '../core/custom-material/custom-material.module';
import { LayoutComponent } from './layout/layout.component';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  imports: [
    RouterModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatExpansionModule
  ],
  declarations: [
    
    LayoutComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CustomMaterialModule,
   
  ],
  entryComponents: [
  ]
})
export class SharedModule { }
