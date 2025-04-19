import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <span className="text-primary">YA</span>
            <span>Yacine Abada</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary">
              Skills
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary">
              Experience
            </Link>
            <Link href="#education" className="text-sm font-medium hover:text-primary">
              Education
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button>Download CV</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-12 md:py-24 lg:py-32 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">YACINE ABADA</h1>
          <h2 className="text-xl font-medium text-primary">Automation and Industrial Computing Engineer</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Specializing in industrial automation, electrical engineering, and machine systems with a passion for
            innovative solutions.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#experience">View Experience</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] overflow-hidden rounded-full border-4 border-primary">
            <Image src="/images/yacine.jpg" alt="Yacine Abada" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-12 md:py-24 lg:py-32">
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="mt-4 text-muted-foreground">
              I'm Yacine Abada, a 26-year-old Automation and Industrial Computing Engineer with a strong background in
              electrical engineering.
            </p>
            <p className="mt-4 text-muted-foreground">
              As a recent graduate with a Master's degree in Automation and Industrial Computing, I am looking for
              opportunities that will allow me to enrich my professional career, acquire new skills, and continue to
              evolve.
            </p>
            <p className="mt-4 text-muted-foreground">
              I'm dynamic and passionate about leveraging technology to solve complex industrial challenges and
              continuously expanding my knowledge in the rapidly evolving field of automation.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">Blida, Algeria, Adl, ouled-yaich</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">Yacineabada26@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">+213549108529</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative h-[320px] w-[320px] overflow-hidden rounded-lg">
              <Image src="/images/yacine.jpg" alt="Yacine Abada" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">My Skills</h2>
          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="technical">Technical Skills</TabsTrigger>
              <TabsTrigger value="languages">Languages</TabsTrigger>
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
            </TabsList>
            <TabsContent value="technical" className="mt-6 space-y-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <h3 className="font-medium">C/C++</h3>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <h3 className="font-medium">Python</h3>
                      <span>80%</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <h3 className="font-medium">MATLAB</h3>
                      <span>75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <h3 className="font-medium">CCNA-CISCO</h3>
                      <span>70%</span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <h3 className="font-medium">Arduino Programming</h3>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <h3 className="font-medium">Siemens Tia Portal</h3>
                      <span>90%</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <h3 className="font-medium">GE Proficy Machine Edition</h3>
                      <span>80%</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <h3 className="font-medium">Siemens WinCC</h3>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="languages" className="mt-6 space-y-8">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium">Arabic</h3>
                    <span>Native</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium">English</h3>
                    <span>Professional</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium">French</h3>
                    <span>Professional</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="certifications" className="mt-6 space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Electrical Cabinet Wiring Training</h3>
                  <p className="text-primary font-medium mb-2">Sonaltech</p>
                  <p className="text-muted-foreground">
                    Learned to read control circuit diagrams and apply them in practical electrical cabinet wiring.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container py-12 md:py-24 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Work Experience
          </h2>
          <div className="relative border-l border-primary pl-8 ml-4">
            <div className="mb-12 relative">
              <div className="absolute -left-[41px] h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-background"></div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Maintenance Technician</h3>
                <p className="text-primary font-medium">SALD COMPANY</p>
                <p className="text-sm text-muted-foreground">Nov 2024 - May 2025</p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  <li>Performed preventive and corrective maintenance (electrical and mechanical)</li>
                  <li>Troubleshot and repaired electrical systems and components</li>
                  <li>Conducted regular inspections to identify potential issues</li>
                  <li>Documented maintenance activities and created maintenance reports</li>
                </ul>
              </div>
            </div>
            <div className="mb-12 relative">
              <div className="absolute -left-[41px] h-8 w-8 rounded-full bg-primary/80 flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-background"></div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Machine Operator</h3>
                <p className="text-primary font-medium">ACG COMPANY</p>
                <p className="text-sm text-muted-foreground">Feb 2024 - Sep 2025</p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  <li>Programmed numbers for use of CNC machines to perform maintenance work</li>
                  <li>Operated and monitored CNC machinery during production processes</li>
                  <li>Ensured quality control and adherence to safety protocols</li>
                </ul>
              </div>
            </div>
            <div className="mb-12 relative">
              <div className="absolute -left-[41px] h-8 w-8 rounded-full bg-primary/60 flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-background"></div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Machine Operator</h3>
                <p className="text-primary font-medium">GICA CEMENT COMPANY</p>
                <p className="text-sm text-muted-foreground">Nov 2022 - Jun 2023</p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  <li>Drew plans and handled printing tasks</li>
                  <li>Completed practical training for Master's Degree graduation thesis projects</li>
                  <li>Regulated elevator power according to feed flow using PCS7 software</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="container py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Education</h2>
          <div className="relative border-l border-primary pl-8 ml-4">
            <div className="mb-12 relative">
              <div className="absolute -left-[41px] h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-background"></div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Master's Degree, Automation and Industrial Computing</h3>
                <p className="text-primary font-medium">University of Saad Dahleb-Blida 1</p>
                <p className="text-sm text-muted-foreground">2020 - 2022</p>
              </div>
            </div>
            <div className="mb-12 relative">
              <div className="absolute -left-[41px] h-8 w-8 rounded-full bg-primary/80 flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-background"></div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Bachelor's Degree, Automation</h3>
                <p className="text-primary font-medium">University of Saad Dahleb-Blida 1</p>
                <p className="text-sm text-muted-foreground">2017 - 2020</p>
              </div>
            </div>
            <div className="mb-12 relative">
              <div className="absolute -left-[41px] h-8 w-8 rounded-full bg-primary/60 flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-background"></div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">High School Certificate, Experimental Sciences</h3>
                <p className="text-primary font-medium">Rabeh Bitat High School</p>
                <p className="text-sm text-muted-foreground">2014 - 2017</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-12 md:py-24 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Get In Touch
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">Yacineabada26@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+213549108529</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Blida, Algeria, Adl, ouled-yaich</p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  <Link
                    href="https://www.linkedin.com/in/yacine-abada-4a29a3252/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-primary" />
                  </Link>
                  <Link
                    href="#"
                    className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Github className="h-5 w-5 text-primary" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="What would you like to discuss?"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="Your message"
                ></textarea>
              </div>
              <Button className="w-full">Send Message</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/40">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2024 Yacine Abada. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
