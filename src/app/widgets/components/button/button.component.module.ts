import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './button.component';

@NgModule({
  imports: [MatButtonModule],
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
})
export class ButtonComponentModule {}
