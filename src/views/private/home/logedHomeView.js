export function logedHomeView() {
    return `
        <div class="relative w-full h-dvh bg-[#0F172A] overflow-hidden flex flex-col">

            <main id="contenedorPrincipal" class="flex-1 w-full overflow-y-auto custom-scrollbar">
                
                <div class="p-6 text-slate-500 text-center mt-20">
                    Selecciona una opción del menú para comenzar...
                </div>
            </main>

            <div class="bottomLogOut absolute right-1 top-1 p-2 rounded-2xl hover:scale-105 hover:bg-amber-500/10 active:scale-95 transition-colors">
                <img src="./img/sinFondo/icono_cerrar_sesion-removebg-preview.png" 
                    alt="savings" class="w-10 h-10 object-contain opacity-70 group-hover:opacity-100 transition-opacity">
            </div>

            <div class="absolute bottom-6 left-0 w-full flex justify-center items-center px-4 pointer-events-none">
                <nav class="flex justify-around items-center w-full max-w-md h-20 
                            bg-slate-900/80 backdrop-blur-xl 
                            border border-slate-700/50 rounded-[2.5rem] 
                            shadow-2xl shadow-black/50 pointer-events-auto px-2">
                    
                    <ul class="flex justify-around items-center w-full gap-1">
                        
                        <li class="group flex-1">
                            <button id="btn-ingresos" class="bottomIncome w-full flex flex-col items-center gap-1 transition-all active:scale-90">
                                <div class="p-2 rounded-2xl group-hover:bg-indigo-500/10 transition-colors">
                                    <img src="./img/sinFondo/iconos_movimientos_dinero_ingreso-removebg-preview.png" 
                                        alt="income" class="w-8 h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity">
                                </div>
                            </button>
                        </li>

                        <li class="group flex-1">
                            <button id="btn-gastos" class="bottomExpenses w-full flex flex-col items-center gap-1 transition-all active:scale-90">
                                <div class="p-2 rounded-2xl group-hover:bg-rose-500/10 transition-colors">
                                    <img src="./img/sinFondo/iconos_movimientos_dinero_gasto-removebg-preview.png" 
                                        alt="expenses" class="w-8 h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity">
                                </div>
                            </button>
                        </li>

                        <li class="group flex-1">
                            <button id="btn-ahorros" class="bottomSavings w-full flex flex-col items-center gap-1 transition-all active:scale-90">
                                <div class="p-2 rounded-2xl group-hover:bg-amber-500/10 transition-colors">
                                    <img src="./img/sinFondo/iconos_movimientos_dinero_ahorro-removebg-preview.png" 
                                        alt="savings" class="w-8 h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity">
                                </div>
                            </button>
                        </li>

                        <li class="group flex-1">
                            <button id="btn-perfil" class="bottomProfile w-full flex flex-col items-center gap-1 transition-all active:scale-90">
                                <div class="p-2 rounded-2xl group-hover:bg-emerald-500/10 transition-colors">
                                    <img src="./img/sinFondo/iconos_movimientos_dinero_perfil-removebg-preview.png" 
                                        alt="profile" class="w-8 h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity">
                                </div>
                            </button>
                        </li>

                    </ul>
                </nav>
            </div>
        </div>
    `;
}