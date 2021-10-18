import { NgModule } from '@angular/core';

import { FallbackPipe } from './fallback.pipe';

@NgModule({
  exports: [FallbackPipe],
  declarations: [FallbackPipe],
})
export class FallbackPipeModule { }
