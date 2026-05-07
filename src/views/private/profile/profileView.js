export function profileView() {
    
    return `
        <div class="min-h-full w-full bg-slate-950 p-6 font-mono text-emerald-500 relative overflow-hidden">
                
            <div class="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-50"></div>

                <div class="max-w-md mx-auto relative z-10">
                    
                    <header class="top-2 z-40 bg-slate-950/90 backdrop-blur-sm border-b-2 border-emerald-900 pb-4 mb-8 flex justify-between items-end pt-2">
                        
                        <div>
                            <h1 id='usuarioLogueado' class="text-2xl font-black tracking-tighter uppercase italic leading-none">
                                Monto_v1.0
                            </h1>
                            <p id='correoLogueado' class="text-[10px] text-emerald-800 font-bold uppercase mt-1">
                                > Access_granted: User_JD_Zapata
                            </p>
                        </div>
                        <div class="text-right">
                            <span class="text-[10px] block text-emerald-800">DATA_SYNC</span>
                            <span class="text-xs animate-pulse">● ONLINE</span>
                        </div>
                    </header>

                    <section class="mb-6 hover:border-emerald-100 hover:scale-105">
                        <div class="contenedorBalance p-5 relative group">
                            <div class="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-emerald-400"></div>
                            <div class="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-emerald-400"></div>
                            
                            <h2 class="text-xs uppercase font-bold mb-2 flex justify-between">
                                <span>[ Balance_General ]</span>
                                <span class="mensajeBalance text-emerald-700">ID: 001-Z</span>
                            </h2>
                            
                            <div class="flex items-center justify-between">
                                <span class="text-4xl font-black tracking-tighter" id="perfil-balance-total">
                                    $0.00
                                </span>
                                <div class="text-[10px] leading-tight border-l pl-3">
                                    <p class="mensajeBalance text-emerald-700 italic">// Fondos</p>
                                    <p class="mensajeBalance text-emerald-700 italic">// Disponibles</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div class="grid grid-cols-2 gap-4 mb-8">
                        <div class="bg-slate-900 border border-emerald-900 p-3 hover:border-emerald-500
                        hover:scale-105 transition-colors">
                            <h3 class="text-[9px] uppercase text-emerald-700 mb-1 font-bold">Total_Ingresos</h3>
                            <p class="ingresos text-xl font-bold" id="perfil-ingresos">+$0</p>
                        </div>
                        <div class="bg-slate-900 border border-rose-400 p-3 hover:border-rose-500 hover:scale-105 transition-colors">
                            <h3 class="text-[9px] uppercase text-rose-500 mb-1 font-bold">Total_Gastos</h3>
                            <p class="text-xl font-bold text-rose-500" id="perfil-gastos">-$0</p>
                        </div>
                    </div>

                    <section class="contenedorAhorrosPerfil space-y-4">
                        <div class="flex items-center gap-2 mb-4">
                            <div class="h-[2px] flex-1 bg-emerald-900"></div>
                            <h3 class="text-xs font-bold uppercase tracking-widest text-emerald-300">Objetivos de Ahorro</h3>
                            <div class="h-[2px] flex-1 bg-emerald-900"></div>
                        </div>

                        
                    </section>

                    <div class="h-32"></div>

                </div>
            </div>
        </div>
    
    `;
    
}