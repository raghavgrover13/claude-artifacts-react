import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Bitcoin, Calculator, DollarSign, Wallet, Building2, History } from 'lucide-react';

const BTCTracker2025 = () => {
  // 2024 Data
  const year2024 = {
    endingBalance: 0.20558546,
    endingACB: 17400.11,
    totalSales: {
      quantity: 0.38015447,
      proceeds: 37701.65,
      fees: 197.42,
      netProceeds: 37504.27
    },
    reportedGains: 7430.87,
    bankWithdrawal: 16453,
    purchases: [
      { date: '2024-03-17', quantity: 0.06171946, price: 87458.93, subtotal: 5397.92, total: 5411.41, fees: 13.49 },
      { date: '2024-04-16', quantity: 0.04183013, price: 86771.24, subtotal: 3629.65, total: 3642.36, fees: 12.70 },
      { date: '2024-04-16', quantity: 0.00849712, price: 86455.24, subtotal: 734.62, total: 737.19, fees: 2.57 },
      { date: '2024-04-16', quantity: 0.02046958, price: 86455.24, subtotal: 1769.70, total: 1775.90, fees: 6.19 },
      { date: '2024-04-30', quantity: 0.03000000, price: 83740.06, subtotal: 2512.20, total: 2520.99, fees: 8.79 },
      { date: '2024-04-30', quantity: 0.0198143, price: 83056.78, subtotal: 1645.71, total: 1651.47, fees: 5.76 },
      { date: '2024-05-01', quantity: 0.03000000, price: 79325.11, subtotal: 2379.75, total: 2388.08, fees: 8.33 },
      { date: '2024-05-01', quantity: 0.00155617, price: 79371.16, subtotal: 123.52, total: 123.95, fees: 0.43 },
      { date: '2024-05-01', quantity: 0.03514517, price: 79371.16, subtotal: 2789.51, total: 2799.28, fees: 9.76 },
      { date: '2024-05-01', quantity: 0.00155821, price: 79371.16, subtotal: 123.68, total: 124.11, fees: 0.43 },
      { date: '2024-05-01', quantity: 0.00019128, price: 79400.02, subtotal: 15.19, total: 15.23, fees: 0.04 },
      { date: '2024-06-05', quantity: 0.00021146, price: 97550.76, subtotal: 20.63, total: 20.70, fees: 0.07 },
      { date: '2024-06-05', quantity: 0.00245854, price: 97550.76, subtotal: 239.83, total: 240.67, fees: 0.84 }
    ],
    sales : [
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
    ]
  };

  // January 2025 Purchases from CSV
  const january2025Purchases = [
    { date: '2025-01-10', quantity: 0.00010796, priceAtTransaction: 133469.59, subtotal: 14.41, total: 14.52, fees: 0.11 },
    { date: '2025-01-10', quantity: 0.00004009, priceAtTransaction: 133469.61, subtotal: 5.35, total: 5.39, fees: 0.04 },
    { date: '2025-01-10', quantity: 0.00126903, priceAtTransaction: 133176.50, subtotal: 169.00, total: 170.27, fees: 1.27 },
    { date: '2025-01-09', quantity: 0.01853965, priceAtTransaction: 133084.90, subtotal: 2467.35, total: 2475.99, fees: 8.64 },
    { date: '2025-01-09', quantity: 0.00222471, priceAtTransaction: 133084.90, subtotal: 296.08, total: 297.11, fees: 1.04 },
    { date: '2025-01-09', quantity: 0.01922675, priceAtTransaction: 132263.22, subtotal: 2542.99, total: 2573.51, fees: 30.52 },
    { date: '2025-01-09', quantity: 0.00011757, priceAtTransaction: 132263.18, subtotal: 15.55, total: 15.74, fees: 0.19 },
    { date: '2025-01-09', quantity: 0.00001709, priceAtTransaction: 135783.62, subtotal: 2.32, total: 2.33, fees: 0.01 },
    { date: '2025-01-09', quantity: 0.00288257, priceAtTransaction: 135813.75, subtotal: 391.49, total: 393.84, fees: 2.35 }
  ];

  // Calculate 2025 totals
  const totals2025 = {
    currentBalance: year2024.endingBalance + january2025Purchases.reduce((sum, p) => sum + p.quantity, 0),
    purchases: {
      quantity: january2025Purchases.reduce((sum, p) => sum + p.quantity, 0),
      subtotal: january2025Purchases.reduce((sum, p) => sum + p.subtotal, 0),
      fees: january2025Purchases.reduce((sum, p) => sum + p.fees, 0),
      total: january2025Purchases.reduce((sum, p) => sum + p.total, 0)
    }
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 rounded-lg">
      <div className="text-2xl font-bold flex items-center gap-2 mb-6">
        <Bitcoin className="text-orange-500" size={32} />
        <span>2025 BTC Gains Analysis</span>
      </div>

      {/* Current Balance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Current BTC Balance</CardTitle>
            <Bitcoin className="text-orange-500 h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totals2025.currentBalance.toFixed(8)} BTC</div>
            <p className="text-xs text-gray-500 mt-1">As of January 2025</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">2024 Ending ACB</CardTitle>
            <DollarSign className="text-green-500 h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${year2024.endingACB.toLocaleString()} CAD</div>
            <p className="text-xs text-gray-500 mt-1">For {year2024.endingBalance.toFixed(8)} BTC</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">January 2025 Purchases</CardTitle>
            <Calculator className="text-blue-500 h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totals2025.purchases.quantity.toFixed(8)} BTC</div>
            <p className="text-xs text-gray-500 mt-1">${totals2025.purchases.total.toLocaleString()} CAD Total Cost</p>
          </CardContent>
        </Card>
      </div>

      {/* 2024 Summary */}
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
              <div>• Ending BTC Balance: {year2024.endingBalance.toFixed(8)} BTC</div>
              <div>• Ending ACB: ${year2024.endingACB.toLocaleString()} CAD</div>
              <div>• Ending Avg. 2024 BTC Buy Price for ACB: ${(year2024.endingACB/year2024.endingBalance).toFixed(2)} CAD/BTC</div>
              <div>• Capital Gains Reported: ${year2024.reportedGains.toLocaleString()} CAD</div>
              <div>• Total Sales Proceeds: ${year2024.totalSales.netProceeds.toLocaleString()} CAD</div>
              <div>• Bank Withdrawal: ${year2024.bankWithdrawal.toLocaleString()} CAD</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 2024 Purchase History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="text-purple-500" />
            2024 Purchase History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Date</th>
                  <th className="text-right p-2">Quantity (BTC)</th>
                  <th className="text-right p-2">Price (CAD)</th>
                  <th className="text-right p-2">Subtotal (CAD)</th>
                  <th className="text-right p-2">Fees (CAD)</th>
                  <th className="text-right p-2">Total Cost (CAD)</th>
                </tr>
              </thead>
              <tbody>
                {year2024.purchases.map((purchase, index) => (
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
                  <td className="text-right p-2">
                    {year2024.purchases.reduce((sum, p) => sum + p.quantity, 0).toFixed(8)}
                  </td>
                  <td className="text-right p-2">-</td>
                  <td className="text-right p-2">
                    ${year2024.purchases.reduce((sum, p) => sum + p.subtotal, 0).toLocaleString()}
                  </td>
                  <td className="text-right p-2">
                    ${year2024.purchases.reduce((sum, p) => sum + p.fees, 0).toLocaleString()}
                  </td>
                  <td className="text-right p-2">
                    ${year2024.purchases.reduce((sum, p) => sum + p.total, 0).toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
        
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="text-purple-500" />
            2024 Sales History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Date</th>
                  <th className="text-right p-2">Quantity (BTC)</th>
                  <th className="text-right p-2">Price (CAD)</th>
                  <th className="text-right p-2">Subtotal (CAD)</th>
                  <th className="text-right p-2">Fees (CAD)</th>
                  <th className="text-right p-2">Total Cost (CAD)</th>
                </tr>
              </thead>
              <tbody>
                {year2024.sales.map((sales, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{sales.date}</td>
                    <td className="text-right p-2">{sales.quantity.toFixed(8)}</td>
                    <td className="text-right p-2">${sales.price.toLocaleString()}</td>
                    <td className="text-right p-2">${sales.subtotal.toLocaleString()}</td>
                    <td className="text-right p-2">${sales.fees.toLocaleString()}</td>
                    <td className="text-right p-2">${sales.total.toLocaleString()}</td>
                  </tr>
                ))}
                <tr className="font-bold bg-gray-50">
                  <td className="p-2">Total</td>
                  <td className="text-right p-2">
                    {year2024.sales.reduce((sum, p) => sum + p.quantity, 0).toFixed(8)}
                  </td>
                  <td className="text-right p-2">-</td>
                  <td className="text-right p-2">
                    ${year2024.sales.reduce((sum, p) => sum + p.subtotal, 0).toLocaleString()}
                  </td>
                  <td className="text-right p-2">
                    ${year2024.sales.reduce((sum, p) => sum + p.fees, 0).toLocaleString()}
                  </td>
                  <td className="text-right p-2">
                    ${year2024.sales.reduce((sum, p) => sum + p.total, 0).toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
        
      </Card>

      {/* January 2025 Purchases */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bitcoin className="text-orange-500" />
            January 2025 Purchases
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Date</th>
                  <th className="text-right p-2">Quantity (BTC)</th>
                  <th className="text-right p-2">BTC Price (CAD)</th>
                  <th className="text-right p-2">Subtotal (CAD)</th>
                  <th className="text-right p-2">Fees (CAD)</th>
                  <th className="text-right p-2">Total Cost (CAD)</th>
                </tr>
              </thead>
              <tbody>
                {january2025Purchases.map((purchase, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{purchase.date}</td>
                    <td className="text-right p-2">{purchase.quantity.toFixed(8)}</td>
                    <td className="text-right p-2">${purchase.priceAtTransaction.toLocaleString()}</td>
                    <td className="text-right p-2">${purchase.subtotal.toLocaleString()}</td>
                    <td className="text-right p-2">${purchase.fees.toLocaleString()}</td>
                    <td className="text-right p-2">${purchase.total.toLocaleString()}</td>
                  </tr>
                ))}
                <tr className="font-bold bg-gray-50">
                  <td className="p-2">Total</td>
                  <td className="text-right p-2">{totals2025.purchases.quantity.toFixed(8)}</td>
                  <td className="text-right p-2">-</td>
                  <td className="text-right p-2">${totals2025.purchases.subtotal.toLocaleString()}</td>
                  <td className="text-right p-2">${totals2025.purchases.total.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Updated Holdings and ACB */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wallet className="text-blue-500" />
            Current Holdings Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div>• Current Total Balance: {totals2025.currentBalance.toFixed(8)} BTC</div>
            <div className="pl-4 mt-2 space-y-1 text-sm text-gray-600">
              <div>- Carried from 2024: {year2024.endingBalance.toFixed(8)} BTC</div>
              <div>- Added in Jan 2025: {totals2025.purchases.quantity.toFixed(8)} BTC</div>
            </div>
            <div className="mt-4 pt-4 border-t">
              <h3 className="font-semibold mb-2">ACB Calculation:</h3>
              <div>• Starting ACB (2024): ${year2024.endingACB.toLocaleString()} CAD</div>
              <div>• Added January Purchases: ${totals2025.purchases.total.toLocaleString()} CAD</div>
              <div>• Current Total ACB: ${(year2024.endingACB + totals2025.purchases.total).toLocaleString()} CAD</div>
              <div>• Per-Unit ACB: ${Math.round((year2024.endingACB + totals2025.purchases.total) / totals2025.currentBalance).toLocaleString()} CAD/BTC</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Future Transactions Tracking */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="text-purple-500" />
            2025 Transaction Tracking Guidelines
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-gray-700">For future transactions in 2025, track:</p>
            <div className="pl-4 space-y-2">
              <div>1. Purchase Records</div>
              <div className="pl-4 text-sm text-gray-600">
                <div>• Date and quantity</div>
                <div>• BTC price at transaction time</div>
                <div>• Total cost with fees</div>
                <div>• Transaction fees</div>
              </div>
              <div>2. Sale Records</div>
              <div className="pl-4 text-sm text-gray-600">
                <div>• Date and quantity</div>
                <div>• Sale price</div>
                <div>• Fees paid</div>
                <div>• ACB of sold portion (FIFO method)</div>
                <div>• Capital gain/loss calculation</div>
              </div>
              <div>3. Running Totals</div>
              <div className="pl-4 text-sm text-gray-600">
                <div>• Current BTC balance</div>
                <div>• Updated ACB for remaining holdings</div>
                <div>• Cumulative capital gains/losses</div>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">2025 Progress:</h3>
              <div className="pl-4 mt-2 space-y-1">
                <div>• Current Balance: {totals2025.currentBalance.toFixed(8)} BTC</div>
                <div>• Purchases to Date: {totals2025.purchases.quantity.toFixed(8)} BTC</div>
                <div>• Sales to Date: 0.00000000 BTC</div>
                <div>• Realized Gains: $0.00 CAD</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notes and Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="text-green-500" />
            Important Notes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">FIFO Calculation Method:</h3>
              <div className="pl-4 space-y-1 text-sm text-gray-600">
                <div>1. For each sale, match quantities to oldest purchases first</div>
                <div>2. Use the ACB of matched purchases to calculate capital gains</div>
                <div>3. Update remaining holdings ACB after each sale</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Record Keeping:</h3>
              <div className="pl-4 space-y-1 text-sm text-gray-600">
                <div>• Keep all transaction confirmations</div>
                <div>• Record BTC price at time of each transaction</div>
                <div>• Maintain accurate fee records</div>
                <div>• Document gain/loss calculations</div>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600 border-t pt-4">
              <p>Important: Keep all transaction receipts and documentation for tax reporting purposes.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BTCTracker2025;