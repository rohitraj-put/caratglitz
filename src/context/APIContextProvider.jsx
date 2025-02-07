import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

// Create the APIContext
const APIContext = createContext();

// Create the APIContextProvider component
const APIContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true; // Introduced to avoid setting state on unmounted component

    // Fetch data from API
    axios
      .get("http://localhost:8000/users/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (isMounted) {
          setData(res.data.userProfile);
          console.log(res.data.userProfile);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        if (isMounted) {
          setLoading(false);
        }
      });

    // Cleanup function to set isMounted to false
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <APIContext.Provider value={{ data, loading }}>
      {children}
    </APIContext.Provider>
  );
};

export default APIContextProvider;

// Create a custom hook to use the APIContext
export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("useAPI must be used within an APIContextProvider");
  }
  return context;
}
