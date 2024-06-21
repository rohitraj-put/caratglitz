import React from 'react';
import CountUp from 'react-countup';

function AnimatedNumber() {
    const counters = [
        { end: 1000, label: 'Customers' },
        { end: 800, label: 'Products' },
        { end: 125, label: 'Stores' },
    ];

    return (
        <div className="count_container">
            <div className="count_up">
                {counters.map((counter, index) => (
                    <div key={index} className="count_item">
                        <CountUp
                            className="order-first text-5xl font-semibold tracking-tight text-white sm:text-6xl"
                            start={0}
                            end={counter.end}
                            suffix="+"
                            duration={5}
                        />
                        <p className="text-2xl font-bold text-center tracking-tight text-white sm:text-2xl">
                            {counter.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AnimatedNumber;
