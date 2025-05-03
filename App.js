import React from 'react';
import TradeEntryForm from './components/TradeEntryForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // 👈 Include optional custom styles if needed

function App() {
  return (
    <div className="d-flex justify-content-center mt-3">
      <div style={{ width: '100%' }}>
        
        {/* Top Tab Header */}
        <div
          className="d-flex tab-header border-bottom bg-light"
          style={{ fontSize: '13px' }}
        >
          <div
            className="px-3 py-1 border border-bottom-0 bg-secondary"
            style={{ cursor: 'pointer' }}
          >
            Load Batch Trades
          </div>
          <div
            className="px-3 py-1 border border-bottom-0 bg-white"
            style={{ cursor: 'pointer' }}
          >
            Trade Entry
          </div>
          <div
            className="px-3 py-1 border border-bottom-0 bg-secondary"
            style={{ cursor: 'pointer' }}
          >
            Manage Portfolio
          </div>
        </div>

        {/* Form Section */}
        <div className="border border-top-0 p-2 bg-white">
          <TradeEntryForm />
        </div>
      </div>
    </div>
  );
}

export default App;
