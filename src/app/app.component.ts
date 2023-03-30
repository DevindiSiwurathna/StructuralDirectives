import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StructuralDirectives';
  isApproved=false
  numbers=[
    'one',
    'two',
    'three',
    'four',
    'five',
    'six'
  ]

  approve(status:boolean){
    this.isApproved=status;
  }
}
