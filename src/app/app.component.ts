import { Component } from '@angular/core';

@Component({
  selector: 'saa-app',
  template: `
      <header>
          <h1>Styling Angular Applications</h1>
          <em>For Modern Angular Applications</em>
      </header>
      <div>
        <saa-app-nav>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Prerequisites</a>
          </li>
          <li>
            <a href="#">Modules</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </saa-app-nav>
      </div>
  `
})

export class AppComponent {
}
