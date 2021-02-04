import React, { useState } from 'react';
import classnames from 'classnames';
// import { useSelector } from 'react-redux';
import { Icon } from 'antd';
import DefaultNoImage from '@/assets/images/default-no-image.png';
import './index.scss';

interface IProps {
  className?: string;
  // 图片地址.
  src: string;
  // 图片alt.
  alt?: string;
  // 图片宽度.
  width?: number;
  // 图片高度.
  height?: number;
  // hover时，是否放大.
  hoverEnlarge?: boolean;
  // 是否为 私有图片, 默认 为否.
  isPrivate?: boolean;
  token?: string;
}

const ImgShow: React.FC<IProps> = (props) => {
  const {
    src,
    width = 34,
    height,
    className,
    alt = '图片',
    hoverEnlarge = false,
    isPrivate = false,
    token = '',
  } = props;
  const [isLoaded, setIsLoaded] = useState(false);
  const newSrc = isPrivate
    ? `//${window.location.host}/b/api/v1/infrastructure/qiniu/get-file?url=${src}&authtoken=${token}` : src;

  return (
    <a
      href={newSrc}
      target="_blank"
      rel="noopener noreferrer"
      role="button"
      aria-hidden
    >
      <Icon
        type="loading"
        // 初始化，显示图片loading动画.
        className={classnames(isLoaded ? 'img-show__hide' : 'img-show__loading')}
        style={{ width, height }}
      />
      <img
        alt={alt}
        className={classnames(
          !isLoaded && 'img-show__hide', // 初始化，隐藏图片占位.
          hoverEnlarge && 'enlarge-table-img',
          className,
        )}
        width={width}
        height={height}
        src={newSrc || DefaultNoImage}
        onLoad={() => setIsLoaded(true)} // 加载完成，显示图片.
        onError={(event: any) => {
          // 图片加载失败，默认显示  默认图片.
          event.persist();
          event.target.src = DefaultNoImage; // eslint-disable-line no-param-reassign
        }}
      />
    </a>
  );
};

export default React.memo(ImgShow);
