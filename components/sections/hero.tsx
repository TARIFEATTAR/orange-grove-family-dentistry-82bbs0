import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface HeroProps {
  className?: string
}

function Hero({ className }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-orange-50 py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-orange-100 text-orange-800 px-3 py-1">
                Serving Orange County Families Since 2015
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 leading-tight">
                Your Family's Dental Health Journey Starts Here
              </h1>
              <p className="text-lg text-neutral-600 leading-relaxed max-w-xl">
                Dr. Kyle Nishimura and our caring team combine modern technology with gentle, 
                personalized care that makes every visit comfortable for the whole family.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
                onClick={() => window.open('https://cal.com/asala', '_blank')}
              >
                Schedule Your Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-orange-200 text-orange-700 hover:bg-orange-50 px-8 py-4 text-lg"
              >
                Learn About Our Services
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-neutral-900">500+</div>
                <div className="text-sm text-neutral-600">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neutral-900">8+</div>
                <div className="text-sm text-neutral-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neutral-900">4.9★</div>
                <div className="text-sm text-neutral-600">Patient Rating</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-green-100">
              <Image
                src="https://placehold.co/600x600"
                alt="Dr. Kyle Nishimura at Orange Grove Family Dentistry"
                width={600}
                height={600}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
              <div className="text-sm font-medium text-neutral-900">Next Available</div>
              <div className="text-orange-600 font-semibold">Tomorrow 2:00 PM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero }
export default Hero