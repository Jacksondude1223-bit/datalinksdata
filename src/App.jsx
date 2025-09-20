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

// shadcn/ui
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

// Simple helper components
const Container = ({ children }) => (
  <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">{children}</div>
);

const Stat = ({ value, label }) => (
  <div className="rounded-2xl border bg-card p-6 text-center shadow-sm">
    <div className="text-3xl font-semibold tracking-tight">{value}</div>
    <div className="mt-1 text-sm text-muted-foreground">{label}</div>
  </div>
);

const Feature = ({ icon: Icon, title, desc }) => (
  <Card className="h-full rounded-2xl shadow-sm">
    <CardHeader>
      <div className="flex items-center gap-3">
        <div className="rounded-xl border bg-primary/10 p-2">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="pt-0 text-sm text-muted-foreground">{desc}</CardContent>
  </Card>
);

const Nav = () => (
  <header className="sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <Container>
      <div className="flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-primary to-primary/60" />
          <span className="text-sm font-semibold tracking-wide">DataLink Datacenters</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <a href="#solutions" className="text-muted-foreground hover:text-foreground">Solutions</a>
          <a href="#specs" className="text-muted-foreground hover:text-foreground">Facilities</a>
          <a href="#trust" className="text-muted-foreground hover:text-foreground">Trust</a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" asChild className="hidden md:inline-flex">
            <a href="#contact">Talk to Sales</a>
          </Button>
          <Button asChild>
            <a href="#quote">Get a Quote</a>
          </Button>
        </div>
      </div>
    </Container>
  </header>
);

