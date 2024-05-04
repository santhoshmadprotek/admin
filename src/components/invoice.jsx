import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

// Modify createRow function to generate custom rows
function createRow(itemName, quantity, unitPrice) {
  const price = priceRow(quantity, unitPrice);
  return { itemName, quantity, unitPrice, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

// Custom data for the table
const customRows = [
  createRow('Dinning table', 5, 10),
  createRow('Table', 10, 20),
  createRow('King size bed', 2, 15),
];

const invoiceSubtotal = subtotal(customRows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function CustomTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead >
          <TableRow>
            <TableCell style={{ fontWeight: 'bold',backgroundColor: '#f0f0f0' }} align="center" colSpan={4}>
              Details
            
            {/* <TableCell align="right">Price</TableCell> */}
            </TableCell>
          </TableRow>
          <TableRow >
            <TableCell style={{ fontWeight: 'bold'}}>Items</TableCell>
            <TableCell style={{ fontWeight: 'bold'}} align="right">Qty.</TableCell>
            <TableCell style={{ fontWeight: 'bold'}} align="right">Unit</TableCell>
            <TableCell style={{ fontWeight: 'bold'}} align="right">Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customRows.map((row) => (
            <TableRow key={row.itemName}>
              <TableCell>{row.itemName}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.unitPrice}</TableCell>
              <TableCell align="right">{ccyFormat(row.price)}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ fontWeight: 'bold'}} colSpan={2}>Total</TableCell>
            <TableCell  style={{ fontWeight: 'bold'}} align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
