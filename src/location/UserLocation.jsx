import React, { useState, useEffect } from "react";
import axios from "axios";

const UserLocation = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      getLocation();
    }, 1000); // 1-second delay

    return () => clearTimeout(timer);
  }, []);

  const getLocation = () => {
    if (navigator.permissions) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "granted" || result.state === "prompt") {
          requestGeolocation();
        } else {
          setError("Geolocation access denied by user.");
          setLoading(false);
        }
      });
    } else {
      requestGeolocation();
    }
  };

  const requestGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });

          try {
            const response = await axios.get(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            setAddress(response.data.display_name || "No address found");
          } catch (err) {
            setError("Error fetching address.");
          }
          setLoading(false);
        },
        (error) => {
          setError(error.message);
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <p>Fetching location...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <p>{address}</p>
      )}
    </div>
  );
};

export default UserLocation;
