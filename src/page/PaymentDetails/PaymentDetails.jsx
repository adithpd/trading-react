import React from 'react'
import {
  Card,
  CardHeader,
  CardContent, 
  CardTitle, 
  CardDescription
} from "@/components/ui/Card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Button
} from "@/components/ui/button"
import { PaymentDetailsForm } from './PaymentDetailsForm'

export const PaymentDetails = () => {
  return (
    <div className="px-20">
      <h1 className="text-3xl font-bold py-10">Payment Details</h1>
      {false?(<Card>
        <CardHeader>
          <CardTitle>
            Yes Bank
          </CardTitle>
          <CardDescription>
            A/C No&nbsp;&nbsp;:&nbsp;&nbsp;****************1651
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <p className="w-32">A/C Holder</p>
            <p className="text-gray-400">&nbsp;&nbsp;:&nbsp;&nbsp;Code with Adithya</p>
          </div>
          <div className="flex items-center">
            <p className="w-32">IFSC</p>
            <p className="text-gray-400">&nbsp;&nbsp;:&nbsp;&nbsp;YESB0000007</p>
          </div>
        </CardContent>
      </Card>):(
      <Dialog>
        <DialogTrigger>
          <Button className="py-6">Add payment details</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Payment Details</DialogTitle>
          </DialogHeader>
          <PaymentDetailsForm/>
        </DialogContent>
      </Dialog>
      )}
    </div>
  )
}
