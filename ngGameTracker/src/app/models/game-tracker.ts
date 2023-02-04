export class GameTracker {
  id: number;
  name: string;
  description: string;
  playerMin: number;
  playerMax: number;

  constructor(
    id: number = 0,
    name: string = '',
    description: string = '',
    playerMin: number = 0,
    playerMax: number = 0
  ){
    this.id = id;
    this.name = name;
    this.description = description;
    this.playerMin = playerMin;
    this.playerMax = playerMax;
  }
}
