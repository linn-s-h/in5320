import React from "react";
import "./App.css";

function Pagination({ pageNumber, totalPages, onPageChange }) {
    return (
        <div className="Pagination">
            {pageNumber > 1 && (
                <button onClick={() => onPageChange(pageNumber - 1)}>⬅</button>
            )}
            <span className="PageInfo">
                Page {pageNumber} of {totalPages}
            </span>
            {pageNumber < totalPages && (
                <button onClick={() => onPageChange(pageNumber + 1)}>➡</button>
            )}
        </div>
    );
}

export default Pagination