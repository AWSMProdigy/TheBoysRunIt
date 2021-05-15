import { Injectable } from '@angular/core';
import { Player } from './player';
import { PLAYERS } from './TheBoys';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playersUrl = 'api/players';  // URL to web api
  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.playersUrl)
    .pipe(
      tap(_ => this.log('fetched players')),
      catchError(this.handleError<Player[]>('getPlayers', []))
    );
  }
  getPlayer(sumName: String): Observable<Player> {
    const player = PLAYERS.find(p => p.sumName === sumName) as Player;
    this.messageService.add(`PlayerService: fetched player summoner=${sumName}`);
    return of(player);
  }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}