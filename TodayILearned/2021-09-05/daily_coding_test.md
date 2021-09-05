## 프로그래머스 위클리챌린지 4주차

**문제 링크** : [프로그래머스 위클리 챌린지 4주차](https://programmers.co.kr/learn/courses/30/lessons/84325)

```js
function solution(table, languages, preference) {
  var answer = "";
  table.sort();
  const scoreTable = [5, 4, 3, 2, 1];
  const jobs = table.map((jobInfo) => jobInfo.split(" ")[0]);
  const languageTable = table.map((jobInfo) => jobInfo.split(" ").slice(1));

  const totalScores = [];
  for (let lanOfJob of languageTable) {
    //5
    let totalScore = 0;
    for (let indexOfLan = 0; indexOfLan < languages.length; indexOfLan++) {
      // 5
      console.log("lan: ", languages[indexOfLan]);
      let targetIndex = lanOfJob.indexOf(languages[indexOfLan]);
      totalScore +=
        targetIndex < 0 ? 0 : scoreTable[targetIndex] * preference[indexOfLan];
      console.log("totalScore: ", totalScore);
    }
    totalScores.push(totalScore);
  }
  console.log("totalScores: ", totalScores);

  const indexOfHighestScore = totalScores.indexOf(Math.max(...totalScores));

  answer = jobs[indexOfHighestScore];

  return answer;
}
```
