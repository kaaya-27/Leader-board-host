import React from 'react';
import "./Table.css";
import { FaRegClock, FaTrophy} from "react-icons/fa";

export const Table = ({ rows }) => {
    return (
        <div className='table-wrapper'>
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
                    rows.map((row) => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.time}</td>
                        </tr>
              ))}
                    
                </tbody>
            </table>
        </div>
        
    )
};