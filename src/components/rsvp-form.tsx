'use client';

import { useState, useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
    name: z.string().min(2, "Primary name must be at least 2 characters"),
    guest: z.string().optional(),
});

export function RsvpForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const [isBringingGuest, setIsBringingGuest] = useState(false);
    const [hasRSVPed, setHasRSVPed] = useState(false);

    useEffect(() => {
        const hasRSVPed = localStorage.getItem("hasRSVPed");
        if (hasRSVPed) {
            setHasRSVPed(true);
        }
        if (!isBringingGuest) {
            form.setValue("guest", undefined);
        }
    }, [isBringingGuest, form]);

    function onSubmit(data: z.infer<typeof formSchema>) {
        localStorage.setItem("hasRSVPed", "true");

        // Update the state to show the thank you message
        setHasRSVPed(true);
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        });
    }

    if (hasRSVPed) {
        return (
            <div>
                <p>Thank you for RSVPing for our wedding!</p>
            </div>
        );
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <>
                            <FormItem>
                                <FormLabel>Primary Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your name" {...field} />
                                </FormControl>
                                <FormDescription>Your name as you'll find it on your table.</FormDescription>
                                <FormMessage />
                            </FormItem>
                            <FormItem>
                                <label>
                                    <input
                                        type="checkbox"
                                        onChange={() => {
                                            setIsBringingGuest(!isBringingGuest)
                                        }
                                        }
                                        checked={isBringingGuest}
                                    />{" "}
                                    Bringing a Guest
                                </label>
                            </FormItem>
                        </>
                    )}
                />
                {isBringingGuest && (
                    <FormField
                        control={form.control}
                        name="guest"
                        render={({ field }) => (
                            <>
                                <FormItem>
                                </FormItem>
                                <FormItem>
                                    <FormLabel>Guest Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Your guest name" {...field} name="guest" />
                                    </FormControl>
                                    <FormDescription>Your guest name as you'll find it on the table.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            </>
                        )}
                    />
                )}
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
