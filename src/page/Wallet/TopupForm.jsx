import React from 'react'
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { DotFilledIcon } from '@radix-ui/react-icons'
import razorpayLogo from "../../assets/icons_custom/razorpay.svg"
import stripeLogo from "../../assets/icons_custom/stripe.svg"

export const TopupForm = () => {
  const [amount, setAmount] = React.useState('');
  const [paymentMethod, setPaymentMethod] = React.useState("RAZORPAY");
  
  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  }

  const handleChange = (e) => {
    setAmount(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(amount, paymentMethod);
  }

  return (
    <div className="pt-10 space-y-5">
      <div>
        <h1 className="pb-1">Enter Amount</h1>
        <Input onChange={handleChange} value={amount} className="py-7 text-lg" placeHolder="$9999"/>
      </div>
      <div>
        <h1 className="pb-1">Select Payment Method</h1>
        <RadioGroup onValueChange={(value) => handlePaymentMethodChange(value)} className="flex" defaultValue="RAZORPAY">
          <div className="flex items-center space-x-2 border p-3 px-5 rounded-md">
            <RadioGroupItem icon={DotFilledIcon} className="h-9 w-9" value="RAZORPAY" id="r1"/>
            <Label htmlFor="r1">
              <div className="bg-white rounded-md px-5 py-2 w-[8rem] h-[6.5rem] flex items-center justify-center">
                <img src={razorpayLogo} alt="" className="transform scale-[1.3]"/>
              </div>
            </Label>
          </div>
          <div className="flex items-center space-x-2 border p-3 px-5 rounded-md">
            <RadioGroupItem icon={DotFilledIcon} className="h-9 w-9" value="STRIPE" id="r1"/>
            <Label htmlFor="r1">
              <div className="bg-white rounded-md px-5 py-2 w-32">
                <img src={stripeLogo} alt="" className="transform scale-[0.8]"/>
              </div>
            </Label>
          </div>
        </RadioGroup>
      </div>
      <Button onClick={handleSubmit} className="w-full py-7">
        Submit
      </Button>
    </div>
  )
}
