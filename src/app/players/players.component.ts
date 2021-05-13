import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PLAYERS } from '../TheBoys';
import { LolApi, Constants } from 'twisted';
const api = new LolApi('RGAPI-0a9a87f9-06c8-43bd-80f3-b6fdebb35fdb');

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players = PLAYERS;
  selectedPlayer?: Player;
  onSelect(player: Player): void {
    this.selectedPlayer = player;
    var summoner = "";
    api.Summoner.getByName(player.sumName, Constants.Regions.AMERICA_NORTH).then(res =>
      {
        summoner = res.response.id;
      })
    api.Champion.masteryBySummoner(summoner, Constants.Regions.AMERICA_NORTH).then(res =>
      {
        api.DataDragon.getChampion(res.response[1].championId).then(res =>{
          if(this.selectedPlayer){
            this.selectedPlayer.highMastChamp = res.name;
          }    
        })
      })
  } 
  constructor() { }

  ngOnInit(): void {
  }
}
