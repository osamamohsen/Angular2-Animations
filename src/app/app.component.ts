import{  Component } from '@angular/core';
import { 
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group
 } from '@angular/animations';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template:`<h1>{{ title }}</h1>
            <button (click)="toggleLight()">ToggleLights</button>
            <div [@lightsOnOff]="roomState" class="room"></div>
  `,
  styleUrls: ['./app.component.css'],
  /*
    trigger('lightsOnOff'): the name of animation
  
  */
  animations: [
    trigger('lightsOnOff',[
      state('off',style({
        backgroundColor: 'black'
      })),
      state('on',style({
        backgroundColor: 'white'
      })),
      transition('off => on',[animate('2s')]),
      transition('on => off',[animate('2s')])
    ])
  ]
})
export class AppComponent {
  title = 'Angular Animations';
  roomState: string = "off";
  toggleLight(){
    this.roomState = (this.roomState === "off") ? "on" : "off"
  }
}
