import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Me</h1>
      <p className="text-gray-600 text-center mb-8">
        Have a question or want to work together? Feel free to reach out!
      </p>
      <ContactForm />
    </div>
  );
} 