import {RouterModule, Routes} from '@angular/router';
import {TestComponent} from './test/test.component';
import {AppComponent} from './app.component';
import {Test2Component} from './test2/test2.component';
import {GuardComponent} from './guard/guard.component';
import {SampleGuard} from './guard/guard.guard';
import {AuthGuard} from './auth.guard';
import {Sample4Component} from './sample4/sample4.component';
import {BoardComponent} from './board/board.component';
import {CreateComponent} from './board/create/create.component';

const AppRoutes: Routes = [
  {path: 'sample1', component: TestComponent},
  {path: 'sample2', component: Test2Component},
  {path: 'sample3', component: GuardComponent, canActivate: [AuthGuard]},
  {path: 'sample4', component: Sample4Component},
  {path: '', component: BoardComponent},
  {path: 'addForm', component: CreateComponent}
];

export const AppRouterModule = RouterModule.forRoot(AppRoutes);
