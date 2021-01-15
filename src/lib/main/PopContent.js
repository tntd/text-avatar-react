import React, { useEffect, useState, Fragment } from 'react';
import { Input, Select, message, Modal } from 'antd';
import { waveImages, letterMap, colorList } from './constant';

export default props => {
	const { nickname, colorIndex, cardConfig = [], nameWritten, onClick } = props;

	return (
		<div className="popover-content">
			<div
				className='popover-content-header'
				style={{
					backgroundColor: colorList[colorIndex]
				}}
			>
				<div
					className='popover-content-header-wave'
					style={{ backgroundImage: 'url(' + waveImages[colorIndex] + ')' }}
				/>
			</div>
			<div className='popover-content-info'>
				<div
					className='text-avatar'
					style={{
						backgroundColor: colorList[colorIndex],
						cursor: onClick ? 'pointer' : 'default'
					}}
					onClick={() => {
						onClick && onClick();
					}}
				>
					<span>{nameWritten}</span>
				</div>
				<h2>{nickname}</h2>
			</div>
			<div className='popover-content-body'>
				<ul>
					{
						(cardConfig || []).map((item, index) => {
							return (
								<li key={index}>
									<label>{item.label}</label>
									<p>{item.value}</p>
								</li>
							);
						})
					}
				</ul>
			</div>
		</div>
	);
};
