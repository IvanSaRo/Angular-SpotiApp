import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class SpotifyService {
  objeto: any = {};
  constructor(private httpClient: HttpClient) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    let headers = new HttpHeaders();
    headers = headers.append(
      "Authorization",
      "Bearer BQAqgkE0zDBoBP5CcdI5Ma3UNbuljuo_c3-rritK1XjsFk7XvBJN7W73ZrehYhRxNBD-wf3KINjhXA-vEa8"
    );

    return this.httpClient.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery("browse/new-releases?limit=20").pipe(
      map((data) => data["albums"].items)
    );
  }

  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data) => data["artists"].items)
    );
  }
}
