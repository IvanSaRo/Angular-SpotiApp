import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class SpotifyService {
  constructor(private httpClient: HttpClient) {}

  getNewReleases() {
    let headers = new HttpHeaders();
    headers = headers.append(
      "Authorization",
      "Bearer BQBX3RSSQA8Ln-QlmM44TZ2xL3Lm1a7ZljT2Wgni90bqHnmebfpI6-rfWr1l6JuJaOjw1mUfhqrAB0Ixu0Q"
    );
    this.httpClient
      .get("https://api.spotify.com/v1/browse/new-releases", { headers })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
