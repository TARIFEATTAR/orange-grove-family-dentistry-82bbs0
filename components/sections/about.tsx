import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Heart, Star, Users, Award, Clock } from "lucide-react"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  credentials: string[]
  bio: string
}

interface ValueProps {
  icon: React.ReactNode
  title: string
  description: string
}

interface StatProps {
  number: string
  label: string
}

const teamMembers: TeamMemberProps[] = [
  {
    name: "Dr. Kyle Nishimura",
    role: "Founding Dentist",
    image: "https://placehold.co/400x400",
    credentials: ["DDS", "Member ADA", "CEREC Certified"],
    bio: "Dr. Nishimura brings over 8 years of experience in comprehensive family dentistry. His gentle approach and commitment to continuing education ensures patients receive the most advanced, comfortable care available."
  },
  {
    name: "Sarah Chen",
    role: "Dental Hygienist",
    image: "https://placehold.co/400x400",
    credentials: ["RDH", "Local Anesthesia Certified"],
    bio: "Sarah's expertise in preventive care and patient education helps families maintain optimal oral health between visits. Her warm demeanor puts even the most anxious patients at ease."
  },
  {
    name: "Maria Rodriguez",
    role: "Practice Manager",
    image: "https://placehold.co/400x400",
    credentials: ["Certified Dental Assistant", "Insurance Specialist"],
    bio: "Maria ensures every aspect of your visit runs smoothly, from scheduling to insurance coordination. Her bilingual skills help us serve our diverse Orange County community."
  }
]

const coreValues: ValueProps[] = [
  {
    icon: <Heart className="h-8 w-8 text-orange-500" />,
    title: "Gentle, Compassionate Care",
    description: "We believe dental care should never be intimidating. Our patient-centered approach prioritizes your comfort and creates positive experiences for the whole family."
  },
  {
    icon: <Star className="h-8 w-8 text-green-500" />,
    title: "Clinical Excellence",
    description: "Combining advanced technology like CEREC same-day crowns with evidence-based techniques to deliver superior results in a comfortable, modern environment."
  },
  {
    icon: <Users className="h-8 w-8 text-blue-500" />,
    title: "Family-Focused Approach",
    description: "From toddler's first cleaning to grandparent's implants, we're equipped to serve every generation with specialized care tailored to each life stage."
  }
]

const practiceStats: StatProps[] = [
  { number: "500+", label: "Happy Families Served" },
  { number: "8+", label: "Years of Excellence" },
  { number: "4.9★", label: "Average Patient Rating" },
  { number: "95%", label: "Patient Retention Rate" }
]

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="bg-orange-100 text-orange-800 px-3 py-1 mb-4">
            About Our Practice
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Meet the Team Behind Your Family's Smiles
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            At Orange Grove Family Dentistry, we're more than just a dental practice—we're your 
            partners in maintaining lifelong oral health for every member of your family.
          </p>
        </div>

        {/* Practice Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {practiceStats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-neutral-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold text-neutral-900 mb-4">
              Our Experienced Team
            </h3>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Every team member is dedicated to providing exceptional care and creating positive 
              dental experiences for patients of all ages.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-semibold text-neutral-900 mb-1">
                      {member.name}
                    </h4>
                    <p className="text-orange-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {member.credentials.map((credential, credIndex) => (
                        <Badge key={credIndex} variant="outline" className="text-xs">
                          {credential}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold text-neutral-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              These principles guide everything we do and ensure you receive the highest 
              quality dental care in a welcoming environment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-neutral-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-semibold text-neutral-900 mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                To provide comprehensive, gentle dental care that builds lasting relationships 
                with families throughout Orange County. We combine modern technology with 
                personalized attention to ensure every patient feels comfortable, informed, 
                and confident in their oral health journey.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-neutral-700">Patient-centered care for all ages</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-neutral-700">State-of-the-art technology and techniques</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-neutral-700">Transparent communication and education</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-neutral-700">Convenient scheduling and insurance support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden">
                <Image
                  src="https://placehold.co/600x600"
                  alt="Orange Grove Family Dentistry office interior"
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Award className="h-6 w-6" />
                  <div>
                    <div className="font-semibold">Excellence Award</div>
                    <div className="text-sm opacity-90">2023 Patient Choice</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 lg:p-12 text-white">
          <h3 className="text-3xl font-semibold mb-4">
            Ready to Join Our Dental Family?
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Experience the difference personalized, gentle dental care can make. 
            Schedule your consultation today and discover why families throughout 
            Orange County trust us with their smiles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-neutral-100 px-8 py-4"
              onClick={() => window.open('https://cal.com/asala', '_blank')}
            >
              Schedule Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10 px-8 py-4"
            >
              Call (714) 555-SMILE
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About