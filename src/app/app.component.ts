import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeFeature = "shopping-list";

  updateFeature(feature: string) {
    this.activeFeature = feature;
  }
}
