# 同盾UED文字头像组件


## 安装
```bash
npm i @tntx/text-avatar-react --save
```

## 使用
```jsx
import React from 'react';
import { message } from 'antd';
import TextAvatar from '@tntx/text-avatar-react';

export default props => {
	const user = {
	    id: 10,
		account: 'xiaoming.wang',
		empStatus: 1,
		nickname: '王小明'	 
	};

	const cardConfig = [
		{
			label: '部门',
			value: '企业技术部-PaaS-UED'
		},
		{
			label: '邮箱',
			value: 'xiaoming.wang@tongdun.net'
		}
	];

	return (
		<TextAvatar
			{...user}
			cardConfig={cardConfig}
			onClick={() => {
				message.info('跳转链接');
			}}
		/>
	);
};
```
