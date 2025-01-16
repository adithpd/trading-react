import React from 'react'
import { Input } from "@/components/ui/input"


export const WithdrawalForm = () => {
  const [amount, setAmount] = React.useState('');

  const handleChange = (e) => {
    setAmount(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(amount, paymentMethod);
  }

  return (
    <div className="pt-10 space-y-5">
      <div className="flex justify-between items-center rounded-md bg-slate-900 text-xl font-bold px-5 py-4">
        <p>Available Balance</p>
        <p>$9000</p>
      </div>
      <div className="flex flex-col items-center">
        <h1>Enter Withdrawal Amount</h1>
        <div className="flex items-center justify-center">
          <Input onChange={handleChange} value={amount} className="withdrawalInput py-7 border-none outline-none focus:outline-none px-0 text-2xl text-center" placeholder="$99999" type="number"/>
        </div>
      </div>
      <div>
        <p className="pb-2">Transfer To</p>
        <div className="flex items-center gap-5 border px-5 py-2 rounded-md">
          <img className="h-8 w-8" src="" alt=""/>
        </div>
        <p className="text-xl font-bold">Barclays</p>
      </div>
    </div>
  )
}
