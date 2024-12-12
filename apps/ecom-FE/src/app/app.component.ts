import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaConfig, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Import the module here

@Component({
  imports: [RouterModule, FontAwesomeModule], // Add FontAwesomeModule to imports array
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private faIconLibrary = inject(FaIconLibrary);
  private faConfig = inject(FaConfig);

  ngOnInit(): void {
    this.initFontAwesome();
  }

  private initFontAwesome() {
    this.faConfig.defaultPrefix = 'far'; // Set default prefix for regular icons
    this.faIconLibrary.addIcons(...fontAwesomeIcons); // Add icons to library
  }
}
