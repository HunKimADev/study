## Product of Array Except Self

**문제 링크 1**: [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)

### 왼쪽 곱셈값에 오른쪽 곱셈값 곱하기 / O(N)

```python
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        result = []
        p = 1
        for i in range(len(nums)):
            result.append(p)
            p = p * nums[i]

        print(result)

        p = 1
        for i in range(len(nums) - 1, 0-1, -1):
            result[i] = result[i] * p
            p = p * nums[i]

        return result
```

---

## Best Time to Buy and Sell Stock

**문제 링크 2**: [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

## 저점과 현재 값의 차이 계산 / O(N)

```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0
        min_price = sys.maxsize

        for price in prices:
            min_price = min(min_price, price)
            profit = max(profit, price - min_price)

        return profit
```

---

## Palindrome Linked List

**문제 링크 3**: [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/)

### 1. 리스트로 변환 / 1364 ms

```python
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        q: List = []
        if not head:
            return True
        node = head

        while node is not None:
            q.append(node.val)
            node = node.next

        while len(q) > 1:
            if q.pop(0) != q.pop():
                return False

        return True
```

### 2. 데크로 최적화 / 812ms

```python
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        q: Deque = collections.deque()
        if not head:
            return True
        node = head

        while node is not None:
            q.append(node.val)
            node = node.next

        while len(q) > 1:
            if q.popleft() != q.pop():
                return False

        return True
```

### 3. 러너 기법 활용

```python
class Solution:
    #rev =  None,                     1 -> None,           2 -> 1 -> None
    #slow = 1 -> 2 -> 2 -> 1 -> None, 2 -> 2 -> 1 -> None, 2-> 1 -> None
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        rev = None
        slow = fast = head

        while fast and fast.next:
            fast = fast.next.next
            rev, rev.next, slow = slow, rev, slow.next
        #Linked List의 요소가 홀수개일 경우
        if fast:
          slow = slow.next
        while rev and rev.val == slow.val:
            slow, rev = slow.next, rev.next

        return not rev
```

---

**문제 링크 4**: [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)

### 재귀 구조로 연결

```python
class Solution:
    def mergeTwoLists(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        if (not l1) or (l2 and l1.val > l2.val):
            l1, l2 = l2, l1

        if l1:
            l1.next = self.mergeTwoLists(l1.next, l2)

        return l1
```

---

## Reverse Linked List

**문제 링크 5**: [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)

### 1. 재귀 구조로 뒤집기 / 40ms

```python
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        def reverse(node: ListNode, prev: ListNode = None):
            if not node:
                return prev
            next, node.next = node.next, prev

            return reverse(next, node)

        return reverse(head)
```

### 2. 반복 구조로 뒤집기 / 32ms

```python
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        node, prev = head, None

        while node:
            next, node.next = node.next, prev
            prev, node = node, next

        return prev
```
