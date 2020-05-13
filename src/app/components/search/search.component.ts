import { Component } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styles: [],
})
export class SearchComponent {
  artistas: any[] = [];

  constructor(private spotifyService: SpotifyService) {}
  buscar(termino: string) {
    this.spotifyService.getArtista(termino).subscribe((data: any) => {
      this.artistas = data.artists.items;
      console.log(this.artistas);
    });
  }
}
