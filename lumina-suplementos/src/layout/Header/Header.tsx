import Navbar from '../Navbar/Navbar';
import MorangoELemonade from '../../assets/produtosHeader.png';
import { FaBagShopping } from 'react-icons/fa6';

const Header = () => {
  return (
    <>
      <header className="bg-[#d40976]">
        <div className="pt-12">
          <Navbar />
        </div>
        <div className="m-auto mt-16 w-[50%] text-center text-[#FFFFFF]">
          <h1 className="text-4xl font-bold">
            Com Lumifin: você <span className="text-[#58BFF1]">acelera</span>{' '}
            sua jornada, <span className="text-[#58BFF1]">potencializa</span>{' '}
            seu emagrecimento e revela sua{' '}
            <span className="text-[#58BFF1]">melhor versão</span>.
          </h1>
          <p className="mt-4 text-lg font-medium">
            Mais praticidade e sabor para potencializar seu emagrecimento e
            alcançar seus objetivos.
          </p>
        </div>
        <div className="relative flex items-center justify-center">
          <img
            src={MorangoELemonade}
            alt="Foto dos produtos morango e lemonade"
            className="animate-entry w-[40%]"
          />
        </div>
        <div className="mt-8 flex items-center justify-center uppercase pb-14">
          <a
            href="#produtos"
            className="flex flex-row items-center gap-4 rounded-full bg-[#F33E9E] px-8 py-4 text-lg font-bold tracking-wide text-white shadow-[0_12px_30px_rgba(0,0,0,0.30),0_0_25px_rgba(243,62,158,0.65)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#FF55AD] hover:shadow-[0_16px_35px_rgba(0,0,0,0.30),0_0_40px_rgba(255,85,173,0.95)] active:translate-y-0 active:scale-95 hover:text-emerald-900"
          >
            Quero meu Lumifin
            <FaBagShopping className="text-lg" />
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
