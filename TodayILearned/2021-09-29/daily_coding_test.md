## Add Two Numbers

**문제 링크**: [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)

### 1. 전가산기 구현 / 64 ms

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        passing = 0
        root = result = ListNode(0)

        while l1 or l2 or passing:
            sum = passing
            if l1:
                sum += l1.val
                l1 = l1.next
            if l2:
                sum += l2.val
                l2 = l2.next

            passing, value = divmod(sum, 10)
            result.next = ListNode(value)
            result = result.next

        return root.next
```

## Swap Nodes in Pairs

**문제 링크**: [Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/)

### 1. 반복 구조 스왑

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        root = prev = ListNode(None)
        prev.next = head
        while head and head.next:
            b = head.next
            head.next = b.next
            b.next = head

            prev.next = b

            head = head.next
            prev = prev.next.next

        return root.next
```

### 2. 재귀 구조 스왑

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head and head.next:
            p = head.next
            head.next = self.swapPairs(p.next)
            p.next = head
            return p
        return head
```
