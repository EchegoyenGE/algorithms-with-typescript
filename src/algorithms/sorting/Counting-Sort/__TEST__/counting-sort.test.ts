import countingSort from '../counting-sort';

describe('Counting sort', () => {
    const unorderedArray: number[] = [4, 2, 2, 8, 2, 1, 5, 5, 0]
    const orderedArray: number[] = [0, 1, 2, 2, 2, 4, 5, 5, 8]

    test('Should order an unordered array', () => {  
        expect(countingSort(unorderedArray)).toStrictEqual(orderedArray);
    })

    test('Should return the same array if it is ordered', () => {
        const consecutiveArray: number[] = [0, 1, 2, 3, 5, 6, 7, 8, 9];

        expect(countingSort(consecutiveArray)).toStrictEqual(consecutiveArray);
    })

    test('Should return the same array if it composed by all the same numbers', () => {
        const unorderedArray: number[] = [1, 1, 1, 1, 1]

        expect(countingSort(unorderedArray)).toStrictEqual(unorderedArray);
    })
})
