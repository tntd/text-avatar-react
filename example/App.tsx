import React from 'react';
// import { Button, Divider } from '../src';
import { TextAvatar } from '../src';
// import { TextAvatar } from '../dist';

export default () => {
  const userInfo = { id: 430, account: 'lun.wang', empStatus: 1, nickname: '汪伦' };
  const cardConfig = [
    {
      label: '部门',
      value: '企业技术部-PaaS-UED',
    },
    {
      label: '邮箱',
      value: 'yunting.bian@tongdun.net',
    },
  ];
  return (
    <div style={{ width: '800px', margin: '30px auto' }}>
      <h1>Vite + React 创建组件库</h1>
      <TextAvatar {...userInfo} cardConfig={cardConfig} />
    </div>
  );
};
