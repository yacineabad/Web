import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
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
            <span className="text-primary">AY</span>
            <span>Abada Yassin</span>
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
            <Link href="#projects" className="text-sm font-medium hover:text-primary">
              Projects
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
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Abada Yassin</h1>
          <h2 className="text-xl font-medium text-primary">Automation Engineer</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Specializing in industrial automation and electrical machine systems with a passion for innovative
            solutions.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] overflow-hidden rounded-full border-4 border-primary">
            <Image
              src="/placeholder.svg?height=320&width=320"
              alt="Abada Yassin"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-12 md:py-24 lg:py-32">
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="mt-4 text-muted-foreground">
              I'm Abada Yassin, a 26-year-old Automation Engineer with a strong background in electrical machines and
              industrial automation systems.
            </p>
            <p className="mt-4 text-muted-foreground">
              With one year of professional experience, I've developed expertise in designing, implementing, and
              maintaining automated systems that improve efficiency and productivity.
            </p>
            <p className="mt-4 text-muted-foreground">
              I'm passionate about leveraging technology to solve complex industrial challenges and continuously
              expanding my knowledge in the rapidly evolving field of automation.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">Location</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">Email</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative h-[320px] w-[320px] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=320&width=320"
                alt="Abada Yassin working"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">My Skills</h2>
          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="technical">Technical Skills</TabsTrigger>
              <TabsTrigger value="soft">Soft Skills</TabsTrigger>
            </TabsList>
            <TabsContent value="technical" className="mt-6 space-y-8">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium">PLC Programming</h3>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium">Electrical Machine Systems</h3>
                    <span>90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium">SCADA Systems</h3>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium">Industrial Sensors & Actuators</h3>
                    <span>80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium">HMI Design</h3>
                    <span>70%</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="soft" className="mt-6 space-y-8">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium">Problem Solving</h3>
                    <span>95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium">Team Collaboration</h3>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium">Technical Documentation</h3>
                    <span>80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium">Project Management</h3>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium">Adaptability</h3>
                    <span>90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
              </div>
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
                <h3 className="text-xl font-bold">Automation Engineer</h3>
                <p className="text-primary font-medium">Electrical Machine Company</p>
                <p className="text-sm text-muted-foreground">Jan 2023 - Present</p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  <li>Designed and implemented automation solutions for industrial machinery</li>
                  <li>Programmed PLCs for various manufacturing processes</li>
                  <li>Maintained and troubleshot electrical control systems</li>
                  <li>Collaborated with cross-functional teams to optimize production efficiency</li>
                  <li>Developed technical documentation for automation systems</li>
                </ul>
              </div>
            </div>
            <div className="mb-12 relative">
              <div className="absolute -left-[41px] h-8 w-8 rounded-full bg-primary/30 flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-background"></div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Automation Engineering Intern</h3>
                <p className="text-primary/70 font-medium">Industrial Solutions Ltd.</p>
                <p className="text-sm text-muted-foreground">Jun 2022 - Dec 2022</p>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  <li>Assisted senior engineers in automation projects</li>
                  <li>Learned PLC programming and industrial control systems</li>
                  <li>Participated in electrical system installations</li>
                  <li>Conducted testing and quality assurance for automated systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-12 md:py-24 lg:py-32 bg-muted/30">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Automated Assembly Line"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Automated Assembly Line</h3>
                <p className="text-muted-foreground mb-4">
                  Designed and implemented an automated assembly line for electronic components, increasing production
                  efficiency by 35%.
                </p>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="data:image/jpeg;base64,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"
                  src="scada.png"
                  alt="SCADA System Implementation"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">SCADA System Implementation</h3>
                <p className="text-muted-foreground mb-4">
                  Developed and deployed a SCADA system for real-time monitoring and control of industrial processes.
                </p>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Motor Control System"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Motor Control System</h3>
                <p className="text-muted-foreground mb-4">
                  Engineered a precision motor control system for industrial applications, improving energy efficiency
                  by 25%.
                </p>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardContent>
            </Card>
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
                    <p className="font-medium">yacineabada26@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>