const Hero = () => (
  <section id="home" className="relative overflow-hidden">
    <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/20 to-transparent blur-3xl" />
    <Container>
      <div className="grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <Badge className="rounded-full">Tier III+ Facilities</Badge>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Enterprise colocation & cloud—
            <span className="bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent"> built for uptime</span>
          </h1>
          <p className="max-w-xl text-base text-muted-foreground md:text-lg">
            DataLink Datacenters delivers high‑density power, carrier‑neutral connectivity, and audited security so your workloads stay online and performant.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="lg" asChild>
              <a href="#quote">Get a custom quote</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#solutions">Explore solutions</a>
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 pt-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Shield className="h-4 w-4" /> SOC 2 Type II</div>
            <div className="flex items-center gap-2"><Leaf className="h-4 w-4" /> 100% renewable options</div>
            <div className="flex items-center gap-2"><Zap className="h-4 w-4" /> 99.999% SLA</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          {/* Decorative rack card */}
          <Card className="rounded-3xl border-0 bg-gradient-to-b from-background to-muted/40 shadow-xl ring-1 ring-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base text-muted-foreground">
                <Server className="h-5 w-5" /> Typical Rack Build (Example)
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4 text-sm">
              {[
                { k: "Power", v: "5–15kW per rack" },
                { k: "Cooling", v: "Hot/cold aisle, CRAH/CRAC" },
                { k: "Connectivity", v: "Carrier‑neutral, IX access" },
                { k: "Security", v: "Biometric + mantrap" },
                { k: "Compliance", v: "SOC2, ISO 27001" },
                { k: "Support", v: "24x7x365 NOC" },
              ].map((item) => (
                <div key={item.k} className="rounded-xl border bg-card p-4">
                  <div className="text-xs uppercase text-muted-foreground">{item.k}</div>
                  <div className="mt-1 font-medium">{item.v}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Container>
  </section>
);

const Solutions = () => (
  <section id="solutions" className="border-t py-16 md:py-24">
    <Container>
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Solutions</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Flexible footprints and on‑ramps to meet you where you are—rack to row to cage.
          </p>
        </div>
        <div className="hidden gap-2 md:flex">
          <Badge variant="secondary">Carrier‑neutral</Badge>
          <Badge variant="secondary">High‑density</Badge>
          <Badge variant="secondary">Low‑latency</Badge>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Feature
          icon={Server}
          title="Colocation"
          desc="1/2 and full racks, private cages, cross‑connects, and remote hands. Scale from a single rack to dedicated suites."
        />
        <Feature
          icon={Cloud}
          title="Private Cloud"
          desc="Managed VMware/KVM stacks, bare‑metal, GPU‑ready nodes, and DRaaS with predictable economics."
        />
        <Feature
          icon={Network}
          title="Network & Interconnects"
          desc="Blend ISPs, IX peering, L2/L3 paths, and cloud on‑ramps to AWS/Azure/GCP. BYO ASN welcome."
        />
      </div>
    </Container>
  </section>
);

const Specs = () => (
  <section id="specs" className="border-t py-16 md:py-24">
    <Container>
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Facility Specs</h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Built for reliability, efficiency, and security—validated by third‑party audits.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { icon: Cpu, label: "Power", items: ["2N UPS topology", "+ N+1 generators", "Dual power feeds"] },
              { icon: Zap, label: "Cooling", items: ["Hot/cold aisle", "In‑row & perimeter", "Continuous monitoring"] },
              { icon: Shield, label: "Security", items: ["24/7 manned", "Biometrics & mantrap", "CCTV with retention"] },
              { icon: Globe, label: "Connectivity", items: ["Multiple carriers", "Internet Exchanges", "Cloud on‑ramps"] },
            ].map(({ icon: Icon, label, items }) => (
              <Card key={label} className="rounded-2xl shadow-sm">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-base">{label}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {items.map((i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 text-primary" />
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Certifications & Compliance</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {["SOC 2 Type II", "ISO/IEC 27001", "PCI‑DSS ready", "HIPAA‑friendly", "Tier III design", "Green power options"].map(
              (tag) => (
                <div key={tag} className="flex items-center gap-2 rounded-xl border bg-card p-4">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-sm">{tag}</span>
                </div>
              ),
            )}
          </div>
          <div className="mt-6 rounded-2xl border bg-card p-6">
            <h4 className="font-medium">Supported Densities</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Standard racks 5–10kW; high‑density pods 15–40kW+ with containment and supplemental cooling.
            </p>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

const Trust = () => (
  <section id="trust" className="border-t py-16 md:py-24">
    <Container>
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Why DataLink</h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Our operations team and on‑site NOC keep your workloads online with proactive monitoring and rapid response.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <Stat value="99.999%" label="SLA Uptime" />
            <Stat value="24x7x365" label="Smart Hands" />
            <Stat value="< 5 ms" label="Regional latency*" />
            <Stat value="> 10 Tbps" label="Network capacity" />
          </div>
          <p className="mt-2 text-xs text-muted-foreground">*Latency varies by market and provider.</p>
        </div>
        <div className="rounded-3xl border bg-card p-6 shadow-sm">
          <h3 className="text-xl font-semibold">Sustainability</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Efficiency‑first design with optimized PUE, free‑cooling where available, and renewable energy options.
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {["Renewable energy purchasing", "High‑efficiency cooling", "Recycling & e‑waste programs"].map((i) => (
              <li key={i} className="flex items-start gap-2">
                <Leaf className="mt-0.5 h-4 w-4 text-primary" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  </section>
);

const Quote = () => (
  <section id="quote" className="border-t py-16 md:py-24">
    <Container>
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Get a tailored quote</h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Tell us about your footprint and connectivity needs. We’ll follow up with pricing and availability.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            {["Month‑to‑month and term discounts", "Burstable bandwidth & blended transit", "Remote hands packages"].map((i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-primary" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle>Request a Quote</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input placeholder="First name" />
              <Input placeholder="Last name" />
            </div>
            <Input placeholder="Company" />
            <Input type="email" placeholder="Work email" />
            <div className="grid gap-4 sm:grid-cols-2">
              <Input placeholder="City / Market" />
              <Input placeholder="Estimated kW" />
            </div>
            <Textarea placeholder="Tell us about racks, power, carriers, and timeline." rows={4} />
            <div className="flex items-center gap-2">
              <input id="nda" type="checkbox" className="h-4 w-4 rounded border" />
              <label htmlFor="nda" className="text-sm text-muted-foreground">Request NDA</label>
            </div>
            <Button className="w-full">Submit</Button>
          </CardContent>
        </Card>
      </div>
    </Container>
  </section>
);

const FAQ = () => (
  <section className="border-t py-16 md:py-24">
    <Container>
      <div className="mb-8">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">FAQ</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Quick answers to common questions about our facilities and services.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full rounded-2xl border p-2">
        <AccordionItem value="item-1">
          <AccordionTrigger>Can I bring my own carriers and IP space?</AccordionTrigger>
          <AccordionContent>
            Yes. We’re carrier‑neutral and welcome BYO ASN, IP space, and cross‑connects to on‑site carriers and IX.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What densities can you support?</AccordionTrigger>
          <AccordionContent>
            Standard racks support 5–10kW; high‑density pods 15–40kW+ with containment and supplemental cooling.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Do you offer remote/smart hands?</AccordionTrigger>
          <AccordionContent>
            Yes, 24x7x365. We can rack/stack, swap drives, manage cabling, and perform diagnostics to your runbook.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Container>
  </section>
);

const Footer = () => (
  <footer className="border-t py-12">
    <Container>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-primary to-primary/60" />
            <span className="text-sm font-semibold tracking-wide">DataLink Datacenters</span>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground">
            Carrier‑neutral colocation, private cloud, and interconnect—engineered for uptime.
          </p>
          <div className="flex gap-3 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">SLA</a>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="font-medium">Contact</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (800) 555‑0145</div>
            <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> sales@datalinkdc.example</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> HQ — Your City, USA</div>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="font-medium">Locations</h4>
          <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            <span>New York</span>
            <span>Dallas</span>
            <span>Chicago</span>
            <span>Silicon Valley</span>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} DataLink Datacenters. All rights reserved.</div>
    </Container>
  </footer>
);

export default function DataLinkSite() {
  return (
    <main className="min-h-screen bg-background text-foreground">
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
