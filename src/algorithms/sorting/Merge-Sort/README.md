# :zap: Merge Sort :zap:
It is a sorting algorithm that uses the Divider and Conquer technique to divide a problem into subproblems. It technique allows us to simplified the problem. We have an array of elements, then divide the array into two subarrays until the length of the array is equal 1. Then we should create two ordered subarrays. Finally, we will create the array that we´re going to return by selecting the elements of the two subarrays by order.

### Time complexity 

The Merge Sort is a recursive algorithm and time complexity can be expressed as following recurrence relation. 

T(n) = 2*T(n/2) + O(n)

The list size is divided in a max of Log n parts, and the merging of all sublists into a single list takes O(n) time, so the time complexity for all cases (best, worst and avergage) costs O(n*Log(n))
### Space complexity 

The insertion sort only use an extra variable called key, so the time complexity is O(1).

 Information: [Insertion Sort - Wikipedia](https://www.programiz.com/dsa/insertion-sort)