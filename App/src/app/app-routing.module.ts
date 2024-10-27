import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { GuestGuard } from './auth/guards/guest.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [GuestGuard],
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'movies',
    loadChildren: () =>
      import('./pages/movies/movies.module').then((m) => m.MoviesModule),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/benvenuti/benvenuti.module').then(
        (m) => m.BenvenutiModule
      ),
  },
  {
    path: 'utenti',
    loadChildren: () =>
      import('./pages/utenti/utenti.module').then((m) => m.UtentiModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'favorite',
    loadChildren: () =>
      import('./pages/favorite/favorite.module').then((m) => m.FavoriteModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'profilo',
    loadChildren: () =>
      import('./pages/profilo/profilo.module').then((m) => m.ProfiloModule),
    canActivate: [AuthGuard],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
