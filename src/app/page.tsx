import PaidTraffic from "./components/paidTraffic";
import PresentationOne from "./components/presentationOne";
import WebDevelopment from "./components/webDevelopment";

export default function Home() {
  return (
    <main className="flex flex-col row-start-2 items-center sm:items-start">
      <PresentationOne />
      <PaidTraffic /> 
      <WebDevelopment />
    </main>
  );
}
