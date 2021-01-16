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

## API

### 组件API
|参数		    |数据类型			  |是否必填			|默认值			|备注						 |
|  ---- 	   |  ----  			| ----  		|  ----  		| ----						|
| nickname	   | String 			| 是 			| - 			| 用户昵称 					  |
| account 	   | String 			| 是 			| -				| 用户账号，用来判断使用颜色 	 |
| showPopover  | boolean 		    | 否			| true			| 是否显示popover浮层 	       |

### 浮层API
|参数		  |数据类型			  |是否必填			|默认值			|备注						 |
|  ---- 	 |  ----  			| ----  		|  ----  		| ----						|
| trigger	 | String 			| 否 			| hover 		| 浮层详情显示方式，同Popover   |
| placement 	| String 	    | 否 			| rightTop   	| 浮层详情显示位置，同Popover 	 |
| cardConfig  | Array 			| 是 			| []			| 卡片内的详情配置 				|
| onClick 	 | function 		| 否 			| -				| 卡片内的头像点击			 	|
