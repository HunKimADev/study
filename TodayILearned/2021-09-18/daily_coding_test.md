## Valid Palindrome

**문제 링크 1** : [Valid Palindrome](https://leetcode.com/problems/valid-palindrome)

### 1. 리스트로 변환 / 587ms

```python
class Solution:
    def isPalindrome(self, s: str) -> bool:
        strs = []
        for char in s:
            if char.isalnum():
                strs.append(char.lower())
        while len(strs) > 1:
            if strs.pop(0) != strs.pop():
                return False

        return True
```

### 2. 데크 자료형을 이용한 최적화 / 66ms

```python
class Solution:
    def isPalindrome(self, s: str) -> bool:
        strs: Deque = collections.deque()
        for char in s:
            if char.isalnum():
                strs.append(char.lower())
        while len(strs) > 1:
            if strs.popleft() != strs.pop():
                return False

        return True
```

### 3. 슬라이싱 사용 / 51ms

```python
class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = s.lower()

        s = re.sub('[^a-z0-9]','',s)

        return s == s[::-1] #regex와 슬라이싱 사용
```

---

## Reverse string

**문제 링크 2** : [Reverse String](https://leetcode.com/problems/reverse-string/)

### 1. 투포인터를 이용한 방식 / 205ms

```python
class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        left, right = 0, len(s) - 1

        while left < right:
            s[left], s[right] = s[right], s[left]
            left += 1
            right -= 1
```

### 2. Pythonic way / 180ms

```python
class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        s.reverse()
        # or s[:] = s[::-1]
```

---

## Reorder data in log files

**문제 링크 3** : [Reorder data in log files](https://leetcode.com/problems/reorder-data-in-log-files/)

### 1. 람다와 + 연산자 이용 / 65ms

```python
class Solution:
    def reorderLogFiles(self, logs: List[str]) -> List[str]:
        letters, digits = [], []
        for log in logs:
            if log.split()[1].isdigit():
                digits.append(log)
            else:
                letters.append(log)

        letters.sort(key=lambda x: (x.split()[1:], x.split()[0]))

        return letters + digits
```
