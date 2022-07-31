import { Route } from '@angular/router';
import { EditProfileComponent } from 'app/modules/admin/my-profile/edit-profile/edit-profile.component';
import { ManagePhotosComponent } from 'app/modules/admin/my-profile/manage-photos/manage-photos.component';
import { EditPreferencesComponent } from 'app/modules/admin/my-profile/edit-preferences/edit-preferences.component';

export const myProfileRoutes: Route[] = [
    {
        path     : '',
        redirectTo: 'editProfile'
    },
    {
        path     : 'editProfile',
        component: EditProfileComponent
    },
    {
        path     : 'managePhotos',
        component: ManagePhotosComponent
    },
    {
        path     : 'editPreferences',
        component: EditPreferencesComponent
    }
];
