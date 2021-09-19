## Most Common Word

**문제 링크 1**: [Most Common Word]()

### 1. 리스트 컴프리헨션을 이용 / 40ms

```python
class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        #filter words
        words = [word for word in re.sub(r'[^\w]', ' ', paragraph)
            .lower().split()
                if word not in banned]

        counts = collections.defaultdict(int)
        for word in words:
            counts[word] += 1

        return max(counts, key=counts.get)
```

### 2. 카운터 객체를 이용 / 36ms

```python
class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        words = [word for word in re.sub(r'[^\w]', ' ', paragraph)
            .lower().split()
                if word not in banned]

        counts = collections.Counter(words)
        return counts.most_common(1)[0][0]
```

---

## Group Anagrams

**문제 링크2**: [Group Anagram](https://leetcode.com/problems/group-anagrams/)

```python
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams = collections.defaultdict(list)

        for word in strs:
            anagrams[''.join(sorted(word))].append(word)

        return anagrams.values()
```

---

## Longest Palindrome Substring

**문제 링크 3**: [Longest Palindrome Substring](https://leetcode.com/problems/longest-palindromic-substring/)

```python
class Solution:
    def longestPalindrome(self, s: str) -> str:
        #예외처리
        if len(s) < 2 or s == s[::-1]:
            return s

        #팰린드롬 판별 및 포인터 확장
        def expand(left:int, right:int) -> str:
            while left >= 0 and right <= len(s) and s[left] == s[right - 1]:
                left -= 1
                right += 1
            return s[left + 1: right - 1]

        #슬라이딩 윈도우 우측 이동
        result = ''
        for i in range(len(s) - 1):
            result = max(result,
                        expand(i, i + 1),
                        expand(i, i + 2),
                        key=len)
        return result
```
