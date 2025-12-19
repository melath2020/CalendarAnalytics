import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDate } from '../redux/calendarSlice';
import { formatDateKey } from '../utils/dateUtils';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarView = ({ openModal }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.calendar.data);
  const events = Object.keys(data).map((dateKey) => {
    const date = moment(dateKey, 'DD-MM-YYYY').toDate();

    return {
      title: 'Data Available',
      start: date,
      end: date,
      allDay: true,
    };
  });

  const handleSelect = (date) => {
    const key = formatDateKey(date);
    dispatch(setSelectedDate({ date: key }));
    openModal();
  };
  return (
    <div className='max-w-6xl mx-auto bg-white rounded-xl shadow-md p-10'>
      <Calendar
        localizer={localizer}
        events={events}
        selectable='ignoreEvents'
        startAccessor='start'
        endAccessor='end'
        views={['month', 'week', 'day']}
        style={{ height: 500, margin: '50px' }}
        dayPropGetter={(date) => {
          const key = formatDateKey(date);
          if (data[key]) {
            return { className: 'has-data' };
          }
        }}
        onSelectSlot={(slotInfo) => handleSelect(slotInfo.start)}
        onSelectEvent={(event) => handleSelect(event.start)}
        // onSelectSlot={(slotInfo) => {
        //   const key = formatDateKey(slotInfo.start);
        //   dispatch(setSelectedDate({ date: key }));

        //   openModal();
        // }}
      />
    </div>
  );
};

export default CalendarView;
