import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Col, Button, Table } from 'react-bootstrap';
import './TradeEntryForm.css';

const TradeEntryForm = () => {
  const [rows, setRows] = useState([]);

  const handleAdd = () => {
    const inputs = document.querySelectorAll('.section-box input, .section-box select');
    const values = Array.from(inputs).map(input => input.value);

    const row = {
      productType: values[0],
      issuerName: values[1],
      instrumentId: values[2],
      withhold: values[3],
      subordination: values[4],
      docClause: values[5],
      currency: values[6],
      coupon: values[7],
      tenor: values[8],
      maturityDate: values[9],
      bs: values[11],
      size: values[12],
      notionalNc: values[13],
      notionalUsd: values[14],
      actualFunding: values[15],
      paymentFreq: values[16],
      standardFunding: values[17],
    };

    setRows(prev => [...prev, row]);
  };

  return (
    <div className="container-fluid mt-1" style={{ fontSize: '12px' }}>
      {/* Key Fields Box */}
      <div className="section-box" style={{ width: '800px' }}>
        <div className="section-header" style={{ color: '#3f3f78' }}>Key Fields</div>
        <div className="section-body">
          <Row className="gx-2 gy-1">
            <Col md={2}><Form.Label className="mb-1">Product Type</Form.Label><Form.Select size="sm" defaultValue="CD Swap"><option>CD Swap</option></Form.Select></Col>
            <Col md={3}><Form.Label className="mb-1">Issuer Name</Form.Label><Form.Select size="sm" /></Col>
            <Col md={2}><Form.Label className="mb-1">Instrument ID</Form.Label><Form.Control size="sm" defaultValue="007GB6" /></Col>
            <Col md={1}><Form.Label className="mb-1">Withhold</Form.Label><Form.Control size="sm" /></Col>
          </Row>
        </div>
      </div>

      <div className="section-box mt-2" style={{ width: '800px' }}>
        <div className="section-header">&nbsp;</div>
        <div className="section-body">
          <Row className="gx-2 gy-1 mt-1">
            <Col md={2}><Form.Label className="mb-1">Subordination</Form.Label><Form.Select size="sm"><option>Sr Unsecured</option></Form.Select></Col>
            <Col md={2}><Form.Label className="mb-1">Doc Clause</Form.Label><Form.Select size="sm"><option>CR14</option></Form.Select></Col>
            <Col sm={2}><Form.Label className="mb-1">Currency</Form.Label><Form.Select size="sm"><option>EUR</option></Form.Select></Col>
            <Col sm={1}><Form.Label className="mb-1">Coupon</Form.Label><Form.Control size="sm" defaultValue="100" /></Col>
            <Col sm={1}><Form.Label className="mb-1">Tenor</Form.Label><Form.Control size="sm" /></Col>
            <Col sm={2}><Form.Label className="mb-1">Maturity</Form.Label><div className="d-flex"><Form.Control type="date" size="sm" defaultValue="2030-06-20" className="me-1" /><Form.Select size="sm" style={{ width: '65px' }}><option>5Y</option></Form.Select></div></Col>
          </Row>
        </div>
      </div>

      <div className="section-box mt-2" style={{ width: '800px' }}>
        <div className="section-header">&nbsp;</div>
        <div className="section-body">
          <Row className="gx-2 gy-1 mt-1">
            <Col sm={2}><Form.Label className="mb-1">B/S</Form.Label><Form.Select size="sm"><option>Buy</option></Form.Select></Col>
            <Col sm={2}><Form.Label className="mb-1">Size (MM)</Form.Label><Form.Control size="sm" /></Col>
            <Col md={3}><Form.Label className="mb-1">Notional (NC)</Form.Label><Form.Control size="sm" /></Col>
            <Col md={3}><Form.Label className="mb-1">Notional ($)</Form.Label><Form.Control size="sm" /></Col>
          </Row>
        </div>
      </div>

      {/* CSA Fields Box */}
      <div className="section-box mt-2" style={{ width: '800px' }}>
        <div className="section-header" style={{ color: '#3f3f78' }}>CSA Fields</div>
        <div className="section-body">
          <Row className="gx-2 gy-1 mt-1">
            <Col md={2}><Form.Label className="mb-1">Actual Funding Id</Form.Label><Form.Select size="sm"><option>EUROIS</option></Form.Select></Col>
            <Col md={2}><Form.Label className="mb-1">Payment Freq.</Form.Label><Form.Select size="sm"><option>Quarterly</option></Form.Select></Col>
            <Col md={3}><Form.Label className="mb-1">Standard Funding Id</Form.Label><Form.Control size="sm" defaultValue="EUROI"></Form.Control></Col>
            <Col md={3} className="d-flex align-items-end justify-content-end">
              <Button
                size="sm"
                className="me-2"
                variant="secondary"
                style={{ backgroundColor: 'lightgray', color: 'black' }}
                onClick={handleAdd}
              >
                Add
              </Button>

              <Button size="sm" variant="secondary" style={{ backgroundColor: 'lightgray', color: 'black' }}>Reset</Button>
            </Col>
          </Row>
        </div>
      </div>

      {/* Action Bar */}
      <div className="d-flex align-items-center flex-wrap mb-2">
        <Button size="sm" className="me-1" style={{ backgroundColor: '#85c9e2', border: '1px solid #999', color: '#000', fontSize: '12px', padding: '2px 8px' }}>Validate Loaded Trades</Button>
        <Button size="sm" className="me-1" style={{ backgroundColor: '#85c9e2', border: '1px solid #999', color: '#000', fontSize: '12px', padding: '2px 8px' }}>Add Selected Trades to Margin Calc</Button>
        <Button size="sm" className="me-1" style={{ backgroundColor: '#85c9e2', border: '1px solid #999', color: '#000', fontSize: '12px', padding: '2px 8px' }}>Clear Trades</Button>
        <Button size="sm" className="me-2" style={{ backgroundColor: '#85c9e2', border: '1px solid #999', color: '#000', fontSize: '12px', padding: '2px 8px' }}>Export to Excel</Button>
        <span className="px-2 py-1 small fw-bold" style={{ backgroundColor: '#ffc107', color: '#fff', borderRadius: '3px' }}>Active Portfolio = Unnamed</span>
      </div>

      {/* Tab Row */}
      <div className="tab-strip">
        <span className="active">Trade Loaded (#0)</span>
        <span>Valid Trades (#0)</span>
        <span>Invalid Trades (#0)</span>
        <span>Trade IDs Not Found (#0)</span>
        <span>Help</span>
      </div>


      {/* Table */}
      {/* Loaded Trades Table Section */}
      <div className="section-box">
        <div className="table-box-header text-white px-2 py-1">Loaded Trades Table</div>

        <div className="section-body p-0">
          <div className="table-wrapper">
            <table className="table-loaded-trades">
              <thead>
                <tr>
                  <th>ProductType-&gt;IssuerName-&gt;TradeID</th>
                  <th>Withhold</th>
                  <th>Sector</th>
                  <th>Currency</th>
                  <th>MaturityDate</th>
                  <th>Position Native</th>
                  <th>MTM Native</th>
                  <th>CS01 Native</th>
                  <th>Trade Cnt.</th>
                  <th>Gross Notl. Native</th>
                  <th>InstrumentId</th>
                  <th>Crd Crv Sub</th>
                  <th>DocClause</th>
                  <th>ContractualSpread</th>
                  <th>Tier</th>
                  <th>Ticker</th>
                  <th>LegalEntity</th>
                  <th>BusinessGroup</th>
                  <th>BusinessType</th>
                </tr>
              </thead>
              <tbody>
                {/* Dynamic rows */}
                {rows.map((r, i) => (
                  <tr key={i}>
                    <td>{r.productType} → {r.issuerName} → TRD{i + 1}</td>
                    <td>{r.withhold}</td>
                    <td>-</td>
                    <td>{r.currency}</td>
                    <td>{r.maturityDate}</td>
                    <td>{r.size}</td>
                    <td>-</td>
                    <td>-</td>
                    <td>1</td>
                    <td>{r.notionalUsd}</td>
                    <td>{r.instrumentId}</td>
                    <td>{r.subordination}</td>
                    <td>{r.docClause}</td>
                    <td>-</td>
                    <td>-</td>
                    <td>{r.issuerName}</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                ))}

                <tr className="table-total-row">
                  <td colSpan="19">TOTAL</td>
                </tr>
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeEntryForm;
