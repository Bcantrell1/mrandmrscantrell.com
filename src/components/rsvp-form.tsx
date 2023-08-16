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

import { Checkbox } from "@/components/ui/checkbox";
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
        const rSVPed = localStorage.getItem("hasRSVPed");
        if (rSVPed) {
            setHasRSVPed(true);
        }
        if (!isBringingGuest) {
            form.setValue("guest", undefined);
        }
    }, [isBringingGuest, form]);

    async function onSubmit(data: z.infer<typeof formSchema>) {
        localStorage.setItem("hasRSVPed", "true");

        fetch(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/person`, {
            method: "POST",
            body: JSON.stringify({
                name: data.name,
                updatedAt: new Date().toISOString(),
                createdAt: new Date().toISOString(),
            }),
        });

        if (data.guest) {
            fetch(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/person`, {
                method: "POST",
                body: JSON.stringify({
                    name: data.guest,
                    updatedAt: new Date().toISOString(),
                    createdAt: new Date().toISOString(),
                }),
            });
        }

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
                <p>Thanks for the RSVP!</p>
            </div>
        );
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                                <FormDescription>Your name as you&apos;ll find it on your table.</FormDescription>
                                <FormMessage />
                            </FormItem>
                            <FormItem>
                                <Checkbox id="guest" 
                                    onCheckedChange={() => setIsBringingGuest(!isBringingGuest)}
                                    checked={isBringingGuest}
                                />
                                <label
                                    htmlFor="guest"
                                    className="text-sm ml-3 font-medium"
                                >
                                   Going to bring a guest?
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
                                    <FormDescription>Your guest&apos;s name as you&apos;ll find it on the table.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            </>
                        )}
                    />
                )}
                <Button type="submit" className="text-orange-700 font-semibold">Let&apos;s Party</Button>
            </form>
        </Form>
    );
}
