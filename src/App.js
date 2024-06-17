// App.js
import React, { useState } from 'react';
import './styles.css';
import CompanyDropdown from './components/CompanyDropdown';
import ContactRemarks from './components/ContactRemarks';
import Filters from './components/Filters';

const App = () => {
    const [selectedCompany, setSelectedCompany] = useState('');
    const [remarks, setRemarks] = useState([]);
    const [filter, setFilter] = useState('all');

    // Mock data for companies and remarks
    const companies = [
        { id: 1, name: 'Company A' },
        { id: 2, name: 'Company B' },
        { id: 3, name: 'Company C' },
    ];

    const remarksData = {
        1: [{ date: '2024-06-01', remark: 'First Remark', status: 'Confirmed' }],
        2: [],
        3: [{ date: '2024-06-02', remark: 'Second Remark', status: 'Paused' }],
    };

    const handleSelectCompany = (companyId) => {
        setSelectedCompany(companyId);
        setRemarks(remarksData[companyId] || []);
    };

    const handleChangeFilter = (filterValue) => {
        setFilter(filterValue);
    };

    const filteredCompanies = companies.filter(company => {
        if (filter === 'all') return true;
        if (filter === 'withRemarks') return remarksData[company.id] && remarksData[company.id].length > 0;
        if (filter === 'withoutRemarks') return !remarksData[company.id] || remarksData[company.id].length === 0;
        return true;
    });

    return (
        <div className="container">
            <h1>Contact Remarks Management</h1>
            <Filters filter={filter} onChangeFilter={handleChangeFilter} />
            <CompanyDropdown companies={filteredCompanies} onSelectCompany={handleSelectCompany} />
            {selectedCompany && <ContactRemarks remarks={remarks} />}
        </div>
    );
};

export default App;
