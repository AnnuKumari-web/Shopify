import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditProductComponent } from './edit-product.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditProductComponent],
  imports: [SharedModule,
    FormsModule,
    RouterModule.forChild([
        {
            path: 'products/edit-product/:id', component: EditProductComponent
        }    
      ]
      )
],
  exports: [EditProductComponent],
})
export class EditProductModule {}
