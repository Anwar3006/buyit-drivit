"use client";
import React, { useState } from "react";
import {
  Calculator,
  DollarSign,
  Calendar,
  Percent,
  TrendingUp,
  PieChart,
  Info,
} from "lucide-react";

function EMICalculator({ price = 1000 }) {
  const [loanAmount, setLoanAmount] = useState(price);
  const [tenure, setTenure] = useState(36);
  const [interestRate, setInterestRate] = useState(8.5);
  const [downPayment, setDownPayment] = useState(20000);

  const calculateEMI = () => {
    const principal = loanAmount - downPayment;
    const monthlyRate = interestRate / 12 / 100;
    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1);
    const totalAmount = emi * tenure;
    const totalInterest = totalAmount - principal;

    return {
      monthlyEMI: emi,
      totalInterest,
      totalAmount,
      principal,
    };
  };

  const handleInputChange = (value, setter, min, max) => {
    const numValue = Number(value);
    if (!isNaN(numValue)) {
      setter(Math.min(Math.max(numValue, min), max));
    }
  };

  const { monthlyEMI, totalInterest, totalAmount, principal } = calculateEMI();

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const interestPercentage = (totalInterest / totalAmount) * 100;
  const principalPercentage = (principal / totalAmount) * 100;

  return (
    <div className="h-full overflow-y-auto px-1">
      <div className="space-y-6">
        {/* Input Controls */}
        <div className="space-y-6">
          {/* Loan Amount */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-green-600" />
              <label className="text-sm font-semibold text-gray-800">
                Loan Amount: {formatCurrency(loanAmount)}
              </label>
            </div>
            <div className="flex gap-3 items-center">
              <input
                type="range"
                min="10000"
                max="1000000"
                step="1000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="flex-1 h-2 bg-gradient-to-r from-green-200 to-green-400 rounded-lg appearance-none cursor-pointer slider"
              />
              <input
                type="number"
                value={loanAmount}
                onChange={(e) =>
                  handleInputChange(
                    e.target.value,
                    setLoanAmount,
                    10000,
                    1000000
                  )
                }
                className="w-28 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Down Payment */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-blue-600" />
                <label className="text-sm font-semibold text-gray-800">
                  Down Payment: {formatCurrency(downPayment)}
                </label>
              </div>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {((downPayment / loanAmount) * 100).toFixed(1)}%
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <input
                type="range"
                min="0"
                max={loanAmount}
                step="1000"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="flex-1 h-2 bg-gradient-to-r from-blue-200 to-blue-400 rounded-lg appearance-none cursor-pointer"
              />
              <input
                type="number"
                value={downPayment}
                onChange={(e) =>
                  handleInputChange(
                    e.target.value,
                    setDownPayment,
                    0,
                    loanAmount
                  )
                }
                className="w-28 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Tenure */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-purple-600" />
                <label className="text-sm font-semibold text-gray-800">
                  Tenure: {tenure} months
                </label>
              </div>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {(tenure / 12).toFixed(1)} years
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <input
                type="range"
                min="12"
                max="84"
                step="12"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="flex-1 h-2 bg-gradient-to-r from-purple-200 to-purple-400 rounded-lg appearance-none cursor-pointer"
              />
              <input
                type="number"
                value={tenure}
                onChange={(e) =>
                  handleInputChange(e.target.value, setTenure, 12, 84)
                }
                className="w-28 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Interest Rate */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Percent className="h-4 w-4 text-orange-600" />
              <label className="text-sm font-semibold text-gray-800">
                Interest Rate: {interestRate}% per annum
              </label>
            </div>
            <div className="flex gap-3 items-center">
              <input
                type="range"
                min="5"
                max="20"
                step="0.5"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="flex-1 h-2 bg-gradient-to-r from-orange-200 to-orange-400 rounded-lg appearance-none cursor-pointer"
              />
              <input
                type="number"
                value={interestRate}
                onChange={(e) =>
                  handleInputChange(e.target.value, setInterestRate, 5, 20)
                }
                className="w-28 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                step="0.5"
              />
            </div>
          </div>
        </div>

        {/* EMI Highlight */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Calculator className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-blue-900">
                Monthly EMI
              </h3>
            </div>
            <p className="text-3xl font-bold text-blue-700 mb-1">
              {formatCurrency(monthlyEMI)}
            </p>
            <p className="text-sm text-blue-600">
              Due every month for {tenure} months
            </p>
          </div>
        </div>

        {/* Payment Breakdown */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-3">
            <PieChart className="h-4 w-4 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-800">
              Payment Breakdown
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="text-sm font-medium text-green-800 mb-1">
                Principal Amount
              </h4>
              <p className="text-xl font-bold text-green-700">
                {formatCurrency(principal)}
              </p>
              <div className="mt-2 bg-green-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${principalPercentage}%` }}
                ></div>
              </div>
              <p className="text-xs text-green-600 mt-1">
                {principalPercentage.toFixed(1)}% of total
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h4 className="text-sm font-medium text-red-800 mb-1">
                Total Interest
              </h4>
              <p className="text-xl font-bold text-red-700">
                {formatCurrency(totalInterest)}
              </p>
              <div className="mt-2 bg-red-200 rounded-full h-2">
                <div
                  className="bg-red-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${interestPercentage}%` }}
                ></div>
              </div>
              <p className="text-xs text-red-600 mt-1">
                {interestPercentage.toFixed(1)}% of total
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="text-sm font-medium text-gray-800 mb-1">
              Total Amount Payable
            </h4>
            <p className="text-2xl font-bold text-gray-700">
              {formatCurrency(totalAmount)}
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Principal + Interest over {tenure} months
            </p>
          </div>
        </div>

        {/* Info Note */}
        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
          <div className="flex items-start gap-2">
            <Info className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-amber-800">
              <p className="font-medium mb-1">Important Note:</p>
              <p className="text-xs">
                This calculator provides an estimate based on the inputs
                provided. Actual EMI may vary based on processing fees,
                insurance, and other charges levied by the lender.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EMICalculator;
