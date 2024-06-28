import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserprofileComponent } from "./components/userprofile/userprofile.component";
import { UserpostsComponent } from './components/userposts/userposts.component';
import { PostcommentComponent } from './components/postcomment/postcomment.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, UserprofileComponent, UserpostsComponent, PostcommentComponent]
})
export class AppComponent {
  title = 'twitter_clone';
}
