import React, {
  memo,
  forwardRef,
} from 'react';
import { InputNumberProps } from 'antd/lib/input-number';
import { InputNumber } from 'antd';

interface INums {
  min?: number,
  max?: number,
}

interface IProps {
  // 默认值.
  value?: INums;
  // 第二个输入框的最大值.
  bigMax?: number;
  // 第二个输入框的最小值.
  bigMin?: number;
  // 数值精度, 默认为0.
  precision?: number;
  onChange?: (value?: INums) => void;
}

const RangeNumber: React.ForwardRefRenderFunction<any, IProps> = (props: IProps, ref) => {
  const {
    value = {},
    precision = 0,
    onChange,
    bigMax,
    bigMin,
  } = props;
  const { min, max } = value;

  const inputProps: any = {};
  if (bigMin) {
    inputProps.min = bigMin;
  }
  if (bigMax) {
    inputProps.max = bigMax;
  }

  const handleFirstChange: InputNumberProps['onChange'] = (currentValue) => {
    if (onChange) {
      onChange({
        ...value,
        min: currentValue,
      });
    }
  };

  const handleSecondChange: InputNumberProps['onChange'] = (currentValue) => {
    if (onChange) {
      onChange({
        ...value,
        max: currentValue,
      });
    }
  };

  return (
    <span>
      <InputNumber
        value={min}
        precision={precision}
        onChange={handleFirstChange}
      />
      ~
      <InputNumber
        value={max}
        precision={precision}
        onChange={(values: any) => handleSecondChange(values)}
        {...inputProps}
      />
    </span>
  );
};

export default memo(forwardRef(RangeNumber));
