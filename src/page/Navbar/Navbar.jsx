import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export const Navbar = () => {
  return (
    <div className='px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex justify-between items-center'>
      <div className='flex items-center gap-3'>
        <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}