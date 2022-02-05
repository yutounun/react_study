export const ColoredMessage = ({ color, children }) => {
  // 引数でpropsを分割代入することでprops.colorなどするのを省略→propsのものとわかりづらくなることも
  const contentStyle = {
    // color: props.color
    color: color
  }
  // これをそのまま表示ではなく、コンポーネントだから下の部分を返さないといけない
  // return <p style={contentStyle}>{props.message}</p>
  return <p style={contentStyle}>{children}</p>
};