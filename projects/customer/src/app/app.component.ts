import { Component } from '@angular/core';
import { Fadeanimation } from './shared/animation/fadeanimation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [Fadeanimation]
})
export class AppComponent {
  title = 'customer';
}
