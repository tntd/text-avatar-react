import React, { Fragment, ComponentProps } from 'react';
import { getColors } from './constant';
import { Avatar, Popover, TooltipProps } from 'antd';
import PopContent from './PopContent';

import './index.less';

export interface TextAvatarPropsType extends ComponentProps<'div'> {
  id?: any;
  nickname: string;
  size?: number;
  account?: string;
  empStatus?: number;
  randomColor?: boolean;
  theme?: 'default' | 'plant';
  cardConfig: { label: string; value: string }[];
  trigger?: 'hover' | 'click';
  placement?:
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight'
    | 'leftTop'
    | 'leftBottom'
    | 'rightTop'
    | 'rightBottom';
  showPopover?: boolean;
  linearGradient?: boolean;
  sameAsChildren?: boolean;
}
const Main = (props: TextAvatarPropsType) => {
  const {
    children,
    nickname = 'unknown',
    size = 32,
    account,
    empStatus = 1,
    trigger = 'hover',
    randomColor = true,
    theme = 'default',
    placement = 'rightTop',
    style = {},
    showPopover = true,
    linearGradient = false,
    sameAsChildren = true,
  } = props;

  const isChinese = (obj: any) => {
    let flag = false;
    if (/[\u4e00-\u9fa5]+/.test(obj)) {
      flag = true;
    }
    return flag;
  };

  const key = (account && account.substr(0, 1)) || 'a';
  const disabledColor = '#9E9E9E';

  const newNickname =
    nickname.match(/[^0-9]+/g) && (nickname.match(/[^0-9]+/g) || []).length > 0
      ? (nickname.match(/[^0-9]+/g) || ['unknown'])[0]
      : nickname;
  const nameLen = newNickname.length;
  let nameWritten = newNickname;
  if (nameLen > 2) {
    // 如果用户输入的姓名大于等于3个字符，截取后面两位
    const first = newNickname.substring(0, 1);
    if (isChinese(first)) {
      nameWritten = newNickname.substring(nameLen - 2);
    } else {
      // 截取前面的两个英文字母
      nameWritten = newNickname.substring(0, 2).toUpperCase();
    }
  }

  let { currentColors, colorIndex } = getColors(key, empStatus, randomColor, theme);
  let colorBg = linearGradient
    ? `linear-gradient(to bottom right,${currentColors[0]},${currentColors[1]})`
    : null;

  return (
    <div className="tntx-text-avatar" style={{ ...style }}>
      {showPopover && (
        <Popover
          content={
            <PopContent
              colorIndex={colorIndex}
              currentColors={currentColors}
              colorBg={colorBg}
              nameWritten={nameWritten}
              sameAsChildren={sameAsChildren}
              {...props}
            />
          }
          trigger={trigger}
          placement={placement}
          overlayClassName="tntx-text-avatar-popover"
        >
          {children ? (
            children
          ) : (
            <Avatar
              size={size}
              style={{
                backgroundColor: empStatus === 2 ? disabledColor : currentColors[0],
                backgroundImage: colorBg || '',
                verticalAlign: 'middle',
                cursor: 'default',
              }}
            >
              {nameWritten}
            </Avatar>
          )}
        </Popover>
      )}
      {!showPopover && (
        <Fragment>
          {children ? (
            children
          ) : (
            <Avatar
              size={size}
              style={{
                backgroundColor: empStatus === 2 ? disabledColor : currentColors[0],
                backgroundImage: colorBg || '',
                verticalAlign: 'middle',
                cursor: 'pointer',
              }}
            >
              {nameWritten}
            </Avatar>
          )}
        </Fragment>
      )}
    </div>
  );
};

export default Main;
