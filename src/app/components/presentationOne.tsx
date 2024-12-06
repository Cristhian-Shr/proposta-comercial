const PresentationOne: React.FC = ({}) => {
  return (
    <div className="bg-black text-slate-400 w-full h-full px-10 flex flex-col items-center p-6 md:px-10 lg:px-20">
      <h1 className="text-5xl">Proposta Comercial</h1>
      <h2 className="py-10 text-3xl">
        Impulsione Seu Negócio com Estratégias Digitais e Soluções Web de Alto
        Impacto.
      </h2>
      <p className="text-sm md:text-base text-center">
        Olá! Sou Cristhian Sander Schröer, especialista em desenvolvimento web e
        tráfego pago, comprometido em alavancar sua presença digital e gerar
        resultados concretos para sua empresa. Minha proposta une estratégias
        inovadoras de tráfego pago com o desenvolvimento de soluções digitais
        otimizadas, como landing pages, sites institucionais e e-commerces via
        plataformas modernas.
      </p>

      {/* efeito roxo */}
      {/* <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg> */}
    </div>
  );
};

export default PresentationOne;
