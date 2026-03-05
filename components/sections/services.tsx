import { AlertCircle, Shield, Smile, RefreshCw, AlignLeft, Plus } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface Service {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

const services: Service[] = [
  {
    id: 'emergency',
    title: 'Emergency Dentistry',
    description: 'Immediate care for dental emergencies. Same-day appointments available for urgent dental needs.',
    icon: <AlertCircle className="w-8 h-8 text-orange-600" />
  },
  {
    id: 'preventative',
    title: 'Preventative Care',
    description: 'Regular checkups, cleanings, and preventative treatments to keep your family healthy.',
    icon: <Shield className="w-8 h-8 text-orange-600" />
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    description: 'Teeth whitening, veneers, and smile makeovers to enhance your natural beauty.',
    icon: <Smile className="w-8 h-8 text-orange-600" />
  },
  {
    id: 'restorative',
    title: 'Restorative Dentistry',
    description: 'Crowns, bridges, and fillings to restore function and aesthetics to damaged teeth.',
    icon: <RefreshCw className="w-8 h-8 text-orange-600" />
  },
  {
    id: 'aligners',
    title: 'Clear Aligners',
    description: 'Discreet orthodontic treatment to straighten teeth without traditional braces.',
    icon: <AlignLeft className="w-8 h-8 text-orange-600" />
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    description: 'Permanent tooth replacement solutions that look and feel like natural teeth.',
    icon: <Plus className="w-8 h-8 text-orange-600" />
  }
]

export function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Comprehensive Dental Care for Your Family
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            From routine cleanings to advanced cosmetic procedures, we offer complete 
            dental services using the latest technology in a comfortable environment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 p-0 font-medium"
                >
                  Learn More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services