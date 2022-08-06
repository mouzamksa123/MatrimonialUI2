/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';


let menuList: any = [
    {
        id   : 'messages',
        title: 'Messages',
        type : 'group',
        icon : 'heroicons_outline:chart-pie',
        children: [
            {
                id   : 'messages.inbox',
                title: 'Inbox',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-check',
                link : '/messages/inbox'
            },
            {
                id   : 'messages.outbox',
                title: 'OutBox',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/messages/outbox'
            }
        ]
    },
    {
        id   : 'myprofile',
        title: 'My Profile',
        type : 'group',
        icon : 'heroicons_outline:chart-pie',
        children: [
            {
                id   : 'myprofile.editProfile',
                title: 'View/Edit Profile',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-check',
                link : '/myprofile/editProfile'
            },
            {
                id   : 'myprofile.managePhotos',
                title: 'Manage Photos',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/myprofile/managePhotos'
            },
            {
                id   : 'myprofile.editPreferences',
                title: 'Edit Preferences',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/myprofile/editPreferences'
            },
            {
                id   : 'myprofile.mysavedsearches',
                title: 'My Saved Searches',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/myprofile/mysavedsearches'
            },
            {
                id   : 'myprofile.myexpressinterest',
                title: 'My Express Interest',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/myprofile/myexpressinterest'
            }
        ]
    },
    {
        id   : 'profileDetails',
        title: 'Profile Details',
        type : 'group',
        icon : 'heroicons_outline:chart-pie',
        children: [
            {
                id   : 'profileDetails.interestReceived',
                title: 'Express Interest received',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-check',
                link : '/profileDetails/interestreceived'
            },
            {
                id   : 'profileDetails.myshortlistprofiles',
                title: 'Shortlisted Profile',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/profileDetails/myshortlistprofiles'
            },
            {
                id   : 'profileDetails.myblocklistprofiles',
                title: 'Blocked Profile',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/profileDetails/myblocklistprofiles'
            },
            {
                id   : 'profileDetails.myprofileviewed',
                title: 'My Profile Viewed By',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/profileDetails/myprofileviewed'
            },
            {
                id   : 'profileDetails.ivisitedprofile',
                title: 'I Visited Profile',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/profileDetails/ivisitedprofile'
            },
            {
                id   : 'profileDetails.mobilenumbersviewed',
                title: 'Mobile numbers Viewed by me',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/profileDetails/mobilenumbersviewed'
            },
            {
                id   : 'profileDetails.photopasswordrequest',
                title: 'Photo password request received',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/profileDetails/photopasswordrequest'
            }
        ]
    },
    {
        id   : 'settings',
        title: 'Settings',
        type : 'group',
        icon : 'heroicons_outline:chart-pie',
        children: [
            {
                id   : 'settings.photoprivacysetting',
                title: 'Photo Privacy Setting',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-check',
                link : '/settings/photoprivacysetting'
            },
            {
                id   : 'settings.contactviewsetting',
                title: 'Contact View Setting',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/settings/contactviewsetting'
            },
            {
                id   : 'settings.changepassword',
                title: 'Change Password',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/settings/changepassword'
            },
            {
                id   : 'settings.logout',
                title: 'logout',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/settings/logout'
            }
        ]
    }
];
export const defaultNavigation: FuseNavigationItem[] = menuList;
export const compactNavigation: FuseNavigationItem[] = menuList;
export const futuristicNavigation: FuseNavigationItem[] = menuList;
export const horizontalNavigation: FuseNavigationItem[] = menuList;
