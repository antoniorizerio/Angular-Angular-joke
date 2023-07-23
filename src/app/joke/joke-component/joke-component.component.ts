import { Component, Input } from "@angular/core";
import { Joke } from "../model/joke.model";

@Component({
  selector: "joke",
  templateUrl: 'joke-component.component.html'

})
export class JokeComponent {

  @Input("joke") data: Joke;

  constructor() {
    console.log('CONSTRUTOR JOKE');
  }
}
