import { Routes } from '@angular/router';
import { SingletonComponent } from './pages/singleton/singleton.component';
import { HomeComponent } from './pages/home/home.component';
import { DependencyInjectionComponent } from './pages/dependency-injection/dependency-injection.component';
import { ObserverComponent } from './pages/observer/observer.component';
import { StrategyComponent } from './pages/strategy/strategy.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'singleton',
        component: SingletonComponent
    },
    {
        path: 'di',
        component: DependencyInjectionComponent
    },
    {
        path: 'observer',
        component: ObserverComponent
    },
    {
        path: 'strategy',
        component: StrategyComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
