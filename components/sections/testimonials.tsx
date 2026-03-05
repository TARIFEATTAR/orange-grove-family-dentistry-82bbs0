"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  location: string
  quote: string
  avatar: string
  initials: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Orange, CA",
    quote: "Dr. Nishimura and his team have been incredible with our whole family. My kids actually look forward to their dental visits now! The office is modern and welcoming, and they explain everything in terms we can understand.",
    avatar: "https://placehold.co/400x400",
    initials: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Tustin, CA",
    quote: "The CEREC same-day crown technology is amazing. I walked in with a broken tooth and left with a perfect crown in just one visit. No temporary crowns, no multiple appointments. Exactly what I needed as a busy professional.",
    avatar: "https://placehold.co/400x400",
    initials: "MC"
  },
  {
    id: 3,
    name: "Lisa Rodriguez",
    location: "Villa Park, CA",
    quote: "I was nervous about bringing my 4-year-old to the dentist, but Orange Grove made it such a positive experience. The team was patient and gentle, and now she loves showing off her 'sparkly clean teeth' to everyone.",
    avatar: "https://placehold.co/400x400",
    initials: "LR"
  },
  {
    id: 4,
    name: "David Thompson",
    location: "Anaheim, CA",
    quote: "After years of avoiding the dentist, I finally found a practice that makes me feel comfortable. The comprehensive exam and treatment plan helped me understand exactly what I needed, and the payment options made it all affordable.",
    avatar: "https://placehold.co/400x400",
    initials: "DT"
  },
  {
    id: 5,
    name: "Amanda Foster",
    location: "Orange, CA",
    quote: "The cosmetic work Dr. Nishimura did on my smile exceeded my expectations. Professional, detailed, and the results are absolutely beautiful. I smile with confidence now thanks to Orange Grove Family Dentistry.",
    avatar: "https://placehold.co/400x400",
    initials: "AF"
  }
]

export function Testimonials() {
  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what families in Orange County 
            are saying about their experience at Orange Grove Family Dentistry.
          </p>
        </div>
        
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                        ))}
                      </div>
                      <blockquote className="text-lg text-neutral-700 italic leading-relaxed mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback className="bg-orange-100 text-orange-600">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                        <div className="text-sm text-neutral-500">{testimonial.location}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

export default Testimonials