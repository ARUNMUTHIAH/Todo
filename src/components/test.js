import React from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

const TestTab = () =>
	<Box>
		<TabContext value="2">
			<TabList>
				<Tab label="value1" value="1"/>
				<Tab label="value2" value="2"/>
				<Tab label="value3" value="3"/>
			</TabList>
			<TabPanel value="1">tab1</TabPanel>
			<TabPanel value="2">tab2</TabPanel>
			<TabPanel value="3">tab3</TabPanel>
		</TabContext>
	</Box>;

export default TestTab;
