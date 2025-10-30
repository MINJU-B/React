## (10월 30일)⚠️ h1에 class가 적용되지 않는 오류

### 📍 문제 현상
`App.js`에서 아래와 같이 CSS Module을 import했지만,  
`<h1>` 태그에 스타일이 적용되지 않음.

```jsx
import styles from "./App_modules.css";

function App() {
  return (
    <div>
      <h1 className={styles.h1_title}>Hello, React!</h1>
    </div>
  );
}
```

### 🚨 원인

React에서 CSS Module은 특정한 파일명 규칙을 따라야 함.
현재 파일명은 App_modules.css 이므로 React가 CSS Module로 인식하지 못함.

❌ 잘못된 파일명: App_modules.css
✅ 올바른 파일명: App.module.css

React는 .module.css 확장자를 가진 파일만
CSS Module로 처리하며, import styles from ... 구문을 통해
객체 형태로 클래스를 가져올 수 있음.

### 🧠 요약
|구분	|내용|
|----|----|
|문제	|CSS Module 파일명을 잘못 작성 (App_modules.css)|
|원인	|React가 .module.css 파일만 CSS Module로 인식함|
|해결	|파일명을 App.module.css로 변경 후 다시 import|
|결과	|styles.h1_title이 정상적으로 인식되어 스타일 적용 완료|
