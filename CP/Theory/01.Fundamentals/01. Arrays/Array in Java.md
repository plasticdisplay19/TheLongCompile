# Array in Java

## Initialization

### Important Points

- When an array is declared, only a reference is created.
- Memory is allocated using the `new` keyword by specifying the array size.
- Once an array is created, its size cannot be changed.
- Arrays are stored in contiguous memory locations.
- Accessing an invalid index throws `ArrayIndexOutOfBoundsException`.
- Elements are automatically initialized to default values:
  - `0` for numeric types (`int`, `long`, `double`, etc.)
  - `false` for `boolean`
  - `null` for reference types (`String`, objects, etc.)

---

## Declaration and Initialization
### 1. Declare and Allocate

```java
int[] arr = new int[size];
int arr[] = new int[size];
```
---

### 2. Initialize with Values

```java
int[] arr = {3,4,1};
```
---

### Time Complexity
| Operation | Complexity |
|------------|------------|
| Access | O(1) |
| Update | O(1) |

---


## Length of Array

```java
(arr.length);
```
> `length` is a property, not a method.

---
---

## Common Operations
### Fill Entire Array
```java
Arrays.fill(arr,value);
```

### Sort Array
```java
Arrays.sort(arr);
```

### Binary Search
```java
int idx = Arrays.binarySearch(arr, key);
```