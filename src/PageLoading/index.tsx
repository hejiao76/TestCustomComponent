import React from 'react';
import { LoadingComponentProps } from 'react-loadable';
import {
  Spin,
  Button,
  Result,
  Icon,
} from 'antd';

export default function Loading(props: LoadingComponentProps) {
  const {
    isLoading,
    error,
    pastDelay,
    timedOut,
  } = props;

  if (isLoading && pastDelay) {
    return <Spin className="spin-center" />;
  }

  if (error || timedOut) {
    return (
      <Result
        icon={<Icon type="frown" />}
        title="网络不太好～"
        subTitle="可能正在发布新版本系统或您的网络出现问题，请重试，多次重试失败请联系技术部门。"
        extra={(
          <Button onClick={() => window.location.reload()} type="primary">
            重试
          </Button>
        )}
      />
    );
  }

  return null;
}
