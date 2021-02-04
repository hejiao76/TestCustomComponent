---
nav:
  title: Components
  path: /components
---

## RangeNumber

Demo:

```tsx
import React, { useState } from 'react';
import { ImgShow } from 'scm-cms-component';

export default () => {
  return (<ImgShow src= "http://mida-scm-public.canguanwuyou.com/sku-images/27586-1.jpeg" width="100" hoverEnlarge />);
};
```

### 参数说明

| 参数         | 说明              | 类型    | 默认值 |
| ------------ | ----------------- | ------- | ------ |
| src          | 图片地址          | string  | -      |
| width        | 图片宽度          | number  | 34     |
| height       | 图片高度          | number  | -      |
| hoverEnlarge | 鼠标移入是否放大  | boolean | false  |
| isPrivate    | 是否私有图片      | boolean | false  |
| token        | 私有图片设置token | string  | -      |




