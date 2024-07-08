import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Currency() {
    const [currency, setCurrency] = useState('USD'); // State to store currency code
    const [exchangeRate, setExchangeRate] = useState(null); // State to store exchange rate

    useEffect(() => {
        axios.get(`https://open.er-api.com/v6/latest/${currency}`)
            .then((res) => {
                console.log(res.data);
                setExchangeRate(res.data.rates); // Assuming you want to store rates
            }).catch((err) => {
                console.log(err);
            });
    }, [currency]); // Dependency on 'currency' state, so it updates when 'currency' changes

    const handleCurrencyChange = (e) => {
        setCurrency(e.target.value.toUpperCase()); // Ensure input is uppercase
    };

    return (
        <div>
            <h2>Exchange Rates for {currency}</h2>
            <select
                value={currency}
                onChange={handleCurrencyChange}
            >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="INR">INR</option>
            </select>
            <div>
                {exchangeRate && (
                    <ul>
                        {Object.keys(exchangeRate).map((key) => (
                            <li key={key}>
                                {key}: {exchangeRate[key]}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Currency;
