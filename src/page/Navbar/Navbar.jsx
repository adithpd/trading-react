import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { DragHandleHorizontalIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import coinbaseLogo1 from "@/assets/icons_custom/coinbase_logo.svg"
import coinbaseLogo2 from "@/assets/icons_custom/coinbase_text.svg"
import { Sidebar } from './Sidebar'


export const Navbar = () => {
  return (
    <div className="px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="h-11 w-11">
              <DragHandleHorizontalIcon className="h-11 w-11 !size-7" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72 border-r-0 flex-col justify-center">
          <SheetHeader>
            <SheetTitle>
              <div className="text-3xl flex justify-center items-center gap-2">
                <Avatar>
                  <AvatarImage src={coinbaseLogo1} className="h-14 w-14" />
                </Avatar>
                <Avatar>
                  <AvatarImage src={coinbaseLogo2} className="h-12 w-25" />
                </Avatar>
              </div>
            </SheetTitle>
          </SheetHeader>
          <Sidebar/>
        </SheetContent>
        </Sheet>
        <p className="text-sm lg:text-base cursor-pointer">
          Coinbase Platform
        </p>
        <div className="p-0 ml-9">
          <Button variant="outline" className="flex items-center gap-3">
            <MagnifyingGlassIcon>
            </MagnifyingGlassIcon>
            <span>Search</span>
          </Button>
        </div>
      </div>
      <div>
        <Avatar>
          <AvatarFallback>
            A
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}