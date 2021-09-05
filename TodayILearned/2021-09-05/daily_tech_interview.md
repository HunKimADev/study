## let, var, const의 차이점과 hoisting

먼저 javascript에서 hoisting이란 function 과 var의 선언을 javascript의 실행단계에서 스크립트 가장 위로 끌어올리는 것을 말한다.

es6에서 let과 const가 나오기 이전엔 변수의 선언을 var로 했어야 헀는데, 이 var는 여러가지 문제점을 안고 있었다.
그 문제점으로는

1. 변수 재선언 시 덮어쓰는 현상: 아래의 코드와 같이 var 키워드를 사용해서 변수를 선언한뒤 그 아래에서 재선언을 했을 시 에러를 띄워주는게 아니라 그대로 덮어쓰게되는 현상이다. 간단한 코드에서야 주의를 기울인다면 되겠지만 복잡한 코드에서는 Human Error를 쉽게 일으킬 수 있고, 디버깅 또한 힘들다.

```js
var name = "상훈";
var name = "율리";
```

2. 변수 선언 이전 시점에서의 변수 호출: 아래처럼 var 키워드를 사용해서 선언시, 변수 선언 이전에 변수를 호출 하였음에도 문제없이 코드가 실행되고, 콘솔에 undefined가 출력되는 걸 확인할 수 있다. 이는 위에서 설명한 var keyword의 hoisting때문인데, javascript가 실행되는 순간에 var의 변수 선언이 스크립트 최상단으로 끌어올려지면서 참조는 가능하지만 값이 할당이 되지않은 상태(undefined)로 출력이 되는 것이다.

```js
console.log(name);

var name = "상훈";

//Console>> undefined
```

3. Scope의 모호함: var는 'Function scope'이다. var로 선언한 변수에 접근할 수 있는 범위가 block 단위가 아니라 function 단위라는 것인데 그 때문에 아래와 같이 if문(혹은 for문 등) 안에서 선언된 변수를 바깥에서도 접근할 수 있다.

```js
if (true) {
  var name = "상훈";
}
console.log(name);
```

위의 문제들을 해결하기위해 es6버전에서 let과 const라는 키워드가 새로 추가되었는데.
이 둘은 var와 다르게 'Function scope'가 아닌 'Block scope'로 동작하며 hoisting또한 되지않는다.
let과 const의 차이는 let은 변수이고, const는 상수라는 점이다.
이 말은 let은 선언한 뒤 값의 재할당이 가능하지만 const는 처음 선언하고난 후 재할당이 불가능하다.
재할당을 하려고 할 시에는 `TypeError: Assignment to constant variable.` 이러한 TypeError를 마주치게 된다.
이렇게 개편된 키워드인 let과 const를 사용해서 위의 var의 문제점에서 들어본 예시를 다시 구현해 본다면 이러한 에러들을 마주치게 된다.

1. `SyntaxError: Identifier 'name' has already been declared`

```js
let name = "상훈";
let name = "율리";
```

2. `ReferenceError: Cannot access 'name' before initialization`

```js
console.log(name);

const name = "상훈";
```

3. `ReferenceError: name is not defined`

```js
if (isVar) {
  const name = "상훈";
}
console.log(name);
```
