import Link from "next/link";

const WebDevelopment: React.FC = ({}) => {
  return (
    <div className="bg-black text-slate-400 w-full h-full px-10 flex flex-col items-center p-6 md:px-10 lg:px-20">
      <h2 className="py-10 text-4xl">Desenvolvimento Web</h2>
      <p className="text-sm md:text-base text-center">
        ✨ Páginas otimizadas para resultados Criamos páginas estratégicas,
        ideais para campanhas específicas como promoções e geração de leads,
        garantindo máximo impacto e conversão.
      </p>
      <p className="text-sm md:text-base text-center">
        🌟 Sites profissionais que impressionam Desenvolvemos sites que destacam
        a sua marca, inspiram confiança e elevam sua credibilidade, enquanto
        otimizam sua presença digital.
      </p>
      <p className="text-sm md:text-base text-center">
        💼 Seu sucesso começa aqui Vamos levar sua marca ao próximo nível com
        soluções digitais que realmente funcionam. Entre em contato e descubra
        como podemos ajudar!
      </p>
      <div className="flex gap-10">
        {/* landing page */}
        <div className="w-full max-w-[500px] rounded-[20px] bg-gray-900 py-12 px-8 text-center md:py-[60px] md:px-[70px] mt-10">
          <h3 className="text-white pb-2 text-xl font-bold sm:text-2xl">
            Landing Pages
          </h3>
          <span className="bg-indigo-500 mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
          <p className="text-gray-400 mb-5 text-base leading-relaxed">
            Páginas web projetada para capturar a atenção do usuário após ele
            clicar em um anúncio ou link de e-mail. Estrategicamente criada para
            conversão, ela direciona o visitante a realizar uma ação específica,
            como preencher um formulário, fazer um cadastro ou efetuar uma
            compra. 🚀
          </p>
          <div className="flex flex-wrap gap-3 pt-5">
            <Link
              href="https://wa.me/5551999038481?text=Quero%20contratar%20o%20servi%C3%A7o%20de%20landing%20page!"
              className="bg-indigo-500 border-indigo-500 block w-full rounded-lg border p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
            >
              Contratar agora!
            </Link>
          </div>
        </div>

        {/* site institucional */}
        <div className="w-full max-w-[500px] rounded-[20px] bg-gray-900 py-12 px-8 text-center md:py-[60px] md:px-[70px] mt-10">
          <h3 className="text-white pb-2 text-xl font-bold sm:text-2xl">
            Sites Institucionais
          </h3>
          <span className="bg-indigo-500 mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
          <p className="text-gray-400 mb-2 text-base leading-relaxed">
            Um site é um conjunto de páginas web conectadas, acessíveis por
            qualquer navegador. Ele pode assumir diversos papéis: informar,
            educar, entreter ou até impulsionar vendas de produtos e serviços.
            Seja qual for o objetivo, um site é a ponte para conectar você ao
            mundo digital! 🌐✨
          </p>
          <div className="flex flex-wrap gap-3 pt-8">
            <Link
              href="https://wa.me/5551999038481?text=Quero%20contratar%20o%20servi%C3%A7o%20de%20site%20institucional!"
              className="bg-indigo-500 border-indigo-500 block w-full rounded-lg border p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
            >
              Contratar agora!
            </Link>
          </div>
        </div>

        {/* E-commerce */}
        <div className="w-full max-w-[500px] rounded-[20px] bg-gray-900 py-12 px-8 text-center md:py-[60px] md:px-[70px] mt-10">
          <h3 className="text-white pb-2 text-xl font-bold sm:text-2xl">
            E-Commerces
          </h3>
          <span className="bg-indigo-500 mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
          <p className="text-gray-400 mb-5 text-base leading-relaxed">
            Desenvolvemos sua loja em plataformas modernas e intuitivas,
            priorizando usabilidade e uma experiência do usuário impecável. Com
            design estratégico e navegação simples, garantimos que seus clientes
            tenham uma jornada de compra incrível! 🚀 (Via Plataforma)
          </p>
          <div className="flex flex-wrap gap-3 pt-5">
            <Link
              href="https://wa.me/5551999038481?text=Quero%20contratar%20o%20servi%C3%A7o%20de%20E-commerce!"
              className="bg-indigo-500 border-indigo-500 block w-full rounded-lg border p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
            >
              Contratar agora!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
