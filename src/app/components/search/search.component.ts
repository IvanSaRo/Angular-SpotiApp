import { Component } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styles: [],
})
export class SearchComponent {
  artistas: any[] = [];
  loading: boolean;

  constructor(private spotifyService: SpotifyService, private router: Router) {}
  buscar(termino: string) {
    if (termino.length != 0) {
      this.loading = true;
      this.spotifyService.getArtistas(termino).subscribe((data: any) => {
        this.artistas = data;
        this.loading = false;
      });
    }
  }
}
