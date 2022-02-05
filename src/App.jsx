// 拡張子をjsxにすることでvscodeのhtml補完機能も使えるし、iconもreactになるからコンポーネントは.jsxにする
import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

// index.jsから呼び出せるように、"export"を追加する
export const App = () => {
  // 同じコンポーネント内にJSも書く
  const [num, setNum] = useState(0)
  const onClickButton = () => {
    alert();
    setNum(num + 1);
  }

  // CSSも同じコンポーネントにかける
  const contentPinkStyle = {
    color: "pink"
  }

  return (
  // devで囲んでもいいが省略記法
  <>
    <h1 style={{color:"red"}}>こんにちわ</h1>
    {/* コンポーネントに渡したいものを追加/テキストメッセージはchildren使うといい */}
    <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
    <p style={contentPinkStyle}>yahoo</p>
    <button onClick={onClickButton}>button</button>
    {num}
  </>
  )
};