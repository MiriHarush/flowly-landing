import ContactForm from "./components/ContactForm";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";

const Home = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">
            Smart workflow management
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Work smarter.
            <br />
            Move faster.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            One simple workspace to manage your team&apos;s workflow
            and stay focused on what matters most.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-block rounded-full bg-gray-900 px-8 py-4 text-sm font-semibold text-white transition hover:bg-gray-700"
          >
            Get Started
          </a>
        </div>
      </section>
      <Features/>
      <ContactForm/>
      <Footer/>
    </main>
  );
}

export default Home;