import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { ButtonComponentModule } from '../widgets/components/button';
import { ExtranetRoutingModule } from './extranet-routing.module';
import { ExtranetComponent } from './extranet.component';


@NgModule({
  declarations: [
    ExtranetComponent
  ],
  imports: [
    MatButtonModule,
    ButtonComponentModule,
    ExtranetRoutingModule
  ]
})
export class ExtranetModule { }
