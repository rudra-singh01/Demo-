import { useEffect, useRef } from "react";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const footer = footerRef.current;

    // GSAP ScrollTrigger to detect when footer enters/leaves viewport
    gsap.to(footer, {
      scrollTrigger: {
        trigger: footer,
        start: "top bottom", // Start when top of footer hits bottom of viewport
        end: "bottom top", // End when bottom of footer hits top of viewport
        toggleActions: "play none none reverse",
        onEnter: () => controls.start({ opacity: 1, y: 0 }),
        onLeave: () => controls.start({ opacity: 0, y: 50 }),
        onEnterBack: () => controls.start({ opacity: 1, y: 0 }),
        onLeaveBack: () => controls.start({ opacity: 0, y: 50 }),
      },
    });

    // Cleanup ScrollTrigger on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [controls]);

  return (
    <>
      <div className="bg-transparent w-full h-[70vh]"></div>
      <motion.div
        ref={footerRef}
        className="footer fixed bottom-0 left-0 right-0"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <footer className="bg-black text-white relative">
          {/* Background overlay with opacity */}
          <div
            className="absolute inset-0 opacity-20 z-0"
            style={{
              backgroundImage: "url('/placeholder.svg?height=600&width=1200')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Company Info */}
              <div>
                <div className="mb-6">
                  <Link href="/" className="inline-block">
                    <div className="flex items-center">
                      <div className="text-white font-bold text-3xl">
                        <span className="flex items-center">
                          <svg
                            width="50"
                            height="40"
                            viewBox="0 0 50 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 0L25 40L50 0H37.5L25 20L12.5 0H0Z"
                              fill="white"
                            />
                          </svg>
                          tors
                        </span>
                      </div>
                    </div>
                    <div className="text-sm uppercase tracking-wider mt-1">
                      DIGITAL AGENCY
                    </div>
                  </Link>
                </div>

                <p className="text-gray-400 mb-4">
                  There are many variations of passages Lorem Ipsum available,
                  the Ipsum has been majority suffered.
                </p>

                <p className="text-gray-400">
                  We have the custom support and great team members. Digital
                  Agency with the creative ideas.
                </p>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="text-xl font-bold mb-6">Newsletter</h3>
                <p className="text-gray-400 mb-6">
                  Get the latest news other tips There are many variations of
                  passages vailable, the Ipsum has been majority suffered.
                </p>

                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white text-gray-800 focus:outline-none"
                  />
                  <button className="bg-orange-500 text-white px-4 py-3 flex heitems-center justify-center">
                    <Send size={20} />
                  </button>
                </div>
              </div>

              {/* Gallery */}
              <div>
                <h3 className="text-xl font-bold mb-6">Gallery</h3>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="relative h-20 overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=80&width=80&text=Image${item}`}
                        alt={`Gallery image ${item}`}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Us */}
              <div>
                <h3 className="text-xl font-bold mb-6">Contact Us</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-orange-500 rounded-full p-2 mr-4 flex-shrink-0">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <p className="text-gray-400">
                      301 Princes Street, Damietta Egypt
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-500 rounded-full p-2 mr-4 flex-shrink-0">
                      <Phone size={20} className="text-white" />
                    </div>
                    <p className="text-gray-400">Phone: +92 000 111 3333</p>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-orange-500 rounded-full p-2 mr-4 flex-shrink-0">
                      <Mail size={20} className="text-white" />
                    </div>
                    <p className="text-gray-400">info@examplegmail.com</p>
                  </div>

                  <div className="flex space-x-3 mt-6">
                    <Link
                      href="#"
                      className="bg-gray-800 hover:bg-gray-700 rounded-full p-3 transition-colors"
                    >
                      <Facebook size={20} className="text-white" />
                    </Link>
                    <Link
                      href="#"
                      className="bg-gray-800 hover:bg-gray-700 rounded-full p-3 transition-colors"
                    >
                      <Twitter size={20} className="text-white" />
                    </Link>
                    <Link
                      href="#"
                      className="bg-gray-800 hover:bg-gray-700 rounded-full p-3 transition-colors"
                    >
                      <Youtube size={20} className="text-white" />
                    </Link>
                    <Link
                      href="#"
                      className="bg-gray-800 hover:bg-gray-700 rounded-full p-3 transition-colors"
                    >
                      <Instagram size={20} className="text-white" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="relative z-10 border-t border-gray-800">
            <div className="max contemplative-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <p className="text-center text-gray-400">
                Copyrights 2025. All Rights are Reserved by{" "}
                <span className="text-orange-500">Expert Themes</span>
              </p>
            </div>
          </div>
        </footer>
      </motion.div>
    </>
  );
};

export default Footer;