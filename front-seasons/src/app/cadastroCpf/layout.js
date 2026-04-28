export default function login({children}){

    return(
        <div className="block">
        <nav className="shadow-lg shadow-black fixed bg-nav-bar backdrop-blur-sm z-20 top-0 start-0 w-full h-15">
            <div className="">
                <div className="col flex justify-start">
                    
                </div>
                <div className="col flex justify-center h-18 w-80">
                    <img src="/seasons_logo.svg" 
                      className=""
                      alt="Logo seasons"
                    />
                </div>
                <div className="col flex justify-end">
                    
                </div>
            </div>
        </nav>

        <div className="">
          <footer className="bg-botao-generico fixed bottom-0 start-0 w-full h-15 border border-default-medium border-bg-white backdrop-blur-sm z-20 flex items-center justify-center">
            <p className="text-gray-300">© 2024 - Todos os direitos reservados</p>
          </footer>
        </div>

        <main>
          {children}
        </main>
        </div>
    );
}