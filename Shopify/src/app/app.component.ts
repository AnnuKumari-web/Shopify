import { Component } from '@angular/core';
import 'tw-elements';
import { SearchInputService } from './shared/services/search-input.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchInputService]
})
export class AppComponent {
  title = 'Shopify';

  constructor(private searchInputService: SearchInputService){

  }
}
