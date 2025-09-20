import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  Server,
  Shield,
  Cloud,
  Network,
  Globe,
  Phone,
  Mail,
  MapPin,
  Cpu,
  Zap,
  Leaf,
} from "lucide-react";

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Textarea,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Badge,
} from "./components/ui.jsx";

const Container = ({ children }) => (
  <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">{children}</div>
);

const Stat = ({ value, label }) => (
  <div className="rounded-2xl border bg-white p-6 text-center shadow-sm">
    <div className="text-3xl font-semibold tracking-tight">{value}</div>
    <div className="mt-1 text-sm text-gray-600">{label}</div>
  </div>
);

const Feature = ({ icon: Icon, title, desc }) => (
  <Card>
    <CardHeader>
      <div className="flex items-center gap-3">
        <div className="rounded-xl border bg-blue-100 p-2">
          <Icon className="h-5 w-5 text-blue-600" />
        </div>
        <CardTitle>{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="text-sm text-gray-600">{desc}</CardContent>
  </Card>
);

const Nav = () => (
  <header className="sticky top-0 z-50 w-full border-b backdrop-blur bg-white/70">
    <Container>
      <div className="flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400" />
          <span className="text-sm font-semibold tracking-wide">
            DataLink Datacenters
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <a href="#solutions">Solutions</a>
          <a href="#specs">Facilities</a>
          <a href="#trust">Trust</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline">Talk to Sales</Button>
          <Button>Get a Quote</Button>
        </div>
      </div>
    </Container>
  </header>
);

const Hero = () => (
  <section
    id="home"
    className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
  >
    <Container>
      <div className="grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <Badge>Tier III+ Facilities</Badge>
          <h1 className="text-4xl font-bold md:text-5xl">
            Enterprise colocation & cloud—{" "}
            <span className="bg-gradient-to-br from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              built for uptime
            </span>
          </h1>
          <p className="max-w-xl text-lg text-gray-200">
            DataLink Datacenters delivers high-density power, carrier-neutral
            connectivity, and audited security so your workloads stay online.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="lg">Get a custom quote</Button>
            <Button size="lg" variant="outline">
              Explore solutions
            </Button>
          </div>
        </motion.div>
      </div>
    </Container>
  </section>
);

const Solutions = () => (
  <section id="solutions" className="border-t py-16 md:py-24">
    <Container>
      <h2 className="text-3xl font-semibold md:text-4xl">Solutions</h2>
      <div className="grid gap-6 md:grid-cols-3 mt-6">
        <Feature
          icon={Server}
          title="Colocation"
          desc="1/2 and full racks, cages, cross-connects, and remote hands."
        />
        <Feature
          icon={Cloud}
          title="Private Cloud"
          desc="VMware/KVM stacks, GPU nodes, and DRaaS with predictable economics."
        />
        <Feature
          icon={Network}
          title="Network & Interconnects"
          desc="Blend ISPs, IX peering, and cloud on-ramps to AWS/Azure/GCP."
        />
      </div>
    </Container>
  </section>
);

const Specs = () => (
  <section id="specs" className="border-t py-16 md:py-24">
    <Container>
      <h2 className="text-3xl font-semibold md:text-4xl">Facility Specs</h2>
      <div className="grid gap-6 md:grid-cols-2 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Power</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>2N UPS topology</li>
              <li>N+1 generators</li>
              <li>Dual power feeds</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              <li>24/7 manned</li>
              <li>Biometrics + mantrap</li>
              <li>CCTV with retention</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Container>
  </section>
);

const Trust = () => (
  <section id="trust" className="border-t py-16 md:py-24">
    <Container>
      <h2 className="text-3xl font-semibold md:text-4xl">Why DataLink</h2>
      <div className="grid gap-6 md:grid-cols-2 mt-6">
        <Stat value="99.999%" label="SLA Uptime" />
        <Stat value="24x7x365" label="Smart Hands" />
        <Stat value="<5ms" label="Regional latency*" />
        <Stat value=">10 Tbps" label="Network capacity" />
      </div>
    </Container>
  </section>
);

const Quote = () => (
  <section id="quote" className="border-t py-16 md:py-24">
    <Container>
      <h2 className="text-3xl font-semibold md:text-4xl">Request a Quote</h2>
      <Card className="mt-6">
        <CardContent className="space-y-4">
          <Input placeholder="Name" />
          <Input placeholder="Company" />
          <Input type="email" placeholder="Work email" />
          <Textarea placeholder="Tell us about racks, power, carriers..." rows={4} />
          <Button className="w-full">Submit</Button>
        </CardContent>
      </Card>
    </Container>
  </section>
);

const FAQ = () => (
  <section id="faq" className="border-t py-16 md:py-24">
    <Container>
      <h2 className="text-3xl font-semibold md:text-4xl">FAQ</h2>
      <Accordion>
        <AccordionItem>
          <AccordionTrigger>Can I bring my own carriers?</AccordionTrigger>
          <AccordionContent>
            Yes. We’re carrier-neutral and welcome your ASN and IP space.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Container>
  </section>
);

const Footer = () => (
  <footer className="border-t py-12 bg-gray-50">
    <Container>
      <p className="text-center text-sm text-gray-600">
        © {new Date().getFullYear()} DataLink Datacenters. All rights reserved.
      </p>
    </Container>
  </footer>
);

export default function DataLinkSite() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Nav />
      <Hero />
      <Solutions />
      <Specs />
      <Trust />
      <Quote />
      <FAQ />
      <Footer />
    </main>
  );
}
