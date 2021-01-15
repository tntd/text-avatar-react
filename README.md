# 资源文件管理


## 安装
```bash
npm i @tntd/disk-react --save
```

## 使用
```jsx
import React from 'react';
import Disk from '@tntd/disk-react';
import { Icon, message } from 'antd';

const { Item } = Disk;

export default props => {
	return (
		<Disk>
			{/* 文件夹 不为空 */}
			<Item
				type='folder'
				empty= {false}
				title='架构文档'
				icon={<Icon type='fire' />}
				onPreview={() => {
					message.info('你点击了预览');
				}}
				onSetting={() => {
					message.info('你点击了设置');
				}}
				onContextMenu={(e) => {
					e.preventDefault();
					e.stopPropagation();
					message.info('你点击了右键');
					console.log('e', e);
				}}
			/>
			{/* 文件夹 为空 */}
			<Item
				type='folder'
				empty= {true}
				title='需求文档'
				icon={<Icon type='fire' />}
			/>
			{/* 文件夹 为空 */}
			<Item
				type='file'
				subType='article'
				title='如何通过TNT构建强大的前端生态'
			/>
			{/* link */}
			<Item
				type='link'
				subType='modal'
				title="语雀官网"
				logoSrc="https://s3.ax1x.com/2020/12/26/rhYxdx.png"
			/>
		</Disk>
	);
};
```
