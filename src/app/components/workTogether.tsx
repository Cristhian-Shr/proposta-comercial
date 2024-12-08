const WorkTogether: React.FC = () => {
  return (
    <div className="bg-black text-slate-400 w-full h-full px-10 flex flex-col items-center p-6 md:px-10 lg:px-20">
      <h3 className="font-bold py-10 text-3xl">Vamos Trabalhar Juntos?</h3>
      <p className="text-sm md:text-base text-center">
        Entre em contato e descubra como podemos transformar sua presença online
        em um diferencial competitivo para o seu negócio.{" "}
      </p>
      <div className="flex flex-col gap-2 pt-10">
        <p className="text-sm md:text-base">
          💬 **WhatsApp:** [51 99903-8481]
        </p>
        <p className="text-sm md:text-base">
          📧 E-mail: [cristhianschroer@gmail.com /
          artemis.agenciadigital@gmail.com]
        </p>
        <p className="text-sm md:text-base">
          🌐 Site: [Insira seu site]
        </p>
      </div>
    </div>
  );
};

export default WorkTogether;
