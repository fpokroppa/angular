import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService  implements InMemoryDbService {

  createDb() {
    const partners = [
      { id: 11, lastname: 'Nice', firstname: 'Guy' },
      { id: 12, lastname: 'Narco', firstname: 'Nose' },
      { id: 13, lastname: 'Bombasto', firstname: 'Mister' },
      { id: 14, lastname: 'Celeritas', firstname: 'Yvonne' },
      { id: 15, lastname: 'Magneta', firstname: 'Peter' },
      { id: 16, lastname: 'RubberMan', firstname: 'Son' }
    ];
    return {partners};
  }

  constructor() { }

}
