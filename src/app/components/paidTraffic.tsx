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
      <h3 className="py-10 text-3xl">Plano Start - Visibilidade Local</h3>
      <p className="text-sm md:text-base text-center">
        1️⃣ - - Foco em **campanhas de reconhecimento de marca** para negócios
        locais. - **Ideal para:** Empresas que desejam atrair clientes da
        região. - **Inclui:** - Criação de campanhas no Google e redes sociais.
        - Relatórios mensais de desempenho. - Suporte para ajustes.
      </p>
      <h3 className="py-10 text-3xl">Plano advanced - Leads Qualificados</h3>
      <p className="text-sm md:text-base text-center">
        {" "}
        2️⃣ **** - **Campanhas de médio impacto**, com otimização para geração de
        leads. - **Ideal para:** Negócios que buscam expandir sua base de
        clientes. - **Inclui:** - Segmentação avançada de público-alvo. -
        Anúncios dinâmicos e estratégicos. - Relatórios quinzenais.
      </p>
      <h3 className="py-10 text-3xl">Plano Premium - Resultados Explosivos</h3>
      <p className="text-sm md:text-base text-center">
        3️⃣ **** - Estratégias de **alto impacto** para alcançar resultados
        expressivos. - **Ideal para:** Empresas que querem dominar o mercado
        digital. - **Inclui:** - Gestão contínua e otimização de campanhas. -
        Análise de concorrência e tendências. - Consultoria estratégica
        personalizada.
      </p>
    </div>
  );
};

export default PaidTraffic;
