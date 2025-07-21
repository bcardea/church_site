import { SiteHeader } from "@/components/header/site-header";
import { SiteFooter } from "@/components/footer/site-footer";
import { LogoBlock } from '@/components/content-blocks/logo-block';
import { TextBlock } from '@/components/content-blocks/text-block';
import { NumberedListBlock } from '@/components/content-blocks/numbered-list-block';
import React from 'react';
import Image from 'next/image';

export default function KidspointPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      
      <main className="flex-1 bg-white">
        {/* Logo Header */}
        <section className="py-16" style={{ backgroundColor: '#0d9488' }}>
          <div className="container flex justify-center">
            <Image
              src="/images/kidspoint-logo.png"
              alt="Kidspoint Logo"
              width={400}
              height={200}
              className="h-auto"
              priority
            />
          </div>
        </section>

        {/* Main Content Area */}
        <div className="py-16 space-y-24">

          {/* Feature 1: What to Expect */}
          <section className="container">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="lg:order-last">
                <Image
                  src="/images/kidspoint-gallery-1.jpg"
                  alt="Kids learning in a classroom setting"
                  width={600}
                  height={500}
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">What Your Family Can Expect</h2>
                <p className="text-lg text-gray-600">In Kidspoint, our goal is to be fun-experts who point kids to Jesus. You can expect:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>A safe and secure environment with background-checked leaders.</li>
                  <li>Fun, relational, and age-appropriate teaching about God's love.</li>
                  <li>A support system for you and your child's faith journey.</li>
                  <li>A dedicated Dream Team invested in your child's spiritual development.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Feature 2: First-Time Families */}
          <section className="container">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <Image
                  src="/images/kidspoint-gallery-2.jpg"
                  alt="Children listening to a story"
                  width={600}
                  height={500}
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Are You a First-Time Family?</h2>
                <p className="text-lg text-gray-600">We can't wait to meet you! Here’s how we make your first visit simple and secure:</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Visit our First Time Family environment upon arrival for easy registration.</li>
                  <li>We will personally escort you and your child to their Kidspoint room.</li>
                  <li>Enjoy the main worship experience, knowing your child is safe and happy.</li>
                  <li>Pick up your child after service using our secure checkout system.</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Feature 3: Partnering with Parents */}
          <section className="container">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="lg:order-last">
                <Image
                  src="/images/kidspoint-gallery-3.jpg"
                  alt="Infants and toddlers playing safely"
                  width={600}
                  height={500}
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Partnering With You</h2>
                <p className="text-lg text-gray-600">We believe the best way to help your kids develop a strong spiritual foundation is by partnering with you. Together, we can encourage, train, and pray for them as they grow in their faith.</p>
                <p className="text-gray-600">You can download the Bible App for Kids and pray for your child and our Kidspoint teams.</p>
              </div>
            </div>
          </section>

        </div>

        {/* CTA Section */}
        <section className="bg-gray-50 py-20">
          <div className="container text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ready to join us?</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Pre-register your child now and make your first visit even smoother!
            </p>
            <div className="mt-10">
              <a
                href="https://findlifepoint.church/#:~:text=visit%20even%20smoother!-,Pre%2DRegister%20Your%20Child,-Have%20questions%3F%20Email"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-teal-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                style={{ backgroundColor: '#0d9488' }}
              >
                Pre-Register Your Child
              </a>
            </div>
            <p className="mt-8 text-sm text-gray-500">
              Have questions? Email us at <a href="mailto:kidspoint@lifepointhamptonroads.org" className="font-medium text-teal-600 hover:text-teal-500" style={{ color: '#0d9488' }}>kidspoint@lifepointhamptonroads.org</a>
            </p>
          </div>
        </section>
      </main>
      
      <SiteFooter />
    </div>
  );
}
