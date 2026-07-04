import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, ShieldCheck, Flame } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import { citiesServed, company, locations } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-800 bg-navy-950 text-navy-200">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Second Alarm Invasive Control emblem"
              width={64}
              height={96}
              className="h-16 w-auto rounded-lg"
            />
            <Logo />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-300">
            {company.tagline} Southwest Florida&rsquo;s trusted specialists in green iguana and Muscovy
            duck removal for homes, HOAs, and businesses.
          </p>
          <div className="mt-6 flex flex-col gap-2 text-sm font-semibold">
            <div className="flex items-center gap-2 text-gold-400">
              <ShieldCheck size={18} />
              FWC-Compliant &amp; Fully Insured
            </div>
            <div className="flex items-center gap-2 text-gold-400">
              <Flame size={18} />
              Firefighter-Owned &amp; Operated
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/services/green-iguana-removal" className="hover:text-coastal-400">
                Green Iguana Removal
              </Link>
            </li>
            <li>
              <Link href="/services/muscovy-duck-removal" className="hover:text-coastal-400">
                Muscovy Duck Removal
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-coastal-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-coastal-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">
            Service Areas
          </h3>
          <ul className="mt-4 grid grid-cols-1 gap-x-4 gap-y-3 text-sm sm:grid-cols-2">
            {locations
              .filter((l) => l.service === "iguana")
              .map((loc) => (
                <li key={loc.slug}>
                  <Link href={`/locations/${loc.slug}`} className="hover:text-coastal-400">
                    {loc.city}
                  </Link>
                </li>
              ))}
          </ul>
          <p className="mt-4 text-xs text-navy-400">
            Also serving: {citiesServed.filter((c) => !["Fort Myers","Cape Coral","Naples","Bonita Springs","Estero","Punta Gorda","Port Charlotte"].includes(c)).join(", ")}
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-4 text-sm">
            <li>
              <a href={company.phoneHref} className="flex items-center gap-3 hover:text-coastal-400">
                <Phone size={16} className="text-coastal-500" />
                {company.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="flex items-center gap-3 hover:text-coastal-400">
                <Mail size={16} className="text-coastal-500" />
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-coastal-500" />
              Serving all of Southwest Florida
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-navy-800">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-navy-400 sm:flex-row">
          <p>
            &copy; {year} {company.name}. All rights reserved.
          </p>
          <p>Protecting Southwest Florida from invasive species.</p>
        </Container>
      </div>
    </footer>
  );
}
