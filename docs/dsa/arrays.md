---
title: Arrays - Data Structures & Algorithms
description: Master arrays in JavaScript. Learn array operations, time complexity, common patterns, and solve array-based coding problems efficiently.
---

# Arrays

Arrays are one of the most fundamental data structures in programming. They store elements in a contiguous memory location and provide indexed access to elements.

## What is an Array?

An array is a collection of elements stored at contiguous memory locations. Each element can be accessed using its index, starting from 0.

```javascript
// Array declaration and initialization
const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "orange"];
const mixed = [1, "hello", true, null];

// Accessing elements
console.log(numbers[0]); // 1
console.log(fruits[1]); // "banana"
console.log(numbers.length); // 5
```

## Array Operations & Time Complexity

### Access - O(1)
```javascript
const arr = [10, 20, 30, 40, 50];
console.log(arr[2]); // 30 - Direct access by index
```

### Search - O(n)
```javascript
// Linear search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// Using built-in methods
const index = arr.indexOf(30); // O(n)
const exists = arr.includes(30); // O(n)
```

### Insertion

#### At the end - O(1) amortized
```javascript
const arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4]
```

#### At the beginning - O(n)
```javascript
const arr = [2, 3, 4];
arr.unshift(1); // [1, 2, 3, 4] - Shifts all elements
```

#### At specific position - O(n)
```javascript
const arr = [1, 2, 4, 5];
arr.splice(2, 0, 3); // [1, 2, 3, 4, 5] - Insert 3 at index 2
```

### Deletion

#### From the end - O(1)
```javascript
const arr = [1, 2, 3, 4];
const last = arr.pop(); // Returns 4, arr becomes [1, 2, 3]
```

#### From the beginning - O(n)
```javascript
const arr = [1, 2, 3, 4];
const first = arr.shift(); // Returns 1, arr becomes [2, 3, 4]
```

#### From specific position - O(n)
```javascript
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 1); // Remove 1 element at index 2: [1, 2, 4, 5]
```

## Common Array Patterns

### Two Pointers Technique
```javascript
// Check if array is palindrome
function isPalindrome(arr) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// Find pair with target sum in sorted array
function twoSum(sortedArr, target) {
  let left = 0;
  let right = sortedArr.length - 1;
  
  while (left < right) {
    const sum = sortedArr[left] + sortedArr[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [-1, -1];
}
```

### Sliding Window
```javascript
// Find maximum sum of k consecutive elements
function maxSumSubarray(arr, k) {
  if (arr.length < k) return null;
  
  // Calculate sum of first window
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  
  let maxSum = windowSum;
  
  // Slide the window
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }
  
  return maxSum;
}

// Usage
console.log(maxSumSubarray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
```

### Prefix Sum
```javascript
// Calculate range sum queries efficiently
class PrefixSum {
  constructor(arr) {
    this.prefixSum = [0];
    for (let i = 0; i < arr.length; i++) {
      this.prefixSum[i + 1] = this.prefixSum[i] + arr[i];
    }
  }
  
  // Get sum of elements from index i to j (inclusive)
  rangeSum(i, j) {
    return this.prefixSum[j + 1] - this.prefixSum[i];
  }
}

// Usage
const ps = new PrefixSum([1, 2, 3, 4, 5]);
console.log(ps.rangeSum(1, 3)); // Sum of [2, 3, 4] = 9
```

## Array Manipulation Algorithms

### Rotation
```javascript
// Rotate array to the right by k steps
function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n; // Handle k > n
  
  // Reverse entire array
  reverse(arr, 0, n - 1);
  // Reverse first k elements
  reverse(arr, 0, k - 1);
  // Reverse remaining elements
  reverse(arr, k, n - 1);
  
  return arr;
}

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

// Usage
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)); // [5, 6, 7, 1, 2, 3, 4]
```

### Remove Duplicates
```javascript
// Remove duplicates from sorted array in-place
function removeDuplicates(arr) {
  if (arr.length <= 1) return arr.length;
  
  let writeIndex = 1;
  
  for (let readIndex = 1; readIndex < arr.length; readIndex++) {
    if (arr[readIndex] !== arr[readIndex - 1]) {
      arr[writeIndex] = arr[readIndex];
      writeIndex++;
    }
  }
  
  return writeIndex; // New length
}

// Usage
const arr = [1, 1, 2, 2, 2, 3, 4, 4, 5];
const newLength = removeDuplicates(arr);
console.log(arr.slice(0, newLength)); // [1, 2, 3, 4, 5]
```

## Advanced Array Techniques

### Kadane's Algorithm (Maximum Subarray)
```javascript
// Find maximum sum of contiguous subarray
function maxSubarraySum(arr) {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  
  return maxSoFar;
}

// Usage
console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6 ([4, -1, 2, 1])
```

### Dutch National Flag (3-way partitioning)
```javascript
// Sort array of 0s, 1s, and 2s
function sortColors(arr) {
  let low = 0, mid = 0, high = arr.length - 1;
  
  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else { // arr[mid] === 2
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
      // Don't increment mid here
    }
  }
  
  return arr;
}

// Usage
console.log(sortColors([2, 0, 2, 1, 1, 0])); // [0, 0, 1, 1, 2, 2]
```

## JavaScript Array Methods

### Transformation Methods
```javascript
const numbers = [1, 2, 3, 4, 5];

// map - Transform each element
const doubled = numbers.map(x => x * 2); // [2, 4, 6, 8, 10]

// filter - Select elements based on condition
const evens = numbers.filter(x => x % 2 === 0); // [2, 4]

// reduce - Accumulate values
const sum = numbers.reduce((acc, x) => acc + x, 0); // 15

// forEach - Execute function for each element
numbers.forEach(x => console.log(x));
```

### Search Methods
```javascript
const fruits = ["apple", "banana", "orange", "apple"];

// find - First element matching condition
const found = fruits.find(fruit => fruit.startsWith("b")); // "banana"

// findIndex - Index of first matching element
const index = fruits.findIndex(fruit => fruit === "orange"); // 2

// some - Check if any element matches
const hasApple = fruits.some(fruit => fruit === "apple"); // true

// every - Check if all elements match
const allLong = fruits.every(fruit => fruit.length > 3); // true
```

## Common Interview Problems

### 1. Two Sum
```javascript
function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  
  return [];
}
```

### 2. Best Time to Buy and Sell Stock
```javascript
function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;
  
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
  }
  
  return maxProfit;
}
```

### 3. Product of Array Except Self
```javascript
function productExceptSelf(nums) {
  const result = new Array(nums.length);
  
  // Left pass
  result[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }
  
  // Right pass
  let rightProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }
  
  return result;
}
```

## Best Practices

1. **Choose the right operation** - Consider time complexity
2. **Use built-in methods** - They're optimized and readable
3. **Avoid nested loops** when possible - Look for O(n) solutions
4. **Consider space-time tradeoffs** - Sometimes extra space saves time
5. **Handle edge cases** - Empty arrays, single elements, etc.

## Next Steps

Now that you understand arrays, let's explore [Linked Lists](/dsa/linked-lists) to see how dynamic data structures work differently from arrays.