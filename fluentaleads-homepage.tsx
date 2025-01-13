
'use client';

import { motion } from "framer-motion";
import { Calendar, Clock, Video } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bckground%201%20revised%20fluentaleads%20(1).jpg-Jwksjar11aQU5kCdB98NzNKRqGNe15.jpeg"
            alt="Background Image"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/80" />
        </div>

        <div className="relative">
          <nav className="container mx-auto px-4 py-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mikael%20hyle%20logo-wu94kcBL7ZVWC0IoN7iVkH7khp9g3q.png"
              alt="Fluentaleads Logo"
              width={200}
              height={50}
              className="h-12 w-auto"
            />
          </nav>

          <div className="container mx-auto px-4 py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Agency Growth Partner
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                We help agencies scale by delivering high-quality leads through targeted email marketing
              </p>
              <Button
                size="lg"
                className="text-lg"
                asChild
              >
                <a href="#discovery-call">Book a Call</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </header>

      {/* About & Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">About & Our Services</h2>
            <p className="text-xl text-gray-600 mb-12">
              Transform your cold email outreach into a lead-converting sales machine.
              With our done-for-you services, you'll generate warm leads faster than ever.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Appointment Setting</h3>
                  <p className="text-gray-600">
                    We find qualified B2B leads and set up meetings for you to close.
                    Tell us your value proposition and target audience, and we'll do the rest.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Prospect Research</h3>
                  <p className="text-gray-600">
                    Research is more complex than people think, especially when sourcing accurate,
                    up-to-date contact info for decision-makers. We use top-tier research tools.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Anti-Spam Services</h3>
                  <p className="text-gray-600">
                    80% of emails are marked as spam. Fluentaleads ensures yours reach the other 20%.
                    We ensure this by using spam filters and following strict guidelines.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Discovery Call Section */}
      <section id="discovery-call" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex justify-center gap-4 mb-8">
              <Video className="h-8 w-8" />
              <Clock className="h-8 w-8" />
              <Calendar className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Schedule a Discovery Call</h2>
            <p className="text-xl text-gray-600 mb-8">
              Book a 30-minute call to discuss how we can help grow your agency
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <iframe
                src="https://calendly.com/your-calendly-link" // Ensure your Calendly link is correct
                width="100%"
                height="600"
                frameBorder="0"
                title="Discovery Call Scheduler"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-APVlugqzZ7PPgT9auzC9hu9ONbvNuX.png"
                alt="Fluentaleads Logo"
                width={40}
                height={40}
                className="mb-4"
              />
              <p className="text-gray-400">mikael@fluentaleads.com</p>
              <p className="text-gray-400">+358414890845</p>
            </div>
            <div className="flex gap-6">
              <Link
                href="https://www.linkedin.com/in/mikael-hyle-53454b271/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href="https://www.instagram.com/mikaelhyl"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                Instagram
              </Link>
              <Link
                href="https://twitter.com/streakyzoo2324"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                X
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>© 2025 Fluentaleads</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
