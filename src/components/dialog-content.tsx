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
        <AlertDialogContent >
            {hasRSVPed ? (
                <div className="relative">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-center">Thanks for RSVPing!</AlertDialogTitle>
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
                        <AlertDialogTitle>Thanks for considering to RSVP for our wedding!</AlertDialogTitle>
                        <AlertDialogDescription className="text-center">
                            We look forward to seeing you there!
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <RsvpForm />
                    <AlertDialogFooter>
                        <AlertDialogCancel>X</AlertDialogCancel>
                    </AlertDialogFooter>
                </div>
            )}
        </AlertDialogContent>
    );
}
