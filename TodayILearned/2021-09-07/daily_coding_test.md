## 위클리 챌린지 6주차 - 복서 정렬하기

**문제 링크 1** : [복서 정렬하기](https://programmers.co.kr/learn/courses/30/lessons/85002)

```js
function solution(weights, head2head) {
  //객체로 만들어서~
  //승률계산~
  //자기보다 무거운 복서 이긴횟수 계산~
  //본인 몸무게~
  //본인 번호~
  //정렬을 해준다~
  //그다음 맵~
  //입력이 최대 1000x1000이니까 N제곱이어도 된다~
  const boxers = weights.map((weight, index) => {
    const number = index + 1;
    const h2hArray = head2head[index].split("");
    const winRate =
      h2hArray.filter((record) => record === "N").length === h2hArray.length
        ? 0
        : h2hArray.filter((record) => record === "W").length /
          h2hArray.filter((record) => record !== "N").length;
    const winsFromHeavier = h2hArray.reduce(
      (acc, cur, idx) => (cur === "W" && weights[idx] > weight ? acc + 1 : acc),
      0
    );
    return {
      number,
      winRate,
      winsFromHeavier,
      weight,
    };
  });

  boxers.sort((a, b) => {
    if (a.winRate === b.winRate) {
      if (a.winsFromHeavier === b.winsFromHeavier) {
        if (a.weight === b.weight) {
          return a.number - b.number;
        } else {
          return b.weight - a.weight;
        }
      } else {
        return b.winsFromHeavier - a.winsFromHeavier;
      }
    } else {
      return b.winRate - a.winRate;
    }
  });

  return boxers.map((boxer) => boxer.number);
}
```
