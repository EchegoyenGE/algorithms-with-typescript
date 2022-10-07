# :zap: Counting Sort :zap:
It is a sorting algorithm that consist in 3 steps. 

Before all steps, we'll find the maximum value of the array. 


Then we´ve to iterate over the initial array to find the total count of each number in the array and store it in a new array (*Count array*).


As second step, we'll find the cumulative sum and store it in the array (by the way, I didn't follow this step).


Finally, we'll complete the output array with the indexes of the count array and the values stored in that array.

### Time complexity 

No matter how the elements are placed in the arrray, O(n+k).

### Space complexity 

It depends on the maximum value of the array, so O(max).

 Information: [Counting Sort - Wikipedia](https://en.wikipedia.org/wiki/Sorting_algorithm#Counting_sort)
