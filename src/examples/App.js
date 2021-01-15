import React from 'react';
import TextAvatar from '../lib';
import { Icon, message } from 'antd';
import 'antd/dist/antd.css';

export default props => {
	const user = {
		id: 415,
		account: 'yunting.bian',
		empStatus: 1,
		nickname: '卞云庭'
	};

	const userList = [
		{
			id: 415,
			account: 'bo.liu',
			empStatus: 1,
			nickname: '柳波'
		},
		{
			id: 415,
			account: 'honggang.liang',
			empStatus: 1,
			nickname: '梁洪刚'
		},
		{
			id: 415,
			account: 'jun.zhang',
			empStatus: 1,
			nickname: '张俊'
		},
		{
			id: 415,
			account: 'fei.ze',
			empStatus: 1,
			nickname: '周泽飞'
		},
		{
			id: 415,
			account: 'lun.wang',
			empStatus: 1,
			nickname: '汪伦'
		}
	];
	const cardConfig = [
		{
			label: '部门',
			value: '企业技术部-PaaS-UED'
		},
		{
			label: '邮箱',
			value: 'yunting.bian@tongdun.net'
		}
	];
	return (
		<div
			style={{
				width: '400px',
				height: '200px',
				margin: '200px auto'
			}}
		>
			{
				userList.map(item => {
					return (
						<TextAvatar
							key={item.id}
							{...item}
							cardConfig={cardConfig}
							style={{
								marginRight: '10px'
							}}
							onClick={() => {
								message.info('跳转链接');
							}}
						/>
					);
				})
			}
		</div>
	);
};
