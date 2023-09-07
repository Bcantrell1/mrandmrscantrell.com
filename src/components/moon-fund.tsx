import Link from "next/link";
import { Button } from "./ui/button";

export default function MoonFund() {      
    return (
        <Button asChild>
            <Link href="https://buy.stripe.com/fZeg2N0CNfNLdLq000" className="m-10 bg-orange-500">Wedding Fund!</Link>
        </Button>
    )
}
