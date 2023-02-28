import React from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import Display from '../Display/Display';

const Tabs = (context) => {
	const { setState, state } = context;
	const { filter } = state;

	return 	<Box>
		<TabContext value={ filter }>
			<TabList onChange={ (event, value) => setState({
				...state,
				filter: value,
			}) }
			>
				<Tab label="All" value="all"/>
				<Tab label="Active" value="active"/>
				<Tab label="Completed" value="completed"/>
			</TabList>
			<TabPanel value={ filter }><Display { ...context }/></TabPanel>
		</TabContext>
	</Box>;
};

export default Tabs;
