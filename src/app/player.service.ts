import { Injectable } from '@angular/core';
import { Player } from './player';
import { PLAYERS } from './TheBoys';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  getPlayers(): Observable<Player[]> {
    const players = of(PLAYERS);
    this.messageService.add('PlayerService: fetched players');
    return players;
  }
  constructor(private messageService: MessageService) { }
}