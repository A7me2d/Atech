import { Routes } from '@angular/router';
import { NumberParentComponent } from './components/number-parent/number-parent.component';
import { TesstsComponent } from './tessts/tessts.component';

export const routes: Routes = [
{path: '' , component: NumberParentComponent},
{path: 'test' , component: TesstsComponent},
{path: '**' , component: NumberParentComponent}
];
