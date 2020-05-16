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
      "Bearer BQBKZ7p-WJ7UonWfLPL7YwjZZZyHixMNhAs1ZD7E1f8C3w-9fS_UH57DLKRsMpAGDJrjkVK1c2qqTxYIat8"
    );

    return this.httpClient.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery("browse/new-releases?limit=20").pipe(
      map((data) => data["albums"].items)
    );
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data) => data["artists"].items)
    );
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`); //no necesita pipe porque recibo el dato como lo necesito(artista)
  }
  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks`); //no necesita pipe porque recibo el dato como lo necesito(artista/top-tracks)
  }
}
