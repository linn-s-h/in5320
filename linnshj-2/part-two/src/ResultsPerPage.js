import React from "react";

function ResultsPerPage({ perPage, onChange }) {
    return (
        <div className="ResultsPerPage">
            <label htmlFor="perPageSelect">Results per page: </label>
            <select
                id="perPageSelect"
                value={perPage}
                onChange={(e) => onChange(Number(e.target.value))}
            >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
            </select>
        </div>
    );
}

export default ResultsPerPage;