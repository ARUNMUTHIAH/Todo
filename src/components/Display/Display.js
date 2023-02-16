import { Box } from '@mui/material';
import React from 'react';
import Delete from '../Button/Delete';

const Display = (context) => {
	const { state: { todo }, setState } = context;

	return (
		<Box>
			{todo.map((data, key) =>
				<Box
					key={ key }
					class="display"
					onClick={ () => setState((state) => ({
						...state,
						inputValue: data.value,
					})) }
				>{data.value}
					<Delete { ...{ ...context, data: data.id } }/>
				</Box>)}
		</Box>);
};

export default Display;
