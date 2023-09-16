import React from 'react';
import './market.css';

function App() {
  const companies = [
    {
      id: 1,
      name: 'Company A',
      pairs: 'BTC/ETH',
      coin: 'BTC',
      lastPrice: 100.0,
      change24h: '+5.0%',
      high24h: 110.0,
      low24h: 95.0,
      volume24h: '10,000 BTC',
    },
    {
      id: 2,
      name: 'Company B',
      pairs: 'ETH/USDT',
      coin: 'ETH',
      lastPrice: 75.5,
      change24h: '-3.2%',
      high24h: 80.0,
      low24h: 70.0,
      volume24h: '5,000 ETH',
    },
  ];

  return (
    <div className="App">
      <h1>Carbon Credits</h1>
      <table className="stock-table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Pairs</th>
            <th>Coin</th>
            <th>Last Price</th>
            <th>Change (24H)</th>
            <th>High (24H)</th>
            <th>Low (24H)</th>
            <th>Volume (24H)</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>{company.name}</td>
              <td>{company.pairs}</td>
              <td>{company.coin}</td>
              <td>${company.lastPrice.toFixed(2)}</td>
              <td>{company.change24h}</td>
              <td>${company.high24h.toFixed(2)}</td>
              <td>${company.low24h.toFixed(2)}</td>
              <td>{company.volume24h}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
