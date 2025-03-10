import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full">
          <Image
            src="/placeholder-avatar.jpg"
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">John Doe</h1>
          <p className="text-xl text-gray-600">
            Full Stack Developer | Computer Science Student
          </p>
          <p className="max-w-2xl mx-auto text-gray-600">
            Passionate about creating innovative web solutions and learning new technologies.
            Currently pursuing my degree in Computer Science while working on exciting projects.
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <Link
            href="/projects"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 transition"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Featured Project</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64 w-full">
            <Image
              src="/placeholder-project.jpg"
              alt="Featured Project"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 space-y-4">
            <h3 className="text-2xl font-bold">E-Commerce Platform</h3>
            <p className="text-gray-600">
              A full-stack e-commerce platform built with Next.js, MongoDB, and Stripe integration.
              Features include user authentication, product management, and secure payment processing.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Next.js</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">MongoDB</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Stripe</span>
            </div>
            <Link
              href="/projects/e-commerce"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              View Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 