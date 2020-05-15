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
      "Bearer BQDoSFIx-HOBNS3s1gJBHlNqW4o4gQZU5Nd-0qm7HzL9746seQ8d9xIyqwdiZ0HwgT54lS8cqPcZNCKlXTs"
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
