import { Component } from '@angular/core';
import { getValue, VALUE } from './joke/model/joke.modal.static';
import { Joke } from './joke/model/joke.model';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'ContentProjection';

  joke: Joke = new Joke(
    getValue(),
    "PRIMEIRO"
  );
}
