---
nav:
  title: Components
  path: /components
---

## RangeNumber

Demo:

```tsx
import React, { useState } from 'react';
import { RangeNumber } from 'scm-cms-component';

export default () => {
  const [rvalue, setRValue] = useState({min:1, max:10}); 
  const handleSetValue = (value) => {
    setRValue(value);
  }
  return (<RangeNumber value={rvalue} bigMax={10} bigMin={8} precision={2} onChange={handleSetValue} />);
};
```

### 参数说明

| 参数      | 说明                                     | 类型            | 默认值 |
| --------- | ---------------------------------------- | --------------- | ------ |
| bigMax    | 右侧输入框输入最大值                     | number          | -      |
| bigMinx   | 右侧输入框最小                           | number          | -      |
| precision | 输入框输入精度，同AntDesigin InputNumber | number          | 0      |
| onChange  | 组件值发生变化回调                       | (event) => void | —      |  |




