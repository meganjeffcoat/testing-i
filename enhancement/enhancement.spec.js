const enhancement = require('./enhancement.js');
const { trident, head, helm, achilles, fleece } = require('../items/items.js');

describe('items.js', () => {

    describe('success function', () => {
        
        test('increase enhancement level', () => {
            expect(enhancement.success(trident).enhancement).toEqual('+1');
        });

        test('change name to display enhancement', () => {
            expect(enhancement.success(head).name).toEqual('[+5] Head');
        });

        test('enhancement at 16', () => {
            expect(enhancement.success(helm).enhancement).toEqual('PRI');
        });

        test('enhancement at 17', () => {
            expect(enhancement.success(achilles).enhancement).toEqual('DUO');
        });

        test('enhancement stops at 20', () => {
            expect(() => {
                enhancement.success(fleece)
            }).toThrow();
        })

    })
    describe('the fail function', () => {

        test('durability of the item is decreased by 5 if the item`s enhancement is between 0 and 14', () => {
            expect(enhancement.fail(head).durability).toEqual(95);
        })

        test('durability of the item is decreased by 10 if the item`s enhancement is greater than 14', () => {
            expect(enhancement.fail(achilles).durability).toEqual(90);
        })
    });

    describe('the repair function', () => {
        test('restore the item`s durability', () => {
            expect(enhancement.repair(trident).durability).toEqual(100);
        })
    })
})