import { Component } from '@angular/core';
import { confett } from './confetti';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'animation';
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    var confetti = new confett.Context('confetti');
    confetti.start();
    window.addEventListener('resize', function (event) {
      confetti.resize();
    });

  }
}
