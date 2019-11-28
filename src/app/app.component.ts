import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { // move this to another component/service or something
    // want to provide this with a safeResourceUrl
    // this gets our avatar icons from the asssets folder...
    iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg'));
  }

}
