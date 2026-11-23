import { ItemList } from '@/features/example/components/item-list';

export const Component = () => {
    return (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <h1 className="mb-6 text-3xl font-bold">Example Feature</h1>
            <ItemList />
        </div>
    );
};
