import React, {useState} from 'react';

export default function SearchCardForm({onSearch}) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="search-form">
            <input
                type="text"
                placeholder="Search Term"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="action-btn" onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};
