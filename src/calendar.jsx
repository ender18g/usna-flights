import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Box, Flex } from '@chakra-ui/react';

const localizer = momentLocalizer(moment);

const events = [
	{ start: new Date(), end: new Date(), title: 'Some title' },
	{ start: new Date(), end: new Date(), title: 'Some title' }
];

const BigCalendar = (props) => (
	<Flex w={'100vw'} justifyContent={'center'}>
		<Box>
			<Calendar
				localizer={localizer}
				events={events}
				startAccessor="start"
				endAccessor="end"
				views={[ 'month' ]}
				style={{ height: '80vh', width: '95vw' }}
			/>
		</Box>
	</Flex>
);

export default BigCalendar;
