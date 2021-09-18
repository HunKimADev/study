## Two sum

파이썬을 배우기 시작했다

**문제 링크** : [Two Sum](https://leetcode.com/problems/two-sum/)

### 1. 무차별 대입 / 5793 ms

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i,j]
```

### 2. in을 이용한 탐색 / 644ms

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i, n in enumerate(nums):
            complement = target - n

            if complement in nums[i + 1:]:
                return nums.index(n), nums[i + 1:].index(complement) + i + 1
```

### 3. 첫 번째 수를 뺸 결과 키 조회 / 64ms

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        nums_map = {}
        for i, num in enumerate(nums):
            nums_map[num] = i

        for i, num in enumerate(nums):
            if target - num in nums_map and i != nums_map[target - num]:
                return nums.index(num), nums_map[target - num]
```

### 4. 조회 구조 개선 / 79ms

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        #더 간결한 코드
        nums_map = {}
        for i, num in enumerate(nums):
            if target - num in nums_map:
                return [nums_map[target - num], i]
            nums_map[num] = i
```
