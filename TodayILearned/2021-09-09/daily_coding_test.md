## 카카오 기출 - level 2

**문제 링크 1** : [문자열 압축](https://programmers.co.kr/learn/courses/30/lessons/60057)

```js
function solution(s) {
  const lengths = [];
  //문자열 길이가 1일때를 위한 || 1;
  const blockLimit = Math.floor(s.length / 2) || 1;
  for (let block = 1; block <= blockLimit; block++) {
    let compressed = "";
    let sIndex = 0;
    let current = "";
    let count = 1;
    while (sIndex <= s.length) {
      if (current === s.slice(sIndex, sIndex + block)) {
        count++;
      } else {
        compressed += count > 1 ? count + current : current;
        current = s.slice(sIndex, sIndex + block);
        count = 1;
      }
      sIndex += block;
    }
    compressed += current;
    lengths.push(compressed.length);
  }

  return Math.min(...lengths);
}
```

**문제 링크 2** : [오픈채팅방](https://programmers.co.kr/learn/courses/30/lessons/42888)

```js
function solution(record) {
  const userInfo = {};
  record.forEach((info) => {
    const [action, uid, nickname] = info.split(" ");
    if (action !== "Leave") {
      userInfo[uid] = nickname;
    }
  });

  const messages = record
    .filter((info) => info.split(" ")[0] !== "Change")
    .map((message) => {
      const [action, uid] = message.split(" ");
      return action === "Enter"
        ? `${userInfo[uid]}님이 들어왔습니다.`
        : `${userInfo[uid]}님이 나갔습니다.`;
    });

  return messages;
}
```
