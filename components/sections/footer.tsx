import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Facebook, Instagram, Youtube } from "lucide-react"

interface FooterProps {}

export function Footer({}: FooterProps) {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Orange Grove Family Dentistry</h3>
              <p className="text-neutral-300 leading-relaxed">
                Comprehensive dental care for families in Orange County. 
                Dr. Kyle Nishimura and our team are committed to your oral health.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="border-neutral-700 text-neutral-300 hover:bg-orange-500 hover:border-orange-500"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="border-neutral-700 text-neutral-300 hover:bg-orange-500 hover:border-orange-500"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="border-neutral-700 text-neutral-300 hover:bg-orange-500 hover:border-orange-500"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-3">
              <Button variant="link" className="text-neutral-300 hover:text-orange-400 p-0 h-auto font-normal justify-start">
                About Dr. Kyle
              </Button>
              <Button variant="link" className="text-neutral-300 hover:text-orange-400 p-0 h-auto font-normal justify-start">
                Patient Forms
              </Button>
              <Button variant="link" className="text-neutral-300 hover:text-orange-400 p-0 h-auto font-normal justify-start">
                Insurance & Financing
              </Button>
              <Button variant="link" className="text-neutral-300 hover:text-orange-400 p-0 h-auto font-normal justify-start">
                Membership Plan
              </Button>
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <nav className="space-y-3">
              <Button variant="link" className="text-neutral-300 hover:text-orange-400 p-0 h-auto font-normal justify-start">
                Emergency Dentistry
              </Button>
              <Button variant="link" className="text-neutral-300 hover:text-orange-400 p-0 h-auto font-normal justify-start">
                Cosmetic Dentistry
              </Button>
              <Button variant="link" className="text-neutral-300 hover:text-orange-400 p-0 h-auto font-normal justify-start">
                Dental Implants
              </Button>
              <Button variant="link" className="text-neutral-300 hover:text-orange-400 p-0 h-auto font-normal justify-start">
                Clear Aligners
              </Button>
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-neutral-300">
              <div>Orange, CA</div>
              <div>(714) 555-SMILE</div>
              <div>hello@orangegrovefamilydentistry.com</div>
              <div className="text-sm">
                Mon-Fri: 8AM-6PM<br />
                Saturday: 8AM-2PM<br />
                Sunday: Closed
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="bg-neutral-700 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-neutral-400 text-sm">
            © 2024 Orange Grove Family Dentistry. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <Button variant="link" className="text-neutral-400 hover:text-orange-400 p-0 h-auto text-sm">
              Privacy Policy
            </Button>
            <Button variant="link" className="text-neutral-400 hover:text-orange-400 p-0 h-auto text-sm">
              Terms of Service
            </Button>
            <div className="text-neutral-500 text-sm">
              Redesigned by <a href="https://asala.ai" className="text-orange-400 hover:text-orange-300">Asala.ai</a> — See what's possible for your business
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer