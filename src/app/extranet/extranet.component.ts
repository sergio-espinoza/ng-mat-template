import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-extranet',
  templateUrl: './extranet.component.html',
  styleUrls: ['./extranet.component.scss']
})
export class ExtranetComponent {

  constructor(
    private router: Router
  ) { }

  public goToIntranet(): void {
    this.router.navigate(['/intranet']);
  }

}
