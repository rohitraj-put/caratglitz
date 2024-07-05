import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { FaCookieBite } from "react-icons/fa";

const CookieConsent = () => {
    const [consentAccepted, setConsentAccepted] = useState(false);
    const [cookiePreferences, setCookiePreferences] = useState({
        analytics: false,
        marketing: false,
        preferences: false
    });

    useEffect(() => {
        const userConsent = localStorage.getItem('cookieConsent');
        if (userConsent === 'accepted') {
            setConsentAccepted(true);
            setCookiePreferences({
                analytics: JSON.parse(localStorage.getItem('analytics')),
                marketing: JSON.parse(localStorage.getItem('marketing')),
                preferences: JSON.parse(localStorage.getItem('preferences'))
            });
        }
    }, []);

    useEffect(() => {
        if (consentAccepted) {
            localStorage.setItem('cookieConsent', 'accepted');
            localStorage.setItem('analytics', JSON.stringify(cookiePreferences.analytics));
            localStorage.setItem('marketing', JSON.stringify(cookiePreferences.marketing));
            localStorage.setItem('preferences', JSON.stringify(cookiePreferences.preferences));
            loadCookies();
        }
    }, [consentAccepted, cookiePreferences]);

    const loadCookies = () => {
        if (cookiePreferences.analytics) {
            Cookies.set('analytics', 'enabled', { expires: 365 });
        } else {
            Cookies.remove('analytics');
        }
        if (cookiePreferences.marketing) {
            Cookies.set('marketing', 'enabled', { expires: 365 });
        } else {
            Cookies.remove('marketing');
        }
        if (cookiePreferences.preferences) {
            Cookies.set('preferences', 'enabled', { expires: 365 });
        } else {
            Cookies.remove('preferences');
        }
    };

    const clearCookies = () => {
        Cookies.remove('analytics');
        Cookies.remove('marketing');
        Cookies.remove('preferences');
    };

    const handleAcceptAllCookies = () => {
        setConsentAccepted(true);
        setCookiePreferences({
            analytics: true,
            marketing: true,
            preferences: true
        });
    };

    const handleDeclineCookies = () => {
        setConsentAccepted(false); 
        clearCookies(); 

    };

   
    if (consentAccepted) {
        return null;
    }

    return (
        <div className="cookie-consent border w-72 mt-0.5  border-gray-300 text-gray-600 px-4 py-4 bg-white focus:outline-none appearance-none">
            <div className='flex text-rose-400 justify-center'>
                <i className='text-4xl mr-4'><FaCookieBite /></i>
                <p className='text-2xl'>Cookie Consent</p>
            </div>
            <p>
                This website uses cookies to ensure you get the best experience.
            </p>

            <br />
            <div className='flex justify-between'>
                <button
                    onClick={handleAcceptAllCookies}
                    className='px-8 py-2 bg-rose-400 text-white rounded-3xl'
                >
                    Accept
                </button>
                <button
                    onClick={handleDeclineCookies}
                    className={`ml-2 px-8 py-2 bg-gray-400 text-white rounded-3xl`}
                >
                    Decline
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;
