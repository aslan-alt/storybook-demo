import React from "react";

import Button, { ButtonType, ButtonSize } from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <Button>hello</Button>
      <Button disabled>hello</Button>
      <Button btnType="primary" size="sm">
        hello
      </Button>
      <Button
        btnType="danger"
        size="lg"
        onClick={() => {
          alert(111);
        }}
      >
        hello
      </Button>
     <Button
        btnType="link"
        href="http://www.baidu.com"
        target="_blank"
      >
        hello
      </Button>
      <Button disabled btnType="link" href="http://www.baidu.com">
        hello
      </Button>
    </div>
  );
}
export default App;
