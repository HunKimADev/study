## Trapping Rain Water

**문제 링크 1**: [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)

### 1. 투포인터를 이용한 풀이 / O(N), 76ms

```python
# 투포인터를 이용해서 더 낮은쪽의 포인터를 당겨오면서
# 해당 인덱스의 높이가 최대높이보다 낮을때 그 격차만큼 더한다
class Solution:
    def trap(self, height: List[int]) -> int:
        volumn = 0
        left, right = 0, len(height) - 1
        left_max, right_max = height[left], height[right]

        while left < right:
            left_max, right_max = max(left_max, height[left]), max(right_max, height[right])

            if left_max <= right_max:
                volumn += left_max - height[left]
                left += 1
            else:
                volumn += right_max - height[right]
                right -= 1

        return volumn
```

### 2. 스택을 이용한 풀이 / O(N), 76ms

```python
#현재 높이가 이전 높이보다 높아지는 지점에서 현재높이를 기준으로 stack에서 꺼내 비교하면서 그 격차만큼 채워나간다.
class Solution:
    def trap(self, height: List[int]) -> int:
        stack = []
        volumn = 0
        for i in range(len(height)):
            while stack and height[i] > height[stack[-1]]:
                top = stack.pop()

                if not len(stack):
                    break

                distance = i - stack[-1] - 1
                waters = min(height[i], height[stack[-1]]) - height[top]
                volumn += distance * waters

            stack.append(i)

        return volumn
```

---

## 3Sum

**문제 링크 2**: [3Sum](https://leetcode.com/problems/3sum/)

### 투포인터를 이용한 풀이

```python
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        result = []
        #정렬
        nums.sort()

        for i in range(len(nums)):
            #중복된 숫자 건너뛰기
            #i > 0 은 첫숫자와 마지막 숫자가 같은경우 방지
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            #현재 인덱스 다음부터 마지막 인덱스까지 검사
            left, right = i + 1, len(nums) - 1

            while left < right:
                sum = nums[i] + nums[left] + nums[right]
                #합이 0보다 작으면 left 1증가(숫자를 키운다)
                if sum < 0:
                    left += 1
                #합이 0보다 크면 right 1감소(숫자를 줄인다)
                elif sum > 0:
                    right -= 1
                #그 외의 경우는 sum이 0 즉 정답이므로 결과값을 추가하고 인덱스를 다음으로 넘겨준다.
                else:
                    result.append([nums[i],nums[left],nums[right]])

                    while left < right and nums[left] == nums[left + 1]:
                        left += 1

                    while left < right and nums[right] == nums[right - 1]:
                        right -= 1

                    left += 1
                    right -= 1

        return result
```

---

## Array Partition 1

**문제 링크 3**: [Array Partition 1](https://leetcode.com/problems/array-partition-i/)

### 1. 리스트 컴프리헨션을 이용한 짝수번째 값 계산

```python
class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        nums.sort()
        return sum([nums[i] for i in range(len(nums)) if i % 2 == 0])
```

### 2. Pythonic way

```python
class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        return sum(sorted(nums)[::2])
```
