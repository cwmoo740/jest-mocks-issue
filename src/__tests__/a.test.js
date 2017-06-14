import { head } from 'lodash';
import { doTheThing } from '../a';
describe('doTheThing', () => {
    test('does the thing', () => {
        expect(doTheThing(['asdf', 'qwerty'])).toEqual('qwerty');
    });
    test('does it again', () => {
        expect(doTheThing(['aaaa', 'bbbb'])).toEqual('bbbb');
    });
    test('mock implementation once', () => {
        head.mockReturnValueOnce('new value');
        expect(doTheThing(['asdf', 'qwerty'])).toEqual('new value');
    });
    test('reverts to original mock', () => {
        expect(doTheThing(['asdf', 'qwerty'])).toEqual('qwerty');
    })
});

describe('test another mock', () => {
    const fake = jest.fn(a => a + 2);
    test('mock works', () => {
        expect(fake(2)).toEqual(4);
    });
    test('mock value', () => {
        fake.mockReturnValueOnce(99);
        expect(fake(2)).toEqual(99);
    });
    test('mock works again', () => {
        expect(fake(2)).toEqual(4);
    });
});
