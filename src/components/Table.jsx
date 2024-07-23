import React,{ forwardRef} from 'react';
import "./Table.css";
import { FaRegClock, FaTrophy} from "react-icons/fa";

export const Table = forwardRef(({ rows, newEntryId }, ref) => {
    return (
        <div className='table-wrapper' ref={ref}>
            <table className='table' >
                <thead>
                    <tr>
                        <th className='expand-first'><FaTrophy /></th>
                        <th className='expand-second'>Name</th>
                        <th className='expand-third'>Time<span className='label'><FaRegClock /></span></th>
                    </tr>
                </thead>
                <tbody>
                {
                    rows.map((row, index) => (
                        <tr key={`${row.id}-${index}`}className={row.id === newEntryId ? 'new-entry' : ''}>
                            <td>{index + 1}</td>
                            <td>{row.name}</td>
                            <td>{row.time}</td>
                        </tr>
              ))}
                    
                </tbody>
            </table>
        </div>
        
    )
});