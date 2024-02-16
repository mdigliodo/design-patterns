import { Routes } from '@angular/router';
import { SingletonComponent } from './pages/singleton/singleton.component';
import { HomeComponent } from './pages/home/home.component';
import { DependencyInjectionComponent } from './pages/dependency-injection/dependency-injection.component';
import { ObserverComponent } from './pages/observer/observer.component';
import { StrategyComponent } from './pages/strategy/strategy.component';
import { DecoratorComponent } from './pages/decorator/decorator.component';
import { FacadeComponent } from './pages/facade/facade.component';
import { CompositeComponent } from './pages/composite/composite.component';
import { FactoryComponent } from './pages/factory/factory.component';

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
        path: 'decorator',
        component: DecoratorComponent
    },
    {
        path: 'facade',
        component: FacadeComponent
    },
    {
        path: 'composite',
        component: CompositeComponent
    },
    {
        path: 'factory',
        component: FactoryComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
