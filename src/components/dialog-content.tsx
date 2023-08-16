'use client';

import {
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { RsvpForm } from "./rsvp-form";

import { useState, useEffect } from "react";

export default function DialogContent() {
    const [hasRSVPed, setHasRSVPed] = useState(false);

    useEffect(() => {
        const hasRSVPed = localStorage.getItem("hasRSVPed");
        if (hasRSVPed) {
            setHasRSVPed(true);
        }
    }, []);

    return (
        <AlertDialogContent className="border-orange-900 rounded-xl border-4 p-5">
            {hasRSVPed ? (
                <div className="relative">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-center text-xl">Thanks for the RSVP!</AlertDialogTitle>
                        <AlertDialogDescription className="text-center">
                            We look forward to seeing you there!
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className="absolute top-0 right-0">
                        <AlertDialogCancel>X</AlertDialogCancel>
                    </AlertDialogFooter>
                </div>
            ) : (
                <div>
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-center text-xl">Thanks for considering to RSVP for our wedding!</AlertDialogTitle>
                        <AlertDialogDescription className="text-center pb-3">
                            We ask that you please bring no more than a single guest.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <RsvpForm />
                    <AlertDialogFooter className="absolute bottom-4 right-4">
                        <AlertDialogCancel>X</AlertDialogCancel>
                    </AlertDialogFooter>
                </div>
            )}
        </AlertDialogContent>
    );
}
