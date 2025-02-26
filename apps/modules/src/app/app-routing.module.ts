import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    // canActivate: [AuthGuardService],
    data: { breadcrumb: 'Home' },
    // data: {
    //   breadcrumb: {
    //     label: 'Home',
    //     info: 'home',
    //     // routeInterceptor: (routeLink, breadcrumb) => {
    //     //   console.log(routeLink);
    //     //   return routeLink + 'designer';
    //     //   // return routeLink;
    //     // },
    //   },
    // },
    children: [
      {
        path: 'designer',
        loadChildren: () =>
          import('./features/designer/designer.module').then(
            (m) => m.DesignerModule
          ),
        data: { breadcrumb: { skip: true } },
      },
      // project routes
      {
        path: 'project',
        loadChildren: () =>
          import('./features/project/project.module').then(
            (m) => m.ProjectModule
          ),
        // canActivate: [AuthGuardService],
      },
      // library
      {
        path: 'library',
        loadChildren: () =>
          import('./features/library/library.module').then(
            (m) => m.LibraryModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
