import React from "react"
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

export const AssetTable = () => {
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Coin</TableHead>
                        <TableHead>Symbol</TableHead>
                        <TableHead>Volume</TableHead>
                        <TableHead>Market Cap</TableHead>
                        <TableHead>24h</TableHead>
                        <TableHead className="text-right">Price</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {[1,1,1,1,1,1,1,1,1,1,1,1,1].map((item,index) => 
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
                            <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}
