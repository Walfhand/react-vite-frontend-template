import { Outlet } from 'react-router';
import { Nav } from '@/components/shared/nav';

export const MainLayout = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Nav />
            <main>
                <Outlet />
            </main>
        </div>
    );
};
