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
import { Button } from '@/components/ui/button';
import { BookmarkFilledIcon } from '@radix-ui/react-icons';


export const Watchlist = () => {
  const handleRemoveToWatchlist=(value)=>{
    console.log(value);
  }

  return (
    <div className="p-5 lg:px-20">
      <h1 className="font-bold text-3xl pb-5">Watchlist</h1>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="py-5">Coin</TableHead>
            <TableHead>Symbol</TableHead>
            <TableHead>Volume</TableHead>
            <TableHead>Market Cap</TableHead>
            <TableHead>24h</TableHead>
            <TableHead className="">Price</TableHead>
            <TableHead className="text-right text-red-600">Remove</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) =>
            <TableRow key={index}>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className="-z-50">
                  <AvatarImage src={bitcoinLogo} className="h-8 w-8" />
                </Avatar>
                <span>BitCoin</span>
              </TableCell>
              <TableCell>BTC</TableCell>
              <TableCell>1010102022202</TableCell>
              <TableCell>1010102022202</TableCell>
              <TableCell>1010102022202</TableCell>
              <TableCell className="">$250.00</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" onClick={() => handleRemoveToWatchlist(item.id)} size="icon" className="h-10 w-10">
                    <BookmarkFilledIcon className="h-6 w-6"/>
                </Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
