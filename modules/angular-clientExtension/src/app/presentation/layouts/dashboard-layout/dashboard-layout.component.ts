import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from 'src/app/app.routes';
import { SidebarMenuItemComponent } from '../../components/sidebar-menu-item/sidebar-menu-item.component';
import { MaterialModule } from 'src/app/material/material.module';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [
    RouterModule,
    SidebarMenuItemComponent,
    MaterialModule
  ],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardLayoutComponent {
  public routes = routes[0].children?.filter( (route) => route.data );
}
