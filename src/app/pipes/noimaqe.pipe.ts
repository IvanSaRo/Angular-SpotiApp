import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "noimaqe",
})
export class NoimaqePipe implements PipeTransform {
  transform(images: any[], ...args: any[]): string {
    if (!images) {
      return "assets/img/original.png";
    }

    if (images.length > 0) {
      return images[0].url;
    } else {
      return "assets/img/original.png";
    }
  }
}
