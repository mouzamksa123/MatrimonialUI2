import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ManagePhotosComponent } from './manage-photos/manage-photos.component';
import { EditPreferencesComponent } from './edit-preferences/edit-preferences.component';
import { RouterModule } from '@angular/router';
import { myProfileRoutes } from '../my-profile/my-profile.routing';


@NgModule({
  declarations: [
    EditProfileComponent,
    ManagePhotosComponent,
    EditPreferencesComponent
  ],
  imports: [    
    RouterModule.forChild(myProfileRoutes)
  ]
})
export class MyProfileModule { }
