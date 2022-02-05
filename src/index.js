import ReactDOM from "react-dom";
// exportされたAppコンポーネントを./App.jsから読み取る
import { App } from "./App";

// rootはpublic/index.htmlの<div id="root">を指す
ReactDOM.render(<App />, document.getElementById("root"));