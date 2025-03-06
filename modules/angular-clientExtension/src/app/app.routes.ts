import { Routes } from '@angular/router';
import { HomePageComponent} from './presentation/pages/home-page/home-page.component';
import { ListPageComponent } from './presentation/pages/list-page/list-page.component';
import { DashboardLayoutComponent } from './presentation/layouts/dashboard-layout/dashboard-layout.component';
import { NotFoundPageComponent } from './presentation/pages/not-found-page/not-found-page.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomePageComponent,
        data: {
          icon: 'fa-solid fa-home',
          title: 'Home',
          description: 'Home description',
        },
      },
      {
        path: 'list',
        component: ListPageComponent,
        data: {
          icon: 'fa-solid fa-list',
          title: 'List',
          description: 'List description',
        },
      },
      {
        path: '', redirectTo: 'home', pathMatch: 'full',
      },
      {
        path: '**', component: NotFoundPageComponent
      },
    ]
  }
];
