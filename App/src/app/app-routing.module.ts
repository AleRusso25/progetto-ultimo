import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'movies',
    loadChildren: () =>
      import('./pages/movies/movies.module').then((m) => m.MoviesModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/benvenuti/benvenuti.module').then(
        (m) => m.BenvenutiModule
      ),
  },
  { path: 'utenti', loadChildren: () => import('./pages/utenti/utenti.module').then(m => m.UtentiModule) },
  { path: 'favorite', loadChildren: () => import('./pages/favorite/favorite.module').then(m => m.FavoriteModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
