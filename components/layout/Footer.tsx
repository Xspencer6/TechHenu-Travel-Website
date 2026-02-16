"use client";

import Link from "next/link"
import { motion } from "framer-motion";

export default function Footer() {

    return (
        <motion.footer className="bg-gray-900 text-gray-300"
            initial={{opacity: 0, y: -100}}
            animate={{opacity: 1, y: 1}}
            transition={{
                delay: 0.425
            }}
        >
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Information */}
              <div>
                  <motion.h3 className="text-2xl font-bold text-white mb-4"
                      initial={{opacity: 0, y: -100}}
                      animate={{opacity: 1, y: 1}}
                      transition={{
                          delay: 0.45
                      }}
                  >
                      NJOY Travel & Tours
                  </motion.h3>
                  <motion.p className="mb-4 leading-relaxed"
                      initial={{opacity: 0, y: -100}}
                      animate={{opacity: 1, y: 1}}
                      transition={{
                          delay: 0.475
                      }}
                  >
                      Your trusted partner for unforgettable travel experiences. 
                      We make your dream destinations a reality.
                  </motion.p>
              </div>

              {/* Support */}
              <div>
                  <motion.h4 className="text-white font-semibold mb-4"
                      initial={{opacity: 0, y: -100}}
                      animate={{opacity: 1, y: 1}}
                      transition={{
                          delay: 0.45
                      }}
                  >
                      Support
                  </motion.h4>
                  <ul className="space-y-2">
                      <motion.li initial={{opacity: 0, y: -100}}
                          animate={{opacity: 1, y: 1}}
                          transition={{
                              delay: 0.475
                          }}
                      >
                          <Link href="/faq" className="hover:text-white transition-colors">
                              FAQ
                          </Link>
                      </motion.li>

                      <motion.li initial={{opacity: 0, y: -100}}
                          animate={{opacity: 1, y: 1}}
                          transition={{
                              delay: 0.48
                          }}
                      >
                          <Link href="/terms" className="hover:text-white transition-colors">
                              Terms & Conditions
                          </Link>
                      </motion.li>

                      <motion.li initial={{opacity: 0, y: -100}}
                          animate={{opacity: 1, y: 1}}
                          transition={{
                              delay: 0.485
                          }}
                      >
                          <Link href="/privacy" className="hover:text-white transition-colors">
                              Privacy Policy
                          </Link>
                      </motion.li>

                      <motion.li initial={{opacity: 0, y: -100}}
                          animate={{opacity: 1, y: 1}}
                          transition={{
                              delay: 0.49
                          }}
                      >
                          <Link href="/cancellation" className="hover:text-white transition-colors">
                              Cancellation Policy
                          </Link>
                      </motion.li>

                  </ul>
              </div>

              {/* Contact Information */}
              <div>
                  <motion.h4 className="text-white font-semibold mb-4"
                      initial={{opacity: 0, y: -100}}
                      animate={{opacity: 1, y: 1}}
                      transition={{
                              delay: 0.45
                      }}
                  >
                      Contact Us
                  </motion.h4>
                  <ul className="space-y-3">
                      <motion.li className="flex items-center space-x-3"
                          initial={{opacity: 0, y: -100}}
                          animate={{opacity: 1, y: 1}}
                          transition={{
                              delay: 0.475
                          }}
                      >
                          <a
                            href="https://www.facebook.com/profile.php?id=100083007744889"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-500 transition-colors"
                            aria-label="Facebook"
                          >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                              </svg>
                          </a>
                          <span>Facebook</span>
                      </motion.li>

                      <motion.li className="flex items-center space-x-3"
                          initial={{opacity: 0, y: -100}}
                          animate={{opacity: 1, y: 1}}
                          transition={{
                              delay: 0.48
                          }}
                      >
                          <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span>0917 340 7223</span>
                      </motion.li>

                      <motion.li className="flex items-center space-x-3"
                          initial={{opacity: 0, y: -100}}
                          animate={{opacity: 1, y: 1}}
                          transition={{
                              delay: 0.485
                          }}
                      >
                          <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span>noelsangabriel02@gmail.com</span>
                      </motion.li>
                  </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <motion.div className="border-t border-gray-800 mt-8 pt-8 text-center"
                initial={{opacity: 0, y: -100}}
                animate={{opacity: 1, y: 1}}
                transition={{
                    delay: 0.495
                }}
            >
                <p className="text-sm">
                    &copy; 2022 NJOY Travel & Tours. All rights reserved.
                </p>
            </motion.div>
          </div>
        </motion.footer>
    )
}
