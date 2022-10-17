# :zap: Insertion Sort :zap:
It is a sorting alghorithm where starting from the index 1 of the array, compares it with the previous value. If the value in index 1 is lower than value in index 0, it swap the values. Then it compares with others previous values, if there is no previous values lower than the key value it stops, and continue with the next index of the array.

### Time complexity 

The insertion sort employs two loops. The inner loop performs O(n) comparisons. In the worst case, the outer loops runs O(n) times. So in the worst case, the time complexity is O(n<sup>2</sup>). In the best case, if the array is sorted, the insertion sort iterates one time the array, so the time complexity is O(n). 

### Space complexity 

The insertion sort only use an extra variable called key, so the time complexity is O(1).

 Information: [Insertion Sort - Wikipedia](https://www.programiz.com/dsa/insertion-sort)