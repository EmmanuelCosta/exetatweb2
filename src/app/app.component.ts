import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<header-detail></header-detail>
                <router-outlet></router-outlet>
              <footer-detail></footer-detail>`
})
export class AppComponent  {  }
