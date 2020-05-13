import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: [],
})
export class HomeComponent implements OnInit {
  nuevos: any[] = [];

  constructor(private spotifyService: SpotifyService) {
    this.spotifyService.getNewReleases().subscribe((data: any) => {
      console.log(data.albums.items);
      this.nuevos = data.albums.items;
    });
  }

  ngOnInit() {}
}
