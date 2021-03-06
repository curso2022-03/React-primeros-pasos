import { PaginaListas } from '../components/paginaListas';
import Home from '../components/Home';
import Perfil from '../components/Perfil';
import { PaginaTiempo } from '../components/PaginaTiempo';
import Coches from '../components/Coches';
import Animes from '../components/Animes';
import f1 from '../components/f1';

export const MenuItems = [
  { id: 1, path: '/', title: 'Home', component: Home },
  {
    id: 2,
    path: '/listas',
    title: 'Listas de tareas',
    component: PaginaListas,
  },
  { id: 3, path: '/perfil', title: 'Perfil', component: Perfil },
  { id: 4, path: '/tiempo', title: 'Tiempo', component: PaginaTiempo },
  { id: 5, path: '/coches', title: 'Coches', component: Coches },
  { id: 6, path: '/animes', title: 'Animes', component: Animes },
  { id: 7, path: '/f1', title: 'F1🏎️', component: f1 },
];
