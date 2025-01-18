import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DialogClose } from "@/components/ui/dialog"
import goldmanSachsLogo from "../../assets/icons_custom/goldman.svg"

export const WithdrawalForm = () => {
  const [amount, setAmount] = React.useState('');

  const handleChange = (e) => {
    setAmount(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(amount);
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
          <img className="h-14 w-14" src={goldmanSachsLogo} alt=""/>
          <div>
            <p className="text-xl font-bold">Goldman Sachs</p>
            <p className="text-xs">************1651</p>
          </div>
        </div>
      </div>
      <DialogClose className="w-full">
        <Button onClick={handleSubmit} className="w-full py-7 text-xl">
          Withdraw
        </Button>
      </DialogClose>
    </div>
  )
}
