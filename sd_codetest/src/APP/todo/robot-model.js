import React from 'react';
import PropType from 'prop-types';

export function RobotModel(props){
	const RobotAnswer = props.items.map((items, type) =>(
		<b>{if(type == "start"){
			<div>"Hello "{items.name}", Welcome to the Government Service! How can I help you today"</div>
		}else if(type == "question"){
			<div>Sure, here is the link you are after <a herf = "http://govt.org.au/rates">"Government Service"</a></div>}
	}</b>
	));

	return (
        <p>
            Robot: {RobotAnswer}
        </p>
    );
}
