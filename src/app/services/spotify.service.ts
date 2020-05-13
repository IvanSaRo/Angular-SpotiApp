import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class SpotifyService {
  objeto: any = {};
  constructor(private httpClient: HttpClient) {}

  getNewReleases() {
    let headers = new HttpHeaders();
    headers = headers.append(
      "Authorization",
      "Bearer BQCYcfrLG8C1uzFasRyhQJJPYTkKD8u-24yZvaw6Byv4tCgp-vdO9b28ozcT64WBYa2MFifa29WEFhRi1pg"
    );
    return this.httpClient.get(
      "https://api.spotify.com/v1/browse/new-releases?limit=20",
      {
        headers,
      }
    );
  }
  //    https://api.spotify.com/v1/search?q=madonna&type=artist&limit=20
  getArtista(termino: string) {
    let headers = new HttpHeaders();
    headers = headers.append(
      "Authorization",
      "Bearer BQCYcfrLG8C1uzFasRyhQJJPYTkKD8u-24yZvaw6Byv4tCgp-vdO9b28ozcT64WBYa2MFifa29WEFhRi1pg"
    );
    return this.httpClient.get(
      `https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,
      {
        headers,
      }
    );
  }
}
