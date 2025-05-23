import React, { useState } from "react";
import "./ProductActions.css";

const ProductActions = () => {
    const [selectedMonth, setSelectedMonth] = useState(24);
    const months = [3, 6, 12, 18, 24];

    return (
        <div className="product1">
            {/* Oylar */}
            <div className="month-buttons">
                {months.map((month) => (
                    <button
                        key={month}
                        className={`month-button ${selectedMonth === month ? "selected" : ""
                            }`}
                        onClick={() => setSelectedMonth(month)}
                    >
                        {month} oyigа
                    </button>
                ))}
            </div>

            {/* Alif nasiya */}
            <div className="limit-box">
                <div className="limit-text">Akkauntingizga kiring</div>
                <div className="limit-bold">Limitingizni bilib oling</div>
            </div>
        </div>
    );
};

export default ProductActions;
