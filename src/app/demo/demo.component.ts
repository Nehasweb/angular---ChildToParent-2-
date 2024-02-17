import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})

export class DemoComponent 
{
  @Output() public MyCourse = new EventEmitter();
 
  public SendCourse()
  {
    
    this.MyCourse.emit('Angular Web Development');
  }
}
