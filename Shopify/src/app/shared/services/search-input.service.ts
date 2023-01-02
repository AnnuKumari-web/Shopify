import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class SearchInputService {
  dataEmitter = new EventEmitter<string>();

  constructor() {}
  raiseDataEmitterEvent(data: string) {
    this.dataEmitter.emit(data);
  }
}
