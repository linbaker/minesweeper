import { Injectable } from '@angular/core';
import { Game } from './game.model';
import {AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MineServiceService {

  board: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  }

  getBoard(newGame: Game) {
    return this.board;
  }
}
