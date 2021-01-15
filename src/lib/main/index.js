import React, { useState, createContext } from 'react';
import { waveImages, letterMap, colorList } from './constant';
import { Avatar, Popover } from 'antd';
import PopContent from './PopContent';

import './index.less';

const Disk = (props) => {
	const {
		nickname = '', isowner = false, size = 32,
		id, account, empStatus,
		trigger = 'hover',
		placement = 'rightTop',
		style = {}, className = {}
	} = props;

	const isChinese = (obj) => {
		let flag = false;
		if ((/[\u4e00-\u9fa5]+/).test(obj)) {
			flag = true;
		}
		return flag;
	};

	const key = (account && account.substr(0, 1)) || 'a';
	const colorIndex = letterMap[key];
	const disabledColor = '#9E9E9E';

	const newNickname = nickname.match(/[^0-9]+/g) && nickname.match(/[^0-9]+/g).length > 0 ? nickname.match(/[^0-9]+/g)[0] : nickname;
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

	return (
		<div
			className="tntx-text-avatar-wrap"
			style={{ ...style }}
		>
			<Popover
				content={
					<PopContent
						colorIndex={colorIndex}
						nameWritten={nameWritten}
						{...props}
					/>
				}
				trigger={trigger}
				placement={placement}
				overlayClassName='tntx-text-avatar-popover-wrap'
			>
				<Avatar
					size={size}
					style={{
						backgroundColor: empStatus === 2 ? disabledColor : colorList[colorIndex],
						verticalAlign: 'middle'
					}}
					{...this.props}
				>
					{nameWritten}
				</Avatar>
			</Popover>
		</div>
	);
};

export default Disk;
