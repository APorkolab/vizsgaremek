export class Movie {
  [k: string]: any;
  _id: number | string = '';
  foreignTitle: string = '';
  hungarianTitle?: string = '';
  director: string = '';
  releaseYear: number = 0;
  length: number = 0;
  genre: string = '';
  imdbRank: number = 0;
  imdbAverage: number = 0;
  imdbID: string = '';
  mainActor1: string = '';
  mainActor2: number | string = '';
}
