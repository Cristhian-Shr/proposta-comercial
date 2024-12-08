const PaidTraffic: React.FC = ({}) => {
  return (
    <div className="bg-black text-slate-400 w-full h-full px-10 flex flex-col items-center p-6 md:px-10 lg:px-20">
      <h1 className="text-5xl">Nossos Serviços</h1>
      <h2 className="py-10 text-4xl">Planos de Tráfego Pago:</h2>
      <p className="text-sm md:text-base text-center">
        {" "}
        Ajudamos sua empresa a alcançar mais clientes por meio de campanhas
        digitais personalizadas. Desde o reconhecimento de marca até a geração
        de leads qualificados, nossa abordagem é planejada para atender às suas
        metas específicas.
      </p>

      <div className="flex gap-10">
        <div className="w-full max-w-[500px] rounded-[20px] bg-gray-900 py-12 px-8 text-center md:py-[60px] md:px-[70px] mt-10">
          <h3 className="text-white pb-2 text-xl font-bold sm:text-2xl">
            Plano Start - Visibilidade Local
          </h3>
          <span className="bg-indigo-500 mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
          <p className="text-gray-400 mb-10 text-base leading-relaxed">
            Foco em{" "}
            <span className="font-bold">
              campanhas de reconhecimento de marca
            </span>{" "}
            para negócios locais. Ideal para empresas que desejam atrair
            clientes da região.{" "}
          </p>
          <p className="text-gray-400 mb-10 text-base leading-relaxed">
            **Inclui:** - Criação de campanhas no Google e redes sociais. -
            Relatórios mensais de desempenho. - Suporte para ajustes.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="text-white block w-full rounded-lg border border-gray-700 p-3 text-center text-base font-medium transition hover:border-red-600 hover:bg-red-600 hover:text-white">
              Cancel
            </button>
            <button className="bg-indigo-500 border-indigo-500 block w-full rounded-lg border p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90">
              View Details
            </button>
          </div>
        </div>

        <div className="w-full max-w-[500px] rounded-[20px] bg-gray-900 py-12 px-8 text-center md:py-[60px] md:px-[70px] mt-10">
          <h3 className="text-white pb-2 text-xl font-bold sm:text-2xl">
            Plano advanced - Leads Qualificados
          </h3>
          <span className="bg-indigo-500 mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
          <p className="text-gray-400 mb-10 text-base leading-relaxed">
            **Campanhas de médio impacto**, com otimização para geração de
            leads. - **Ideal para:** Negócios que buscam expandir sua base de
            clientes.
          </p>
          <p className="text-gray-400 mb-10 text-base leading-relaxed">
            **Inclui:** - Segmentação avançada de público-alvo. - Anúncios
            dinâmicos e estratégicos. - Relatórios quinzenais.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="text-white block w-full rounded-lg border border-gray-700 p-3 text-center text-base font-medium transition hover:border-red-600 hover:bg-red-600 hover:text-white">
              Cancel
            </button>
            <button className="bg-indigo-500 border-indigo-500 block w-full rounded-lg border p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90">
              View Details
            </button>
          </div>
        </div>

        <div className="w-full max-w-[500px] rounded-[20px] bg-gray-900 py-12 px-8 text-center md:py-[60px] md:px-[70px] mt-10">
          <h3 className="text-white pb-2 text-xl font-bold sm:text-2xl">
            Plano Premium - Resultados Explosivos
          </h3>
          <span className="bg-indigo-500 mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
          <p className="text-gray-400 mb-10 text-base leading-relaxed">
            Estratégias de **alto impacto** para alcançar resultados
            expressivos. - **Ideal para:** Empresas que querem dominar o mercado
            digital.
          </p>
          <p className="text-gray-400 mb-10 text-base leading-relaxed">
            *Inclui:** - Gestão contínua e otimização de campanhas. - Análise de
            concorrência e tendências. - Consultoria estratégica personalizada.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="text-white block w-full rounded-lg border border-gray-700 p-3 text-center text-base font-medium transition hover:border-red-600 hover:bg-red-600 hover:text-white">
              Cancel
            </button>
            <button className="bg-indigo-500 border-indigo-500 block w-full rounded-lg border p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaidTraffic;
