import { HOME, ACCOUNT, ABOUT, ARTICLES, SIGN_IN } from '../constants/routes';

export interface Route {
    id: number;
    path: string;
    description: string;
}

export const AuthRoutes: Route[] = [
    {
        id: 1,
        path: HOME,
        description: 'Home',
    },
    {
        id: 2,
        path: ACCOUNT,
        description: 'Account',
    },
    {
        id: 3,
        path: ABOUT,
        description: 'About',
    },
    {
        id: 4,
        path: ARTICLES,
        description: 'Help Center control panel',
    },
];

export const NonAuthRoutes: Route[] = [
    {
        id: 5,
        path: ABOUT,
        description: 'About'
    },
    {
        id: 6,
        path: SIGN_IN,
        description: 'Sign In'
    }
];