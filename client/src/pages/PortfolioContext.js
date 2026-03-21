import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const PortfolioContext = createContext(null);

export const PortfolioProvider = ({ children }) => {
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    // Wake up Render first
    axios.get('https://yuvraj-portfolio-api.onrender.com/api/health')
      .then(() => {
        // Then fetch portfolio data
        return axios.get('https://yuvraj-portfolio-api.onrender.com/api/portfolio');
      })
      .then(res => setData(res.data.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <PortfolioContext.Provider value={{ data, loading, error }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);
