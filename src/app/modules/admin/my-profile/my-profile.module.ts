import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ManagePhotosComponent } from './manage-photos/manage-photos.component';
import { EditPreferencesComponent } from './edit-preferences/edit-preferences.component';
import { RouterModule } from '@angular/router';
import { myProfileRoutes } from '../my-profile/my-profile.routing';
import { MyExpressInterestComponent } from './my-express-interest/my-express-interest.component';
import { MySavedSearchesComponent } from './my-saved-searches/my-saved-searches.component';


@NgModule({
  declarations: [
    EditProfileComponent,
    ManagePhotosComponent,
    EditPreferencesComponent,
    MyExpressInterestComponent,
    MySavedSearchesComponent
  ],
  imports: [    
    RouterModule.forChild(myProfileRoutes)
  ]
})
export class MyProfileModule { }
