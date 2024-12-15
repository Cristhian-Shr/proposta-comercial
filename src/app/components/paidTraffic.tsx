import Link from "next/link";

const PaidTraffic: React.FC = ({}) => {
  return (
    <div className="bg-black text-slate-400 w-full h-full px-10 flex flex-col items-center p-6 md:px-16 lg:px-24">
      <h1 className="text-5xl text-center">Nossos Serviços</h1>
      <h2 className="py-10 text-4xl text-center">Planos de Tráfego Pago</h2>
      <p className="text-sm md:text-base text-center">
        {" "}
        Ajudamos sua empresa a alcançar mais clientes por meio de campanhas
        digitais personalizadas. Desde o reconhecimento de marca até a geração
        de leads qualificados, nossa abordagem é planejada para atender às suas
        metas específicas.
      </p>

      <div className="flex flex-col md:flex-row gap-10 mt-8 md:mt-12">
        {/* plano start */}
        <div className="w-full max-w-[500px] rounded-[20px] bg-gray-900 py-12 px-8 text-center md:py-[60px] md:px-[70px] ">
          <h3 className="text-white pb-2 text-xl font-bold sm:text-2xl">
            Plano Start
          </h3>
          <h4 className="text-slate-200 pb-2 text-xl font-semibold sm:text-xl">
            Visibilidade Local
          </h4>
          <span className="bg-indigo-500 mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
          <p className="text-gray-400 mb-5 text-base leading-relaxed">
            Foco em{" "}
            <span className="font-bold">
              campanhas de reconhecimento de marca
            </span>{" "}
            para negócios locais. <br />{" "}
            <span className="font-bold">Ideal para:</span> empresas que desejam
            atrair clientes da região.{" "}
          </p>
          <p className="text-gray-400 mb-2 text-base leading-relaxed">
            Inclui:
          </p>
          <ul className="flex flex-col gap-2 pb-4">
            <li>Criação de campanhas nas redes sociais.</li>
            <li>Suporte para ajustes.</li>
          </ul>
          <div className="flex flex-wrap gap-3 pt-5">
            <Link
              href="https://wa.me/5551999038481?text=Quero%20contratar%20o%20plano%20Start%20de%20trafego%20pago!"
              className="bg-indigo-500 border-indigo-500 block w-full rounded-lg border p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
            >
              Saber mais!
            </Link>
          </div>
        </div>
        {/* plano advanced */}
        <div className="w-full max-w-[500px] rounded-[20px] bg-gray-900 py-12 px-8 text-center md:py-[60px] md:px-[70px] ">
          <h3 className="text-white pb-2 text-xl font-bold sm:text-2xl">
            Plano Advanced
          </h3>
          <h4 className="text-slate-200 pb-2 text-xl font-semibold sm:text-xl">
            Leads Qualificados
          </h4>
          <span className="bg-indigo-500 mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
          <p className="text-gray-400 mb-4 text-base leading-relaxed">
            <span className="font-bold">Campanhas de médio impacto</span>, com
            otimização para geração de leads.
            <br /> <span className="font-bold">Ideal para:</span> Negócios que
            buscam expandir sua base de clientes.
          </p>
          <p className="text-gray-400 mb-2 text-base leading-relaxed">
            Inclui:
          </p>
          <ul className="flex flex-col gap-2 pb-4">
            <li>Plano Start.</li>
            <li>Segmentação avançada de público-alvo.</li>
            <li>Anúncios dinâmicos e estratégicos.</li>
            <li>Planilha de controle de leads.</li>
          </ul>
          <div className="flex flex-wrap gap-3 pt-5">
            <Link
              href="https://wa.me/5551999038481?text=Quero%20contratar%20o%20plano%20Advanced%20de%20trafego%20pago!"
              className="bg-indigo-500 border-indigo-500 block w-full rounded-lg border p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
            >
              Saber mais!
            </Link>
          </div>
        </div>
        {/* plano premium */}
        <div className="w-full max-w-[500px] rounded-[20px] bg-gray-900 py-12 px-8 text-center md:py-[60px] md:px-[70px] ">
          <h3 className="text-white pb-2 text-md font-bold sm:text-2xl">
            Plano Premium
          </h3>
          <h4 className="text-slate-200 pb-2 text-xl font-semibold sm:text-xl">
            Resultados Explosivos
          </h4>
          <span className="bg-indigo-500 mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
          <p className="text-gray-400 mb-4 text-base leading-relaxed">
            Estratégias de <span className="font-bold">alto impacto</span> para
            alcançar resultados expressivos. <br />{" "}
            <span className="font-bold">Ideal para:</span> Empresas que querem
            dominar o mercado digital.
          </p>
          <p className="text-gray-400 mb-2 text-base leading-relaxed">
            Inclui:
          </p>
          <ul className="flex flex-col gap-2 pb-4">
            <li>Plano Advanced</li>
            <li>Gestão contínua e otimização de campanhas.</li>
            <li>Análise de concorrência e tendências.</li>
          </ul>
          <div className="flex flex-wrap gap-3 pt-5">
            <Link
              href="https://wa.me/5551999038481?text=Quero%20contratar%20o%20plano%20Premium%20de%20trafego%20pago!"
              className="bg-indigo-500 border-indigo-500 block w-full rounded-lg border p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
            >
              Saiba mais!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaidTraffic;
