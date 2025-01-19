import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { VerifiedIcon } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/Button"
import AccountVerificationForm from "./AccountVerificationForm"


export const Profile = () => {
  const handleEnableTwoStepVerification = () => {
    console.log("2 step verification")
  }
  return (
    <div className="flex flex-col items-center mb-5">
      <div className="pt-10 w-full lg:w-[60%]">
        <Card>
          <CardHeader className="pb-9">
            <CardTitle>Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="lg:flex gap-32">
              <div className="space-y-7">
                <div className="flex">
                  <p className="w-[9rem]">Email : </p>
                  <p className="text-gray-500">test@abcd.com</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Full Name : </p>
                  <p className="text-gray-500">Adithya Pradeep</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Date of Birth : </p>
                  <p className="text-gray-500">25/09/1998</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Nationality : </p>
                  <p className="text-gray-500">Indian</p>
                </div>
              </div>
              <div className="space-y-7">
                <div className="flex">
                  <p className="w-[9rem]">Address : </p>
                  <p className="text-gray-500">306, XYZ Street, California</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">City : </p>
                  <p className="text-gray-500">Los Angeles</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Postcode : </p>
                  <p className="text-gray-500">342583</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Country : </p>
                  <p className="text-gray-500">India</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="mt-6">
          <Card className="w-full">
            <CardHeader className="pb-7">
              <div className="flex items-center gap-3">
                <CardTitle>2 Step Verification</CardTitle>
                {false ? <Badge className={"space-x-2 text-white bg-green-600"}>
                  <VerifiedIcon/>
                  <span>Enabled</span>
                </Badge> : <Badge className="bg-orange-500">Disabled</Badge>
                }
              </div>
            </CardHeader>
            <CardContent>
              <div>
                <Dialog>
                  <DialogTrigger>
                    <Button>Enable Two Factor Authentication</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Verify Your Account</DialogTitle>
                    </DialogHeader>
                    <AccountVerificationForm handleSubmit={handleEnableTwoStepVerification}/>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
