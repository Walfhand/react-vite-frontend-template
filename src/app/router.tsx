import { createBrowserRouter } from 'react-router';
import { MainLayout } from '@/components/layouts/main-layout';
import { NotFound } from '@/components/errors/not-found';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                lazy: () => import('./routes/pages/home'),
            },
            {
                path: 'example',
                lazy: () => import('./routes/pages/example'),
            },
        ],
    },
    {
        path: '/login',
        lazy: () => import('./routes/public-routes'),
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);
