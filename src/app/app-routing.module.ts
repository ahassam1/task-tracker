import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: "",
        loadChildren: () =>
            import('./components/task-manager/task-manager.module').then((m) => m.TaskManagerModule)
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes, {
        enableTracing: false
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }