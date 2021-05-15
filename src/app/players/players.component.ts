import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Player } from '../player';
import { PlayerService } from "../player.service"


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: Player[] = [];
  selectedPlayer?: Player;
  constructor(private playerService: PlayerService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getPlayers();
  }

  onSelect(player: Player): void{
    this.selectedPlayer = player;
    this.messageService.clear();
    this.messageService.add(`PlayersComponent: Selected player summoner: ${player.sumName}`);
  }

  getPlayers(): void {
    this.playerService.getPlayers().subscribe(players => this.players = players);
  }

}
