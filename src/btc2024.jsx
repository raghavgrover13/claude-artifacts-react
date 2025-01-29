import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Bitcoin, Calculator, DollarSign, Wallet, Building2, RefreshCw } from 'lucide-react';

const BTCAnalysis2024 = () => {
  const sales = [
    { date: '2024-11-11', quantity: 0.087, price: 119756.43, subtotal: 10418.81, total: 10356.30, fees: 62.51 },
    { date: '2024-09-10', quantity: 0.03941474, price: 77321.36, subtotal: 3047.60, total: 3029.32, fees: 18.29 },
    { date: '2024-06-05', quantity: 0.0043, price: 97523.65, subtotal: 419.35, total: 417.05, fees: 2.31 },
    { date: '2024-05-21', quantity: 0.00175127, price: 97556.83, subtotal: 170.85, total: 169.91, fees: 0.94 },
    { date: '2024-05-21', quantity: 0.00041334, price: 97559.62, subtotal: 40.33, total: 40.10, fees: 0.22 },
    { date: '2024-05-21', quantity: 0.01258085, price: 97556.82, subtotal: 1227.35, total: 1220.60, fees: 6.75 },
    { date: '2024-04-23', quantity: 0.00121516, price: 91157.79, subtotal: 110.77, total: 110.49, fees: 0.28 },
    { date: '2024-04-23', quantity: 0.00015607, price: 91157.79, subtotal: 14.23, total: 14.19, fees: 0.04 },
    { date: '2024-04-23', quantity: 0.0001338, price: 91157.79, subtotal: 12.20, total: 12.17, fees: 0.03 },
    { date: '2024-04-20', quantity: 0.01990443, price: 88213.21, subtotal: 1755.83, total: 1749.69, fees: 6.15 },
    { date: '2024-04-20', quantity: 0.00922278, price: 88213.21, subtotal: 813.57, total: 810.72, fees: 2.85 },
    { date: '2024-04-20', quantity: 0.00222593, price: 88213.21, subtotal: 196.36, total: 195.67, fees: 0.69 },
    { date: '2024-03-25', quantity: 0.0617, price: 94893.07, subtotal: 5854.90, total: 5840.27, fees: 14.64 },
    { date: '2024-03-11', quantity: 0.05881634, price: 97187.70, subtotal: 5716.22, total: 5681.93, fees: 34.30 },
    { date: '2024-03-11', quantity: 0.08130779, price: 97187.70, subtotal: 7902.12, total: 7854.70, fees: 47.41 },
    { date: '2024-03-11', quantity: 0.00001197, price: 97187.70, subtotal: 1.16, total: 1.16, fees: 0.01 }
  ];

  const purchases = [
    { date: '2024-06-05', quantity: 0.00245854, price: 97550.76, subtotal: 239.83, total: 240.67, fees: 0.84 },
    { date: '2024-06-05', quantity: 0.00021146, price: 97550.76, subtotal: 20.63, total: 20.70, fees: 0.07 },
    { date: '2024-05-01', quantity: 0.00019128, price: 79400.02, subtotal: 15.19, total: 15.23, fees: 0.04 },
    { date: '2024-05-01', quantity: 0.00155821, price: 79371.16, subtotal: 123.68, total: 124.11, fees: 0.43 },
    { date: '2024-05-01', quantity: 0.03514517, price: 79371.16, subtotal: 2789.51, total: 2799.28, fees: 9.76 },
    { date: '2024-05-01', quantity: 0.00155617, price: 79371.16, subtotal: 123.52, total: 123.95, fees: 0.43 },
    { date: '2024-05-01', quantity: 0.03, price: 79325.11, subtotal: 2379.75, total: 2388.08, fees: 8.33 },
    { date: '2024-04-30', quantity: 0.0198143, price: 83056.78, subtotal: 1645.71, total: 1651.47, fees: 5.76 },
    { date: '2024-04-30', quantity: 0.03, price: 83740.06, subtotal: 2512.20, total: 2520.99, fees: 8.79 },
    { date: '2024-04-16', quantity: 0.02046958, price: 86455.24, subtotal: 1769.70, total: 1775.90, fees: 6.19 },
    { date: '2024-04-16', quantity: 0.00849712, price: 86455.24, subtotal: 734.62, total: 737.19, fees: 2.57 },
    { date: '2024-04-16', quantity: 0.04183013, price: 86771.24, subtotal: 3629.65, total: 3642.36, fees: 12.70 },
    { date: '2024-03-17', quantity: 0.06171946, price: 87458.93, subtotal: 5397.92, total: 5411.41, fees: 13.49 }
  ];

  const totals = {
    sales: {
      quantity: 0.38015447,
      proceeds: 37701.65,    // Subtotal
      fees: 197.42,
      netProceeds: 37504.27  // Total
    },
    purchases: {
      quantity: 0.25345142,
      subtotal: 21381.91,
      fees: 69.40,
      total: 21451.34,
      averagePrice: 85067    // From Excel
    }
    ,
    endingquantity:
    {
      quantity : 0.20558546,
      acb: 17400.11,
      gain: 7430.87,
      bankwithdraw: 16453
    }
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 rounded-lg">
      <div className="text-2xl font-bold flex items-center gap-2 mb-6">
        <Bitcoin className="text-orange-500" size={32} />
        <span>2024 BTC Gains Analysis</span>
      </div>
      

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="text-blue-500" />
            Introduction
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            This document provides the final analysis of BTC transactions for 2024, including Adjusted Cost Base (ACB), 
            capital gains, re-buys, and alignment with withdrawals and remaining balances. All transaction fees, 
            including buying and selling fees, have been incorporated into the calculations.
          </p>
        </CardContent>
      </Card>
{/* 2024 Year End Summary */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Ending BTC Balance</CardTitle>
            <Bitcoin className="text-orange-500 h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totals.endingquantity.quantity} BTC</div>
            <p className="text-xs text-gray-500 mt-1">As of December 31, 2024</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Purchases</CardTitle>
            <Bitcoin className="text-orange-500 h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totals.purchases.quantity.toFixed(8)} BTC</div>
            <p className="text-xs text-gray-500 mt-1">Total BTC Purchases in 2024</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
            <Bitcoin className="text-orange-500 h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totals.sales.quantity.toFixed(8)} BTC</div>
            <p className="text-xs text-gray-500 mt-1">Total BTC Sold in 2024</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Ending ACB</CardTitle>
            <DollarSign className="text-green-500 h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totals.endingquantity.acb.toLocaleString()} CAD</div>
            <p className="text-xs text-gray-500 mt-1">For {totals.endingquantity.quantity} BTC</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="text-blue-500" />
              2024 Year End Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">2024 Summary:</h3>
                <div>• Ending BTC Balance: {totals.endingquantity.quantity} BTC</div>
                <div>• Ending ACB: ${totals.endingquantity.acb.toLocaleString()} CAD which is ${(Number(totals.endingquantity.acb)/Number(totals.endingquantity.quantity)).toFixed(2)}. CAD/BTC</div>
                <div className="mt-4 font-bold text-green-600">• Capital Gains Reported: ${totals.endingquantity.gain.toLocaleString()} CAD</div>
              </div>
            </div>
          </CardContent>
          
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="text-blue-500" />
              2024 Year End Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">2024 Summary:</h3>
                <div>• Total Sales Proceeds: ${totals.sales.netProceeds.toLocaleString()}CAD</div>
                <div>• Total Buys: ${totals.purchases.total.toLocaleString()} CAD</div>
                <div>• Bank Withdrawal: ${totals.endingquantity.bankwithdraw.toLocaleString()} CAD</div>
              </div>
            </div>
          </CardContent>
          
        </Card>
      </div>
      {/* Sales Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="text-green-500" />
            Summary of 2024 BTC Sales
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Date</th>
                  <th className="text-right p-2">Quantity Sold (BTC)</th>
                  <th className="text-right p-2">Price (CAD)</th>
                  <th className="text-right p-2">Proceeds (CAD)</th>
                  <th className="text-right p-2">Fees (CAD)</th>
                  <th className="text-right p-2">Net Proceeds (CAD)</th>
                </tr>
              </thead>
              <tbody>
                {sales.map((sale, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{sale.date}</td>
                    <td className="text-right p-2">{sale.quantity.toFixed(8)}</td>
                    <td className="text-right p-2">${sale.price.toLocaleString()}</td>
                    <td className="text-right p-2">${sale.subtotal.toLocaleString()}</td>
                    <td className="text-right p-2">${sale.fees.toLocaleString()}</td>
                    <td className="text-right p-2">${sale.total.toLocaleString()}</td>
                  </tr>
                ))}
                <tr className="font-bold bg-gray-50">
                  <td className="p-2">Total</td>
                  <td className="text-right p-2">{totals.sales.quantity.toFixed(8)}</td>
                  <td className="text-right p-2">-</td>
                  <td className="text-right p-2">${totals.sales.proceeds.toLocaleString()}</td>
                  <td className="text-right p-2">${totals.sales.fees.toLocaleString()}</td>
                  <td className="text-right p-2">${totals.sales.netProceeds.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Purchases Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bitcoin className="text-orange-500" />
            Summary of 2024 BTC Buys
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Date</th>
                  <th className="text-right p-2">Quantity Bought (BTC)</th>
                  <th className="text-right p-2">Price (CAD)</th>
                  <th className="text-right p-2">Subtotal (CAD)</th>
                  <th className="text-right p-2">Fees (CAD)</th>
                  <th className="text-right p-2">Total Cost (CAD)</th>
                </tr>
              </thead>
              <tbody>
                {purchases.map((purchase, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{purchase.date}</td>
                    <td className="text-right p-2">{purchase.quantity.toFixed(8)}</td>
                    <td className="text-right p-2">${purchase.price.toLocaleString()}</td>
                    <td className="text-right p-2">${purchase.subtotal.toLocaleString()}</td>
                    <td className="text-right p-2">${purchase.fees.toLocaleString()}</td>
                    <td className="text-right p-2">${purchase.total.toLocaleString()}</td>
                  </tr>
                ))}
                <tr className="font-bold bg-gray-50">
                  <td className="p-2">Total</td>
                  <td className="text-right p-2">{totals.purchases.quantity.toFixed(8)}</td>
                  <td className="text-right p-2">${totals.purchases.averagePrice.toLocaleString()}</td>
                  <td className="text-right p-2">${totals.purchases.subtotal.toLocaleString()}</td>
                  <td className="text-right p-2">${totals.purchases.fees.toLocaleString()}</td>
                  <td className="text-right p-2">${totals.purchases.total.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Capital Gains */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="text-green-500" />
            Capital Gains Calculation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div>1. Proceeds (CAD): ${totals.sales.proceeds.toLocaleString()}</div>
            <div>2. Selling Fees Deducted (CAD): ${totals.sales.fees.toLocaleString()}</div>
            <div>3. Net Proceeds After Selling Fees (CAD): ${totals.sales.netProceeds.toLocaleString()}</div>
            <div>4. ACB for Sold BTC (Including Buy Fees, CAD): $30,073.40</div>
            <div className="mt-4 font-bold text-green-600">5. Capital Gains (CAD): $7,430.87</div>
            <div className="text-sm text-gray-600 mt-2">
              Calculated as Net Proceeds ($37,504.27) - ACB ($30,073.40)
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bank Withdrawals */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="text-blue-500" />
            Alignment with Bank Withdrawals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div>• Net proceeds from BTC sales (CAD): ${totals.sales.netProceeds.toLocaleString()}</div>
            <div>• Re-buy cost (CAD): ${totals.purchases.total.toLocaleString()}</div>
            <div>• Bank withdrawal (CAD): ${totals.endingquantity.bankwithdraw.toLocaleString()}.  
            Note - Expected bank withdrawl was $16,052 CAD but received a bit more(~400$ CAD) due to exchange change rate fluctuations and timing difference since BTC was sold in USDC and then later converted to CAD at different times in Coinbase.
            </div>
            <p className="mt-4 text-sm text-gray-600">
              This alignment shows that the liquid gains from BTC sales were withdrawn after accounting for re-buys.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Remaining Balance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wallet className="text-blue-500" />
            Remaining BTC Balance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div>• Ending BTC Balance (as of Dec 31, 2024): {totals.endingquantity.quantity} BTC</div>
            <div>• Updated ACB for Remaining BTC (CAD): ${totals.endingquantity.acb.toLocaleString()} CAD</div>
            <p className="mt-2 text-sm text-gray-600">
              This reflects the remaining balance after all 2024 transactions.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BTCAnalysis2024;