export const head = jest.fn((array) => {
    return array ? array[0] : undefined;
});
