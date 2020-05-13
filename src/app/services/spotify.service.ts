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
      "Bearer BQBFhI1pUMDa6Sf_PIpm6ylUZWg_gsAKFNtoG2_rGtb4RMIpuapcXaXGH03ruMfwT1l5t04Ku6FFz3vnrTE"
    );
    return this.httpClient.get(
      "https://api.spotify.com/v1/browse/new-releases?limit=20",
      {
        headers,
      }
    );
  }
}
