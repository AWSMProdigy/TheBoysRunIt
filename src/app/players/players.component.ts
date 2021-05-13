import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PLAYERS } from '../TheBoys';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players = PLAYERS;
  selectedPlayer?: Player;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(player: Player): void{
    this.selectedPlayer = player;
  }

}
