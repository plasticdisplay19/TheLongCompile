# ArrayList in Java

## Initialization

### Important Points
- Unlike arrays, its size can grow or shrink automatically.
- It stores elements in contiguous memory.
- It allows duplicate elements, maintains insertion order.
- Primitive types cannot be stored directly; use (`Integer`,`Double`, etc.).
---

## Import Statement
```java
// Either of them works
import java.util.ArrayList;
import java.util.*;
```
---

## Declaration and Initialization
### Empty ArrayList
```java
ArrayList<Integer> list = new ArrayList<>();
```

### With Initial Capacity
```java
ArrayList<Integer> list = new ArrayList<>(size);
```

## Adding Elements
### Add at End
```java
list.add(value);
```
- Time Complexity: **O(1)** 

### Add at Specific Index
```java
list.add(index,value);
```
- Time Complexity: **O(n)**
---

## Accessing Elements
```java
list.get(index);
```
- Time Complexity: **O(1)**

---

## Updating Elements
```java
list.set(index, value);
```
- Time Complexity: **O(1)**
---

## Removing Elements
### Remove by Index
```java
list.remove(index);
```
- Time Complexity: **O(n)**

### Remove by Value
```java
list.remove(Integer.valueOf(value));
```
- Removes the first occurrence of the value.
- Time Complexity: **O(n)**
---

## Size of ArrayList
```java
list.size();
```
- Returns the current number of elements.
- Time Complexity: **O(1)**

---

## Checking if Empty
```java
list.isEmpty();
```
- Time Complexity: **O(1)**
---

## Searching
### Check if Element Exists
```java
list.contains(10);
```
- Time Complexity: **O(n)**

### Find Index
```java
list.indexOf(value);
```
- Returns `-1` if not found.
- Time Complexity: **O(n)**
---

## Common Utility Methods
### Sort
```java
Collections.sort(list);
```
- Time Complexity: **O(n log n)**

### Reverse
```java
Collections.reverse(list);
```
### Clear All Elements
```java
list.clear();
```
---

## Array vs ArrayList

| Feature | Array | ArrayList |
|----------|--------|------------|
| Size | Fixed | Dynamic |
| Access | O(1) | O(1) |
| Insert/Delete | O(n) | O(n) |
| Stores Primitives | Yes | No (Wrapper Classes) |
| Part of Collections Framework | No | Yes |
| Length/Size | `.length` | `.size()` |