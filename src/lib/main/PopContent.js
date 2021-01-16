import React from 'react';
import { waveImages } from './constant';

export default props => {
	const { nickname, cardConfig = [], nameWritten, onClick, currentColors, colorIndex, colorBg } = props;

	return (
		<div className="popover-content">
			<div
				className='popover-content-header'
				style={{
					backgroundColor: currentColors[0]
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
						backgroundColor: currentColors[0],
						backgroundImage: colorBg,
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
