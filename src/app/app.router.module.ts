import {RouterModule, Routes} from '@angular/router';
import {TestComponent} from './test/test.component';

const AppRoutes: Routes = [
  {path: 'sample1', component: TestComponent}
];

export const AppRouterModule = RouterModule.forRoot(AppRoutes);
