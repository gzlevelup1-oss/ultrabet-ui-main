'use client'

import Link from 'next/link'
import Image from 'next/image'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Main footer content */}
        <div className={styles.footerMain}>
          {/* Company info */}
          <div className={styles.footerSection}>
            <div className={styles.logoSection}>
              <Link href="/" className={styles.footerLogo}>
                <Image 
                  src="/ultrabet-logo.svg" 
                  alt="Ultrabet" 
                  width={40} 
                  height={40}
                />
                <span className={styles.footerLogoText}>Ultrabet</span>
              </Link>
              <p className={styles.companyDescription}>
                Ethiopia's premier online betting platform. Bet responsibly and enjoy the thrill of sports betting with competitive odds and secure transactions.
              </p>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink} aria-label="Facebook">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className={styles.socialLink} aria-label="Twitter">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className={styles.socialLink} aria-label="Instagram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className={styles.socialLink} aria-label="Telegram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li><Link href="/sports" className={styles.footerLink}>Sports Betting</Link></li>
              <li><Link href="/live" className={styles.footerLink}>Live Betting</Link></li>
              <li><Link href="/virtuals" className={styles.footerLink}>Virtual Sports</Link></li>
              <li><Link href="/casino" className={styles.footerLink}>Casino Games</Link></li>
              <li><Link href="/promotions" className={styles.footerLink}>Promotions</Link></li>
              <li><Link href="/results" className={styles.footerLink}>Results</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Support</h3>
            <ul className={styles.linkList}>
              <li><Link href="/help" className={styles.footerLink}>Help Center</Link></li>
              <li><Link href="/contact" className={styles.footerLink}>Contact Us</Link></li>
              <li><Link href="/faq" className={styles.footerLink}>FAQ</Link></li>
              <li><Link href="/deposit" className={styles.footerLink}>Deposit Guide</Link></li>
              <li><Link href="/withdrawal" className={styles.footerLink}>Withdrawal Guide</Link></li>
              <li><Link href="/responsible-gaming" className={styles.footerLink}>Responsible Gaming</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Legal</h3>
            <ul className={styles.linkList}>
              <li><Link href="/terms" className={styles.footerLink}>Terms & Conditions</Link></li>
              <li><Link href="/privacy" className={styles.footerLink}>Privacy Policy</Link></li>
              <li><Link href="/cookies" className={styles.footerLink}>Cookie Policy</Link></li>
              <li><Link href="/kyc" className={styles.footerLink}>KYC Policy</Link></li>
              <li><Link href="/aml" className={styles.footerLink}>AML Policy</Link></li>
              <li><Link href="/complaints" className={styles.footerLink}>Complaints</Link></li>
            </ul>
          </div>
        </div>

        {/* Payment methods */}
        <div className={styles.paymentSection}>
          <h3 className={styles.sectionTitle}>Payment Methods</h3>
          <div className={styles.paymentMethods}>
            <div className={styles.paymentMethod}>
              <span>CBE Birr</span>
            </div>
            <div className={styles.paymentMethod}>
              <span>Telebirr</span>
            </div>
            <div className={styles.paymentMethod}>
              <span>M-Birr</span>
            </div>
            <div className={styles.paymentMethod}>
              <span>Awash Birr</span>
            </div>
            <div className={styles.paymentMethod}>
              <span>Amole</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.footerBottom}>
          <div className={styles.bottomContent}>
            <div className={styles.copyright}>
              <p>&copy; 2024 Ultrabet. All rights reserved. Licensed and regulated in Ethiopia.</p>
            </div>
            <div className={styles.certifications}>
              <div className={styles.certification}>
                <span>18+</span>
              </div>
              <div className={styles.certification}>
                <span>Responsible Gaming</span>
              </div>
              <div className={styles.certification}>
                <span>SSL Secured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}