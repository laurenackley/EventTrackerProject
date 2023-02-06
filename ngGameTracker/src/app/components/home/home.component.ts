import { GameTracker } from './../../models/game-tracker';
import { GameTrackerService } from './../../services/game-tracker.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  games: GameTracker[] = [];
  selected: null | GameTracker = null;
  newGame: GameTracker = new GameTracker();
  editGame: GameTracker | null = null;
  game: any;
  keyword: String = '';
  notFound: boolean = false;
  largest: number =0;
  winner: any;
  display = false;

  constructor(
    private gameTrackerService: GameTrackerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.reload();
    let idString = this.route.snapshot.paramMap.get('gameId');
    let gameId = Number(idString);
    if (!isNaN(gameId)) {
      this.gameTrackerService.show(gameId).subscribe({
        next: (game) => {
          this.selected = game;
          console.log("On init"+this.selected);
        },
        error: (fail) => {
          console.error(fail);
        },
      });
    }
    this.reload();
  }

  displayGame(gameTracker: any) {
    this.selected = gameTracker;
  }

  displayTable(selected: any) {
    this.selected = null;
  }

  addGame(newGame: GameTracker) {
    this.gameTrackerService.create(newGame).subscribe({
      next: (result) => {
        this.newGame = new GameTracker();
        // this.newGame = null;
        this.reload();
      },
      error: (errors) => {
        console.error('error creating new game');
        console.error(errors);
      },
    });
  }

  updateGame(updateGame: GameTracker, goToDetail = true) {
    this.gameTrackerService.update(updateGame).subscribe({
      next: (updatedGame) => {
        if (goToDetail) {
          this.selected = updatedGame;
        } else {
          this.selected = null;
        }
        this.editGame = null;
        this.reload();
      },
      error: (errors) => {
        console.error('error updating game');
        console.error(errors);
      },
    });
    this.editGame = null;
  }

  getGameByKeyword(keyword: String) {
    return this.gameTrackerService.search(keyword).subscribe({
      next: (foundGames) => {
        console.log('**********************************');
        console.log(foundGames);
        this.games = foundGames;

        // this.reload();
      },
      error: (err) => {
        this.notFound = true;
        console.error('Error finding game');
        console.error(err);
      },
    });
  }

  setEditGame() {
    this.editGame = Object.assign({}, this.selected);
    this.game = this.editGame;
  }

  reload() {
    this.gameTrackerService.index().subscribe({
      next: (gameList) => {
        this.games = gameList;
        this.descLength(this.games);
      },
      error: (err) => {
        console.error('Error loading game list');
        console.error(err);
      },
    });
  }

  descLength(games: GameTracker[]){
    for(let i = 0; i < this.games.length; i++){
      if(this.largest < this.games[i].description.length){
        this.largest = this.games[i].description.length;
        this.winner = this.games[i];
            }
    }
    console.log("descLength "+this.winner);
  }

  deleteGame(id: number) {
    this.gameTrackerService.delete(id).subscribe({
      next: (result) => {
        this.reload();
      },
      error: (errors) => {
        console.error('error deleting todo');
        console.error(errors);
      },
    });
    this.gameTrackerService.delete(id);
  }
}
