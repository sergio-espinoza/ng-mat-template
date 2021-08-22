import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';

@NgModule({
  exports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
})
export class SharedModule { }
