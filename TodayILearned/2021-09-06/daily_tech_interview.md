## 프로젝트에서 Object Relational Mapping(ORM)을 사용하는 이유

먼저 현재 개발에 사용하고 있는 언어만으로 데이터베이스에 접근하고 관리할 수 있기 때문에 생산성이 올라간다.
또한 사용중인 언어와 관계형 데이터베이스의 데이터를 다루는 방식이 다름에서 오는 문제를 해결하면서 데이터에 대한 가독성도 올라가게 된다.

또 Raw Query를 작성하지않고, 객체지향적으로 데이터베이스에 접근하게 되면서 오타와 같은 Human error를 줄일 수 있다는 장점도 있다.
물론 프로젝트를 시작할 때에 모델링이나 이미그레이션등 초기 구축에 시간비용이 많이 들지만, 위의 장점들과 데이터베이스에 변경이 있을 시 리스크와 소요시간이 적다 라는 장점이 있기때문에 ORM을 사용한다.

ORM의 단점으로는 서비스가 복잡해지면 복잡해질 수록 초기설계 비용이나, 데이터 접근의 복잡도와 번거로움이 기하급수적으로 증가하고,
설계가 잘못되었을 시 속도저하 및 데이터베이스의 일관성을 무너뜨리는 경우가 생긴다.

따라서 ORM을 사용하더라도, 복잡한 쿼리의 경우, 오히려 Raw Query로 작성하는게 더욱 직관적이고 효율적일 수 있다.