import DialogContent from "@/components/dialog-content"
import {
  AlertDialog,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen relative text-center p-24">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="absolute right-16 bottom-16" variant="outline">RSVP</Button>
        </AlertDialogTrigger>
        <DialogContent /> 
      </AlertDialog>
    </main>
  )
}
