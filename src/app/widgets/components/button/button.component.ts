import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() public text = '';
  @Output() public actionEmitter = new EventEmitter<any>();

  constructor() { }

  public doActions(): void {
    this.actionEmitter.emit();
  }

}
