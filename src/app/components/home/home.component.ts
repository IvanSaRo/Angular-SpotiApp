import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: [],
})
export class HomeComponent implements OnInit {
  nuevos: any[] = [];
  loading: boolean;
  constructor(private spotifyService: SpotifyService) {
    this.loading = true;

    this.spotifyService.getNewReleases().subscribe((data: any) => {
      this.nuevos = data; //gracias al map y al pipe en vez de poner data.album.items ya le paso el dato que quiero como data
      this.loading = false;
    });
  }

  ngOnInit() {}
}
