import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Player } from './player';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const players = [
      { sumName: 'BouttaBeBanned', highChampMast: '' },
      { sumName: 'Almost Banned', highChampMast: '' },
      { sumName: 'KR Malice', highChampMast: '' },
      { sumName: 'Runco973', highChampMast: '' },
      { sumName: 'JoeLigma68', highChampMast: '' },
      { sumName: 'Meeping', highChampMast: '' }
    ];
    return {players};
  }  
}