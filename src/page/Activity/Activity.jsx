import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarImage } from "@radix-ui/react-avatar"
import bitcoinLogo from "@/assets/icons_custom/bitcoin.svg"


export const Activity = () => {
  return (
    <div className="p-5 lg:px-20">
      <h1 className="font-bold text-3xl pb-5">Activity</h1>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="py-5">Date & Time</TableHead>
            <TableHead>Trading Pair</TableHead>
            <TableHead>Buy Price</TableHead>
            <TableHead>Sell Price</TableHead>
            <TableHead>Order Type</TableHead>
            <TableHead className="">Profit/Loss</TableHead>
            <TableHead className="text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) =>
            <TableRow key={index}>
              <TableCell>
                  <p>2024/05/31</p>
                  <p className="text-gray-400">12:39:32</p>
              </TableCell>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className="-z-50">
                  <AvatarImage src={bitcoinLogo} className="h-8 w-8" />
                </Avatar>
                <span>BitCoin</span>
              </TableCell>
              <TableCell>$150</TableCell>
              <TableCell className="">$250.00</TableCell>
              <TableCell>BUY</TableCell>
              <TableCell>+1002</TableCell>
              <TableCell className="text-right">
                345
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
