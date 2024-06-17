// ContactRemarks.jsx
import React, { useState } from 'react';

const ContactRemarks = ({ remarks }) => {
    const [remark, setRemark] = useState('');
    const [status, setStatus] = useState('');

    const handleAddRemark = () => {
        // Add logic to handle adding remark
    };

    return (
        <div className="contact-remarks">
            <h2>Contact Remarks</h2>
            <div>
                <textarea 
                    value={remark} 
                    onChange={(e) => setRemark(e.target.value)} 
                    placeholder="Enter Remark" 
                />
                <input 
                    value={status} 
                    onChange={(e) => setStatus(e.target.value)} 
                    placeholder="Enter Status" 
                />
                <button onClick={handleAddRemark}>Add Remark</button>
            </div>
            <div className="remarks-list">
                {remarks.map((r, index) => (
                    <div key={index}>
                        <p>Date: {r.date}</p>
                        <p>Remark: {r.remark}</p>
                        <p>Status: {r.status}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactRemarks;
