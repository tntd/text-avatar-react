import React from 'react';
import TextAvatar from '../lib';
import { message, Popover } from 'antd';
import 'antd/dist/antd.css';

export default () => {

	const userList = [
		{
			id: 415,
			account: 'ao.liu',
			empStatus: 2,
			nickname: '王小明',
			linearGradient: true
		},
		{
			id: 415,
			account: 'ao.liu',
			empStatus: 1,
			nickname: '王小明',
			linearGradient: true
		},
		{
			id: 415,
			account: 'b.liu',
			empStatus: 1,
			nickname: '桑桑',
			linearGradient: true
		},
		{
			id: 415,
			account: 'c.liang',
			empStatus: 1,
			nickname: '梁洪刚'
		},
		{
			id: 415,
			account: 'd.zhang',
			empStatus: 1,
			nickname: '张俊'
		},
		{
			id: 415,
			account: 'e.ze',
			empStatus: 1,
			nickname: '周泽飞'
		},
		{
			id: 415,
			account: 'f.wang',
			empStatus: 1,
			nickname: '汪伦'
		},
		{
			id: 415,
			account: 'g.wang',
			empStatus: 1,
			nickname: '汪伦',
			linearGradient: true,
			sameAsChildren: false
		},
		{
			id: 415,
			account: 'h.wang',
			empStatus: 1,
			nickname: '汪伦',
			linearGradient: true
		},
		{
			id: 415,
			account: 'i.wang',
			empStatus: 1,
			nickname: '汪伦',
			linearGradient: true
		}
	];
	const cardConfig = [
		{
			label: '部门',
			value: '企业技术部企业技术部企业技术部-PaaS-UED'
		},
		{
			label: '邮箱',
			value: 'yunting.bian@tongdun.net'
		}
	];
	return (
		<div
			style={{
				width: '100%',
				textAlign: 'center',
				margin: '200px auto'
			}}
		>
			{
				userList.map(item => {
					return (
						<TextAvatar
							size={96}
							key={item.id}
							cardConfig={cardConfig}
							style={{
								marginRight: '10px'
							}}

							onClick={() => {
								message.info('点击头像');
							}}
							theme='plant'
							// randomColor={false}
							// showPopover={false}
							// linearGradient={true}
							{...item}
						>
							{/* hihihi */}
							<img width='40' src='https://sinan.tongdun.me/cdn/bucket/graph/2020112710264265_zefei.jpg' />
						</TextAvatar>
					);
				})
			}
		</div>
	);
};
