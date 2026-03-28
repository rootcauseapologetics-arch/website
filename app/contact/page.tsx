export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl font-bold mb-6 text-primary dark:text-gray-100">Contact Us</h1>
      <p className="text-xl mb-10 text-gray-600 dark:text-gray-400">
        Have a question or a topic you'd like us to analyze? Reach out to us.
      </p>
      <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
        <p className="text-lg font-medium text-gray-500 mb-2 uppercase tracking-wide">General Inquiries</p>
        <a 
          href="mailto:contact@rootcauseapologetics.com" 
          className="text-2xl font-bold text-primary hover:underline transition"
        >
          contact@rootcauseapologetics.com
        </a>
      </div>
    </div>
  );
}
