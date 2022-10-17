import insertionSort from '../insertion-sort'

describe('Insertion sort', () => {
    const unorderedArray: number[] = [5, 1, 7, 3, 2, 6, 9, 0, 8]; 
    const orderedArray: number[] = [0, 1, 2, 3, 5, 6, 7, 8, 9];

    test('Should order an unordered array', () => {
        expect(insertionSort(unorderedArray)).toStrictEqual(orderedArray);
    })

    test('Should return the same array if it is ordered', () => {
        expect(insertionSort(orderedArray)).toStrictEqual(orderedArray);
    })

    test('Should return the same array if it composed by all the same numbers', () => {
        const equalArray: number[] = [1, 1, 1, 1, 1]
        expect(insertionSort(equalArray)).toStrictEqual(equalArray);
    })
})
