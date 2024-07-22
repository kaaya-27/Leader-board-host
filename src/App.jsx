import { useState, useEffect, useRef } from 'react';
import React from 'react';
import { Modal } from './components/Modal';
import { Table } from './components/Table';
import ImageSlider from './components/Slider';
import './App.css';
import { convertTimeToMilliSeconds } from './utils';

  function App() {
    const [modalOpen, setModalOpen ] = useState(false);
    
    const [rows, setRows] = useState([
      { id: 1, name: 'Tom Holland', time: '00:23:45' },
      { id: 2, name: 'Pip-Fitz-Amobi', time: '00:25:35' },
      { id: 3, name: 'Jermy Ashleigh', time: '00:30:30' },
      { id: 4, name: 'Andie Bell', time: '00:31:00' },
      { id: 5, name: 'Edward Ward', time: '00:37:15' },
      { id: 6, name: 'Naomi Hastings', time: '00:40:42' },
      { id: 7, name: 'Chloe Burch', time: '00:45:28' },
      { id: 8, name: 'Nat da Silva', time: '01:02:46' },
      { id: 9, name: 'Lowen Ashleigh', time: '01:04:10' },
      { id: 10, name: 'Sal Singh', time: '02:05:26' },
      { id: 11, name: 'Lucas Smith', time: '00:23:15' },
      { id: 12, name: 'Emma Brown', time: '00:26:05' },
      { id: 13, name: 'Olivia Davis', time: '00:28:30' },
      { id: 14, name: 'Liam Wilson', time: '00:32:40' },
      { id: 15, name: 'Ava Johnson', time: '00:35:50' },
      { id: 16, name: 'Sophia Martinez', time: '00:38:25' },
      { id: 17, name: 'Noah Lee', time: '00:40:30' },
      { id: 18, name: 'Mia White', time: '00:42:15' },
      { id: 19, name: 'Isabella Clark', time: '00:45:05' },
      { id: 20, name: 'Ethan Harris', time: '00:47:20' },
      { id: 21, name: 'James Lewis', time: '00:50:10' },
      { id: 22, name: 'Aiden Walker', time: '00:52:35' },
      { id: 23, name: 'Charlotte Young', time: '00:54:50' },
      { id: 24, name: 'Mason King', time: '00:56:15' },
      { id: 25, name: 'Amelia Scott', time: '01:00:05' },
      { id: 26, name: 'Oliver Wright', time: '01:02:45' },
      { id: 27, name: 'Harper Green', time: '01:05:10' },
      { id: 28, name: 'Ella Adams', time: '01:07:25' },
      { id: 29, name: 'Jacob Robinson', time: '01:10:30' },
      { id: 30, name: 'Lily Baker', time: '01:12:45' },
      { id: 31, name: 'Benjamin Harris', time: '01:15:00' },
      { id: 32, name: 'Grace Carter', time: '01:17:10' },
      { id: 33, name: 'Jackson Turner', time: '01:20:30' },
      { id: 34, name: 'Chloe Martinez', time: '01:22:45' },
      { id: 35, name: 'Lucas Thompson', time: '01:25:00' },
      { id: 36, name: 'Mia Wilson', time: '01:27:10' },
      { id: 37, name: 'William Anderson', time: '01:30:25' },
      { id: 38, name: 'Evelyn Thomas', time: '01:32:40' },
      { id: 39, name: 'Henry Carter', time: '01:35:55' },
      { id: 40, name: 'Zoe Harris', time: '01:38:10' },
      { id: 41, name: 'Matthew Nelson', time: '01:40:20' },
      { id: 42, name: 'Natalie Harris', time: '01:42:35' },
      { id: 43, name: 'Aiden Carter', time: '01:45:00' },
      { id: 44, name: 'Lila Rogers', time: '01:47:10' },
      { id: 45, name: 'Jayden Murphy', time: '01:50:25' },
      { id: 46, name: 'Sarah Lewis', time: '01:52:40' },
      { id: 47, name: 'David Clark', time: '01:55:05' },
      { id: 48, name: 'Emily Young', time: '01:57:20' },
      { id: 49, name: 'Ryan Davis', time: '02:00:30' },
      { id: 50, name: 'Hannah Walker', time: '02:02:45' },
    ]);

    const tableRef = useRef(null);

    const handleSubmit = (newRow) => {

      const newRows = [...rows, newRow];
      const sortedRows = newRows.sort((a, b) => convertTimeToMilliSeconds(a.time) - convertTimeToMilliSeconds(b.time));
      setRows(sortedRows);
      setModalOpen(false);
      setTimeout(() => scrollToNewRow(newRow), 300); 
    };

    const scrollToNewRow = (newRow) => {
      const index = rows.findIndex(row => row.id === newRow.id);
      if (tableRef.current && index !== -1) {
        const rowElement = tableRef.current.querySelectorAll('tbody tr')[index];
        if (rowElement) {
          rowElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    };

  
    useEffect(() => {
      const sortedRows = [...rows].sort((a, b) => convertTimeToMilliSeconds(a.time) - convertTimeToMilliSeconds(b.time));
      setRows(sortedRows);
    }, [rows]);


    return (
    
    <div className='App'>
      <div className='navbar'>
        <h1>Leaderboard</h1>
      </div>
      <section className='table-section'>
        <Table rows={rows} ref={tableRef}/>
        <button className='btn' onClick={()=> setModalOpen(true)}>AddScore</button>
        {modalOpen && <Modal closemodal={() => {
          setModalOpen(false); 
        }}
        onSubmit={handleSubmit}
        />}
      </section>
        <section className='scroll-section' >
            <h2>Scroll Down for Smooth Scrolling</h2>
            <div className='scroll-content'>
              <ImageSlider />
            </div> 
            <footer className='footer'>
              <div className='marquee'>Get Your name on Leaderboard with exciting prizes!</div>
            </footer>
        </section>
        
    </div>
    
    
    );
  }


export default App;

