import Link from "next/link";

const WorkTogether: React.FC = () => {
  return (
    <div className="bg-black text-slate-400 w-full h-full px-10 flex flex-col items-center p-6 md:px-16 lg:px-24">
      <h3 className="font-bold py-10 text-3xl text-center">Vamos Trabalhar Juntos?</h3>
      <p className="text-sm md:text-base text-center">
        Entre em contato e descubra como podemos transformar sua presença online
        em um diferencial competitivo para o seu negócio.{" "}
      </p>
      <div className="flex flex-col gap-2 pt-10">
        <Link href="https://wa.me/5551999038481?text=Quero%20conversar%20sobre%20os%20servi%C3%A7os%20oferecidos!" className="text-sm md:text-base">
          💬 **WhatsApp:** [51 99903-8481]
        </Link>
        <p className="text-sm md:text-base">
          📧 E-mail: [cristhianschroer@gmail.com /
          artemis.agenciadigital@gmail.com]
        </p>
        <Link href="https://next-dev-cristhianschroer.vercel.app/" className="text-sm md:text-base">
          🌐 Site: Next Dev Cristhian Sander Schröer
        </Link>
      </div>
    </div>
  );
};

export default WorkTogether;
