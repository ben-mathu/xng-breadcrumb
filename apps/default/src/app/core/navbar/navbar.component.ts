import { Component, Output, ViewEncapsulation } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent {
  theme = 'light';
  @Output() themeChanged: EventEmitter<string> = new EventEmitter();

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.themeChanged.emit(this.theme);
  }
}
