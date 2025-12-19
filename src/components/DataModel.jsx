// src/components/DataModal.jsx
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import BarChartView from './BarChartView';

Modal.setAppElement('#root'); // Required for accessibility

const DataModal = ({ isOpen, closeModal }) => {
  const { selectedDate, selectedData } = useSelector((state) => state.calendar);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel='Date Data Modal'
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1000,
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
        },
      }}>
      <h2>Selected Date: {selectedDate}</h2>

      {!selectedData && <p>No data found for the selected date.</p>}

      {selectedData && <BarChartView data={selectedData} />}

      <button onClick={closeModal} style={{ marginTop: '20px' }}>
        Close
      </button>
    </Modal>
  );
};

export default DataModal;
