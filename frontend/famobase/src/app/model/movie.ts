export class Movie {
  [k: string]: any;
  _id: number | string = '';
  foreignTitle: string = '';
  hungarianTitle?: string = '';
  director: string = '';
  releaseYear: string = '';
  length: number = 0;
  genre: string = '';
  imdbRank: number = 0;
  mainActor1: string = '';
  mainActor2?: string = '';
  timestampOfWatching: string = '';
}
