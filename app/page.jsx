import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "../sections";

const Page = () => (
  <div className="overflow-hidden bg-primary-black text-white">
    <Navbar />
    <Hero />

    <About />

    <Explore />

    <GetStarted />

    <WhatsNew />

    <World />

    <Insights />

    <Feedback />

    <Footer />
  </div>
);

export default Page;
