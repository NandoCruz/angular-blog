import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { ContentComponent } from './pages/content/content.component';
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },

  {
    path:'content',
    component:ContentComponent
  }
]
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angular-blog';
}
