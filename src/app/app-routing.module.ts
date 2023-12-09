import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalendrierListComponent } from "./calendrier-list/calendrier-list.component";
import { IndexPageComponent } from "./index-page/index-page.component";

const routes: Routes = [
    {path: 'calendrier', component: CalendrierListComponent}, 
    {path: '', component: IndexPageComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}