## 프로그래머스 위클리챌린지 4주차

**문제 링크** : [프로그래머스 위클리 챌린지 4주차](https://programmers.co.kr/learn/courses/30/lessons/84325)

```js
function solution(table, languages, preference) {
  var answer = "";

  //동률일 경우를 위한 정렬
  table.sort();

  const scoreTable = [5, 4, 3, 2, 1];
  const jobs = table.map((jobInfo) => jobInfo.split(" ")[0]);
  const languageTable = table.map((jobInfo) => jobInfo.split(" ").slice(1));
  const totalScores = [];

  for (let lanOfJob of languageTable) {
    let totalScore = 0;
    for (let indexOfLan = 0; indexOfLan < languages.length; indexOfLan++) {
      let targetIndex = lanOfJob.indexOf(languages[indexOfLan]);
      totalScore +=
        targetIndex < 0 ? 0 : scoreTable[targetIndex] * preference[indexOfLan];
    }
    totalScores.push(totalScore);
  }

  const indexOfHighestScore = totalScores.indexOf(Math.max(...totalScores));

  answer = jobs[indexOfHighestScore];

  return answer;
}
```
