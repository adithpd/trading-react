import React from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export const AccountVerificationForm = () => {
  return (
    <div className="flex justify-center">
        <div className="space-y-5 mt-10 w-full">
            <div className="flex justify-between items-center">
                <p>Email :</p>
                <p>test@abcd.com</p>
                <Dialog>
                    <DialogTrigger>
                        <Button>Sent OTP</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Enter OTP</DialogTitle>
                        </DialogHeader>
                        <div className="py-5 flex gap-10 justify-center items-center"
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    </div>
  )
}
