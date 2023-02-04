import { GameTracker } from './../models/game-tracker';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GameTrackerService {
  url = environment.baseUrl + 'api/games';

  constructor(private http: HttpClient) {}

  index(): Observable<GameTracker[]> {
    return this.http.get<GameTracker[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error(
              'GameTrackerService.index() error retrieving list of todos' + err
            )
        );
      })
    );
  }

  show(gameId: number): Observable<GameTracker> {
    return this.http.get<GameTracker>(`${this.url}/${gameId}`).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('GameTracker.show() error retreiving game ' + err)
        );
      })
    );
  }

  create(game: GameTracker): Observable<GameTracker> {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return this.http.post<GameTracker>(this.url, game).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError(() => new Error('error creating game ' + err));
      })
    );
  }

  update(updateGame: GameTracker): Observable<GameTracker>{
    return this.http.put<GameTracker>(this.url+'/'+ updateGame.id, updateGame).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError(() => new Error('error updating todo ' + err));
      })
    )
  }

  search(keyword: String): Observable<GameTracker[]>{
    return this.http.get<GameTracker[]>(this.url+'/search/'+keyword).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error(
              'GameTrackerService.index() error retrieving list of games' + err
            )
        );
      })
    )
  }

  delete(id: number): Observable<void>{
  return this.http.delete<void>(this.url+'/'+id).pipe(
    catchError((err: any) => {
      console.log(err);
      return throwError(
        () => new Error('TodoService.destroy(): error deleting todo: ' + err)
      );
    })
  );
}
}
