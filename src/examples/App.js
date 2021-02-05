import React from 'react';
import TextAvatar from '../lib';
import { message, Popover, Avatar } from 'antd';
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
			account: 'bonggang.liang',
			empStatus: 1,
			nickname: '梁洪刚'
		},
		{
			id: 415,
			account: 'cun.zhang',
			empStatus: 1,
			nickname: '张俊'
		},
		{
			id: 415,
			account: 'dei.ze',
			empStatus: 1,
			nickname: '周泽飞'
		},
		{
			id: 415,
			account: 'eun.wang',
			empStatus: 1,
			nickname: '汪伦'
		},
		{
			id: 415,
			account: 'fun.wang',
			empStatus: 1,
			nickname: '汪伦',
			linearGradient: true
		},
		{
			id: 415,
			account: 'gun.wang',
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
						<Popover
							content={<div>hi</div>}
							title="Title"
							onMouseEnter={(e) => {
								console.log(e);
							}}
						>
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
								// showPopover={false}
								// linearGradient={true}
								{...item}
							/>
						</Popover>

					);
				})
			}
		</div>
	);
};
