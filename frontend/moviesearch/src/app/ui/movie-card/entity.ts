export class movieDetail{
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview:string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number
}
export class movieCard{
  page:number=1;
  total_pages:number;
  results:Array<movieDetail>
}
