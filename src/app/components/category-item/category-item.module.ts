import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { CategoryItemComponent } from "./category-item.component";

@NgModule(
    {
        declarations: [CategoryItemComponent],
        imports: [CommonModule,IonicModule],
        exports: [CategoryItemComponent],

    })

    export  class CategoryItemModule {}