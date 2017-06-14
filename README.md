### Works with Jest 19

In jest 19 mockReturnValueOnce does not delete the prior implementation.

Run `yarn && yarn run downgrade` and then `yarn test`.

### Doesn't work with jest 20

In jest 20, a mock function with an implementation that has .mockReturnValueOnce called on it
loses its original implementation.

`yarn run upgrade` and `yarn test` will fail.