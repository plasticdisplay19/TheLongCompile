# Array in C++

## Operations in Vector
### 1. Insert Elements
#### a) `push_back(value)`
- Inserts an element at the end of the vector.
- Time Complexity: **O(1)**


#### b) `insert(position, value)`
- Inserts an element at the specified position.
- Elements after that position are shifted to the right.
- Time Complexity: **O(n)**

```cpp
vector<int> v = {1,2,4};
v.insert(v.begin()+2,3);
// Vector becomes: {1, 2, 3, 4}
```

#### c) `insert(position, count, value)`
- Inserts the same value multiple times.
- Time Complexity: **O(n)**
```cpp
vector<int> v = {1,2,5};

v.insert(v.begin()+2,2,3);
// Vector becomes: {1,2,3,3,5}
```

#### d) `emplace_back(value)`
- Constructs the element directly at the end of the vector.
- Avoids unnecessary copying.
- Time Complexity: **O(1)** (amortized)

#### e) `emplace(position, value)`
- Constructs the element directly at the specified position.
- Time Complexity: **O(n)**

---

### 2. Delete Elements
#### a) `pop_back()`
- Removes the last element.
- Time Complexity: **O(1)**

#### b) `erase(position)`
- Removes the element at the specified position.
- Time Complexity: **O(n)**


#### c) `erase(start, end)`
- Removes elements in the range `[start, end)`.
- Time Complexity: **O(n)**


#### d) `clear()`
- Removes all elements from the vector.
- Time Complexity: **O(n)**

---

### 3. Access Elements

#### a) `operator[]`
- Direct access without bounds checking.
- Time Complexity: **O(1)**

#### b) `at(index)`
- Access with bounds checking.
- Throws exception if index is invalid.
- Time Complexity: **O(1)**

#### c) `front()`
- Returns the first element.
- Time Complexity: **O(1)**

#### d) `back()`
- Returns the last element.
- Time Complexity: **O(1)**
---