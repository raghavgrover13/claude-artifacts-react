import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';
import { 
  Bitcoin, 
  Calculator, 
  Calendar, 
  ArrowRight, 
  PiggyBank, 
  DollarSign,
  BarChart3,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowDownToLine,
  Coins
} from 'lucide-react';

const FIFOAnalysis = () => {
  return (
    <div className="space-y-6 w-full max-w-4xl mx-auto p-4">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Calculator className="w-8 h-8 text-blue-500" />
            <CardTitle>FIFO ACB Analysis 2024</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>First-In-First-Out Calculation for Bitcoin Sales</span>
          </div>
        </CardContent>
      </Card>

      {/* Key Numbers Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center gap-2">
              <Bitcoin className="w-8 h-8 text-orange-500" />
              <p className="text-sm text-gray-600">Total BTC Sold</p>
              <p className="text-xl font-bold">0.38015447 BTC</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center gap-2">
              <Bitcoin className="w-8 h-8 text-orange-500" />
              <p className="text-sm text-gray-600">Total BTC Purchased</p>
              <p className="text-xl font-bold">0.25345142 BTC</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center gap-2">
              <DollarSign className="w-8 h-8 text-green-500" />
              <p className="text-sm text-gray-600">Net Proceeds</p>
              <p className="text-xl font-bold">$37,504.27 CAD</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center gap-2">
              <PiggyBank className="w-8 h-8 text-purple-500" />
              <p className="text-sm text-gray-600">Total ACB Used</p>
              <p className="text-xl font-bold">$30,073.40 CAD</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center gap-2">
              <BarChart3 className="w-8 h-8 text-blue-500" />
              <p className="text-sm text-gray-600">Capital Gains</p>
              <p className="text-xl font-bold">$7,430.87 CAD</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* FIFO Layers Breakdown */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <ArrowDownToLine className="w-6 h-6 text-blue-500" />
            <CardTitle className="text-lg">FIFO Layers Used</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* 2021 Layer */}
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <Calendar className="w-8 h-8 text-blue-500 shrink-0" />
            <div className="flex-grow">
              <h3 className="font-semibold">2021 Layer (First Used)</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                <div>
                  <p className="text-sm text-gray-600">Amount</p>
                  <p className="font-medium">0.10000000 BTC</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Price per BTC</p>
                  <p className="font-medium">$60,000 CAD</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Cost</p>
                  <p className="font-medium">$6,000.00 CAD</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2022 Layer */}
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <Calendar className="w-8 h-8 text-green-500 shrink-0" />
            <div className="flex-grow">
              <h3 className="font-semibold">2022 Layer (Second Used)</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                <div>
                  <p className="text-sm text-gray-600">Amount</p>
                  <p className="font-medium">0.15000000 BTC</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Price per BTC</p>
                  <p className="font-medium">$61,000 CAD</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Cost</p>
                  <p className="font-medium">$9,150.00 CAD</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2024 Layer */}
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <Calendar className="w-8 h-8 text-orange-500 shrink-0" />
            <div className="flex-grow">
              <h3 className="font-semibold">2024 Layer (Last Used)</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                <div>
                  <p className="text-sm text-gray-600">Amount</p>
                  <p className="font-medium">0.13015447 BTC</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Average Cost</p>
                  <p className="font-medium">~$114,660 CAD</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Cost</p>
                  <p className="font-medium">$14,923.40 CAD</p>
                </div>
              </div>
            </div>
          </div>
          {/* Summary Total Row */}
          <div className="flex items-center gap-4 p-4 mt-4 bg-blue-50 rounded-lg border border-blue-200">
            <Coins className="w-8 h-8 text-blue-600 shrink-0" />
            <div className="flex-grow">
              <h3 className="font-semibold">Total FIFO Layers Summary</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                <div>
                  <p className="text-sm text-gray-600">Total Amount Used/Sold</p>
                  <p className="font-medium text-blue-700">0.38015447 BTC</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-600">Total ACB Used/Total Cost</p>
                  <p className="font-medium text-blue-700">$30,073.40 CAD</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Verification & Remaining 2024 Balance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
              <CardTitle className="text-lg">Balance Verification</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                <span className="text-gray-600">Starting Balance (Jan 1, 2024)</span>
                <span className="font-medium">0.33228851 BTC</span>
              </div>
              
              <div className="flex justify-between items-center bg-blue-50 p-2 rounded">
                <span className="text-gray-600">Total Purchased in 2024</span>
                <span className="font-medium text-blue-600">+ 0.25345142 BTC</span>
              </div>

              <div className="flex justify-between items-center bg-red-50 p-2 rounded">
                <span className="text-gray-600">Total Sold in 2024</span>
                <span className="font-medium text-red-600">- 0.38015447 BTC</span>
              </div>

              <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                <span className="text-gray-600">Ending Balance (Dec 31, 2024)</span>
                <span className="font-medium">= 0.20558546 BTC</span>
              </div>

              <div className="pt-2 border-t">
                <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                  <span className="font-medium">Balance Check:</span>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Start + Bought = 0.58573993</div>
                    <div className="text-sm text-gray-600">Sold + Ending = 0.58573993</div>
                    <div className="text-green-600 font-medium mt-1">Difference: 0.00000000 ✓</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Coins className="w-6 h-6 text-blue-500" />
              <CardTitle className="text-lg">Remaining 2024 Balance</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Remaining BTC</span>
                <span className="font-medium">0.20558546 BTC</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Updated ACB</span>
                <span className="font-medium">$17,400.11 CAD</span>
              </div>
              <div className="text-sm text-gray-500 mt-2">
                As of December 31, 2024
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Important Note */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
            <div>
              <p className="font-medium">Important Tax Note</p>
              <p className="text-sm text-gray-600 mt-1">
                This FIFO calculation follows CRA guidelines. The resulting capital gain of $7,430.87 CAD 
                is calculated as the difference between net proceeds ($37,504.27 CAD) and the total ACB 
                used ($30,073.40 CAD). Keep all transaction records for tax purposes.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FIFOAnalysis;