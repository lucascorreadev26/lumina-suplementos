import Logo from '../../components/Logo';

const Navbar = () => {
  return (
    <>
      <nav className="m-auto flex w-[50%] flex-row items-center justify-evenly gap-12 rounded-full bg-[#F33E9E] shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
        <div>
          <Logo />
        </div>

        <div>
          <ul className="flex flex-row items-center gap-8 font-sans text-base font-medium tracking-wide text-fuchsia-950">
            <li>
              <a
                href="#beneficios"
                className="inline-block transition-all duration-300 hover:scale-105 hover:text-[#58BFF1]"
              >
                Benefícios
              </a>
            </li>

            <li>
              <a
                href="#produtos"
                className="inline-block transition-all duration-300 hover:scale-105 hover:text-[#58BFF1]"
              >
                Produtos
              </a>
            </li>

            <li>
              <a
                href="#resultados"
                className="inline-block transition-all duration-300 hover:scale-105 hover:text-[#58BFF1]"
              >
                Resultados
              </a>
            </li>

            <li></li>

            <li>
              <a
                href="#afiliados"
                className="inline-block transition-all duration-300 hover:scale-105 hover:text-[#58BFF1]"
              >
                Afiliados
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
