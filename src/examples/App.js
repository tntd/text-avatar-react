import React from 'react';
import TextAvatar from '../lib';
import { Icon, message } from 'antd';
import 'antd/dist/antd.css';

export default props => {
	const user = {
		id: 415,
		account: "xu.zhang",
		empStatus: 1,
		nickname: "张旭"
	};
	return (
		<TextAvatar
			{...user}
		/>
	);
};
