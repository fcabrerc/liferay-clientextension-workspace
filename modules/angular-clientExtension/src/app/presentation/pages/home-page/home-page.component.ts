import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'app-home-page.component',
  standalone: true,
  imports: [
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {



}

