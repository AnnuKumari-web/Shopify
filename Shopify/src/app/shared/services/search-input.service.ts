import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchInputService {
  private inputVar: string='';

  onSearchChange = new EventEmitter();

  constructor() {
  }

  getInputVar() {
    return this.inputVar;
  }

  setInputVar(data: string) {
    this.inputVar = data;
  }
}
