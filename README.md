Resize component

同步获取组件的尺寸

```js
import React from "react";
import useComponentResize from "packages/use-component-resize";

export default () => {
  // 间隔30ms获取组件尺寸
  const [boxRef, boxSize] = useComponentResize(30);

  return (
    <div>
      <div
        ref={boxRef}
        style={{ width: "50vw", height: "50vh", backgroundColor: "#f55" }}
      />
      <div>{JSON.stringify(boxSize)}</div>
    </div>
  );
};
```
