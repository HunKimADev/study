/*
  @Question_Link : https://programmers.co.kr/learn/courses/30/lessons/83201
*/

function solution(scores) {
  var answer = "";
  //scores[행][열]의 열이 해당 학생의 점수
  //행과 열이 같을 시 본인평가 점수
  //본인평가 점수가 최고점 혹은 최저점일시 제외 > 에러 수정 '유일한' 최저점 혹은 최고점
  const numOfStudents = scores.length;

  for (let student = 0; student < numOfStudents; student++) {
    let scoresOfStudent = [];

    for (let score = 0; score < numOfStudents; score++) {
      scoresOfStudent.push(scores[score][student]);
    }
    const maxScore = Math.max(...scoresOfStudent);
    const minScore = Math.min(...scoresOfStudent);
    const isOnlyMax =
      maxScore === scoresOfStudent[student] &&
      scoresOfStudent.filter((score) => score === maxScore).length === 1;
    const isOnlyMin =
      minScore === scoresOfStudent[student] &&
      scoresOfStudent.filter((score) => score === minScore).length === 1;

    if (isOnlyMax || isOnlyMin) {
      scoresOfStudent = scoresOfStudent.filter(
        (el, index) => index !== student
      );
    }

    const average =
      scoresOfStudent.reduce((acc, cur) => acc + cur) / scoresOfStudent.length;

    answer += getGrade(average);
  }

  return answer;
}

function getGrade(score) {
  if (score < 50) {
    return "F";
  } else if (score < 70) {
    return "D";
  } else if (score < 80) {
    return "C";
  } else if (score < 90) {
    return "B";
  } else {
    return "A";
  }
}
