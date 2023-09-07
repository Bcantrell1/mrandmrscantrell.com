import DialogContent from "@/components/dialog-content"
import {
  AlertDialog,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Hero from "@/components/hero";
import GoogleMap from "@/components/google-maps";
import Timeline from "@/components/time-line";
import WeddingDetails from "@/components/wed-details";
import MoonFund from "@/components/moon-fund";

export default function Home() {
  return (
    <main className="flex flex-col relative h-full text-center">
      <Hero />
      <Timeline />
      <WeddingDetails />
      <GoogleMap />
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div className="fixed cursor-pointer z-20 right-16 top-10">
            <div className="relative shadow-xl shadow-orange-500/75 transition-transform duration-200 ease-in-out inline-flex items-center justify-center px-10 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-orange-800 rounded-lg group">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-900 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative">RSVP</span>
            </div>
          </div>
        </AlertDialogTrigger>
        <DialogContent />
      </AlertDialog>
    </main>
  )
}
