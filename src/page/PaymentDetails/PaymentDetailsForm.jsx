import React from 'react'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
  import { Button } from "@/components/ui/button"
  import {
    DialogClose,
  } from "@/components/ui/dialog"
import { useForm } from 'react-hook-form'

export const PaymentDetailsForm = () => {
    const form = useForm({
        resolver: "",
        defaultValues:{
            accountHolderName:"",
            ifsc:"",
            accountNumber:"",
            bankName:""
        }
    })

    const onSubmit=(data) => {
        console.log(data)
    }

    return (
        <div className="px-10 py-2">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField 
                    control={form.control} 
                    name="accountHolderName"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>AccountHolderName</FormLabel>
                            <FormControl>
                                <Input 
                                name="accountHolderName"
                                className="border w-full border-gray-700 p-5"
                                placeholder="Code with Adithya" {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                    />

                    <FormField 
                    control={form.control} 
                    name="ifsc"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>IFSC Code</FormLabel>
                            <FormControl>
                                <Input 
                                name="ifsc"
                                className="border w-full border-gray-700 p-5"
                                placeholder="CODEADI70001" {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                    />

                    <FormField 
                    control={form.control} 
                    name="accountNumber"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Account Number</FormLabel>
                            <FormControl>
                                <Input 
                                name="accountNumber"
                                className="border w-full border-gray-700 p-5"
                                placeholder="**************5964" {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                    />

                    <FormField 
                    control={form.control} 
                    name="confirmAccountNumber"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Confirm Account Number</FormLabel>
                            <FormControl>
                                <Input 
                                name="confirmAccountNumber"
                                className="border w-full border-gray-700 p-5"
                                placeholder="**************5964" {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                    />

                    <FormField 
                    control={form.control} 
                    name="bankName"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Bank Name</FormLabel>
                            <FormControl>
                                <Input 
                                name="CODA"
                                className="border w-full border-gray-700 p-5"
                                placeholder="Bank Name" {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                    />
                    <DialogClose className="w-full">
                        <Button type="submit" className="w-full py-5">
                            Submit
                        </Button>
                    </DialogClose>
                </form>
            </Form>
        </div>
    )
}
