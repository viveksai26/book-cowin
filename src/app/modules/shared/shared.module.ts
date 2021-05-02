import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppMaterialModule } from "./style/app-material.module";



@NgModule({
    imports: [
        CommonModule,
        AppMaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        CommonModule,
        AppMaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: []
})
export class SharedModule {}