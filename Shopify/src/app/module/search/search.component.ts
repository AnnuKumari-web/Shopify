import { Component, ElementRef, EventEmitter, OnInit,Output,ViewChild } from '@angular/core';
import { SearchInputService } from 'src/app/shared/services/search-input.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  enteredSearchValue: string = '';
  enteredText: string="";

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor(private searchInputService: SearchInputService) { }

  ngOnInit(): void {
  }

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue);
  }

  onClick(){
    console.log(this.enteredText);
    this.searchInputService.raiseDataEmitterEvent(this.enteredText);
  }
}
