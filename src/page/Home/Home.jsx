import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { StockChart } from './StockChart'
import { AssetTable } from './AssetTable';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import ethereumLogo from "@/assets/icons_custom/ethereum.svg"
import { DotIcon } from '@radix-ui/react-icons';
import { CrossIcon, MessageCircle } from 'lucide-react';


export const Home = () => {
    const [category, setCategory] = React.useState("all");
    const [inputValue, setInputValue] = React.useState("");
    const [isBotRelease, setIsBotRelease] = React.useState(false);

    const handleBotRelease = () => setIsBotRelease(!isBotRelease);

    const handleCategory = (value) => {
        setCategory(value)
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleKeyPress = (event) => {
        if (event.key == "Enter") {
            console.log(inputValue)
        }
        setInputValue("")
    }

    return (
        <div className="relative">
            <div className="lg:flex">
                <div className="lg:w-[50%] lg:border-r">
                    <div className="p-3 flex items-center gap-4">
                        <Button onClick={() => handleCategory("all")}
                            variant={category == "all" ? "default" : "outline"}
                            className="rounded-full">
                            All
                        </Button>
                        <Button onClick={() => handleCategory("top50")}
                            variant={category == "top50" ? "default" : "outline"}
                            className="rounded-full">
                            Top 50
                        </Button>
                        <Button onClick={() => handleCategory("topGainers")}
                            variant={category == "topGainers" ? "default" : "outline"}
                            className="rounded-full">
                            Top Gainers
                        </Button>
                        <Button onClick={() => handleCategory("topLosers")}
                            variant={category == "topLosers" ? "default" : "outline"}
                            className="rounded-full">
                            Top Losers
                        </Button>
                    </div>
                    <AssetTable />

                </div>
                <div className="hidden lg:block lg:w-[50%] p-5">
                    <StockChart />
                    <div className="flex gap-5 items-center">
                        <div>
                            <Avatar>
                                <AvatarImage src={ethereumLogo} className="h-7 w-7" />
                            </Avatar>
                        </div>
                        <div className="flex items-center gap-2">
                            <p>ETH</p>
                            <DotIcon className="text-gray-400" />
                            <p className="text-gray-400">Ethereum</p>
                            <div className="flex items-end gap-2">
                                <p className="text-xl font-bold">5464</p>
                            </div>
                            <p className="text-red-600">
                                <span>-13737222232.5782</span>
                                <span>(-0.29803%)</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="absolute bottom-5 right-5 z-40 flex flex-col justify-end items-end gap-2">
                {isBotRelease &&
                    <div className="rounded-md w-[20rem] md:w-[25rem] lg:w-[25rem] h-[70vh] bg-slate-900">
                        <div className="flex justify-between items-center border-b px-6 h-[12%]">
                            <p>Chat Bot</p>
                            <Button onClick={handleBotRelease} variant="ghost" size="icon">
                                <CrossIcon />
                            </Button>
                        </div>
                        <div className="h-[76%] flex flex-col overflow-y-auto gap-5 px-5 py-2 scroll-container">
                            <div className="self-start pb-5 w-auto">
                                <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto">
                                    <p>Hi Developer, Welcome to CoinBase</p>
                                </div>
                            </div>
                            {
                                [1, 1, 1, 1].map((item, index) =>
                                    <div key={index} className={`${index % 2 == 0 ? "self-start" : "self-end"} "pb-5 w-auto"`}>
                                        {index % 2 == 0 ?
                                            <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto">
                                                <p>Type your queries here!</p>
                                            </div>
                                            :
                                            <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto">
                                                <p>Price, Market Cap, etc....</p>
                                            </div>
                                        }
                                    </div>
                                )
                            }
                        </div>
                        <div className="h-[12%] border-t">
                            <Input className="w-full h-full order-none outline-none" placeholder="Enter your prompt" onClick={handleBotRelease} onChange={handleChange} value={inputValue} onKeyPress={handleKeyPress} />
                        </div>
                    </div>
                }
                <div className="relative w-[10rem] cursor-pointer group">
                    <Button onClick={handleBotRelease} className="w-full h-[2.5rem] gap-2 items-center">
                        <MessageCircle className="fill-[#1e293b] -rotate-90 stroke-none group-hover:fill-[#1a1a1a]" style={{ width: '20px', height: '20px' }} />
                        <span className="text-xl">Chat Bot</span>
                    </Button>
                </div>
            </section>
        </div>
    )
}
