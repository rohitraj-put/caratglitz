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
            loadCookies();
        } else {
            // If consent is not accepted, default to showing all cookie sections
            setConsentAccepted(false);
            setCookiePreferences({
                analytics: true,
                marketing: true,
                preferences: true
            });
            loadCookies(); // Load default cookies
        }
    }, []);

    const loadCookies = () => {
        if (consentAccepted) {
            if (cookiePreferences.analytics) {
                Cookies.set('analytics', 'enabled', { expires: 365 });
            }
            if (cookiePreferences.marketing) {
                Cookies.set('marketing', 'enabled', { expires: 365 });
            }
            if (cookiePreferences.preferences) {
                Cookies.set('preferences', 'enabled', { expires: 365 });
            }
        } else {
            Cookies.set('analytics', 'enabled', { expires: 365 });
            Cookies.set('marketing', 'enabled', { expires: 365 });
            Cookies.set('preferences', 'enabled', { expires: 365 });
        }
    };

    const clearCookies = () => {
        Cookies.remove('analytics');
        Cookies.remove('marketing');
        Cookies.remove('preferences');
    };

    const handleAcceptAllCookies = () => {
        setConsentAccepted(true);
        localStorage.setItem('cookieConsent', 'accepted');
        setCookiePreferences({
            analytics: true,
            marketing: true,
            preferences: true
        });
        loadCookies();
    };

    const handleDeclineCookies = () => {
        setConsentAccepted(false);
        localStorage.removeItem('cookieConsent');
        clearCookies();
        setCookiePreferences({
            analytics: false,
            marketing: false,
            preferences: false
        });
    };

    return (
        !consentAccepted ?
            <div className="cookie-consent bg-gray-100 w-80 p-4 rounded">
                <div className='flex text-rose-400 justify-center'>
                    <i className='text-4xl mr-4'><FaCookieBite /></i>
                    <p className='text-2xl'>Cookie Consent</p>
                </div>
                <p>
                    This website uses cookies to ensure you get the best experience.
                </p>

                <br />
                <div className='flex'>
                    <button
                        onClick={handleAcceptAllCookies}
                        className='px-4 py-2 bg-rose-400 text-white rounded-3xl'
                    >
                        Accept All Cookies
                    </button>
                    <button
                        onClick={handleDeclineCookies}
                        className='ml-2 px-4 py-2 bg-gray-400 text-white rounded-3xl'
                    >
                        Decline
                    </button>
                </div>
            </div>
            : null
    );
};

export default CookieConsent;
