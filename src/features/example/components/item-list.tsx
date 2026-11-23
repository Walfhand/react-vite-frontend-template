import { useItems } from '../api/get-items';

export const ItemList = () => {
    const { data: items, isLoading, error } = useItems();

    if (isLoading) {
        return <p className="text-gray-500">Loading items...</p>;
    }

    if (error) {
        return <p className="text-red-500">Error loading items</p>;
    }

    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items?.map((item) => (
                <div
                    key={item.id}
                    className="rounded-lg border bg-white p-6 shadow-sm"
                >
                    <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                </div>
            ))}
        </div>
    );
};
