## 여러가지 문제들

**문제 링크 1** : [완주하지 못한 선수](https://programmers.co.kr/learn/courses/30/lessons/42576)

```js
function solution(participant, completion) {
  var answer = "";
  participant.sort();
  completion.sort();
  for (let athlete = 0; athlete < participant.length; athlete++) {
    if (participant[athlete] !== completion[athlete])
      return participant[athlete];
  }
}
```

**문제 링크 2** : [위클리 챌린지 1주차 - 부족한 금액 계산하기](https://programmers.co.kr/learn/courses/30/lessons/82612)

```js
function solution(price, money, count) {
  const totalPrice = (price * count * (count + 1)) / 2;
  return totalPrice > money ? totalPrice - money : 0;
}
```
