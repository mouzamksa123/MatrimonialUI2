/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
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
                title: 'Edit Profile',
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
                title: 'My Shortlist Profile',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/profileDetails/myshortlistprofiles'
            },
            {
                id   : 'profileDetails.myblocklistprofiles',
                title: 'My Blocklist Profile',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/profileDetails/myblocklistprofiles'
            },
            {
                id   : 'profileDetails.myprofileviewed',
                title: 'My Profile Viewed',
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
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
