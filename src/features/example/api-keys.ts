export const exampleKeys = {
    all: ['example'] as const,
    lists: () => [...exampleKeys.all, 'list'] as const,
    list: () => [...exampleKeys.lists()] as const,
};
