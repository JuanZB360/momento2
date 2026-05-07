export function formSaving() {
    return `
        <section class="max-w-2xl mx-auto mb-12 relative font-mono">
            <!-- Contenedor del Formulario Ámbar -->
            <div class="bg-slate-900 border-2 border-amber-900 p-6 shadow-[0_0_20px_rgba(251,191,36,0.05)] relative">
                
                <!-- Decoración de esquinas estilo Radar -->
                <div class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-amber-500/50"></div>
                <div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-amber-500/50"></div>

                <!-- Encabezado -->
                <div class="flex items-center justify-between mb-8 border-b-2 border-amber-900/50 pb-4">
                    <div>
                        <h2 class="text-amber-500 text-lg font-black uppercase tracking-tighter italic">
                            Define_Saving_Goal_v2.0
                        </h2>
                        <p class="text-[9px] text-amber-800 font-bold tracking-[0.3em]">RESERVE_FUNDS_PROTOCOL</p>
                    </div>
                    <div class="text-amber-600 animate-pulse text-xs">
                        [WAITING_FOR_INPUT]
                    </div>
                </div>

                <form class="space-y-6">
                    <!-- Nombre del Objetivo -->
                    <div class="flex flex-col gap-2 group">
                        <label class="text-[10px] uppercase font-bold text-amber-700">
                            > OBJECTIVE_IDENTIFIER
                        </label>
                        <input type="text" placeholder="E.G. COMPRA_MOTO_XZ..." 
                            class="bg-slate-950 border border-amber-900/50 p-3 text-amber-400 placeholder:text-amber-900/50 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all uppercase text-sm">
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Meta Financiera (Target) -->
                        <div class="flex flex-col gap-2">
                            <label class="text-[10px] uppercase font-bold text-amber-700">
                                > TARGET_AMOUNT ($)
                            </label>
                            <div class="relative">
                                <input type="number" placeholder="8000000" 
                                    class="w-full bg-slate-950 border border-amber-900/50 p-3 text-amber-400 placeholder:text-amber-900/50 focus:outline-none focus:border-amber-500 text-sm">
                                <div class="absolute right-3 top-3 text-amber-900 text-[10px] font-bold">MAX_CAP</div>
                            </div>
                        </div>

                        <!-- Monto Inicial (Current) -->
                        <div class="flex flex-col gap-2">
                            <label class="text-[10px] uppercase font-bold text-amber-700">
                                > INITIAL_DEPOSIT ($)
                            </label>
                            <div class="relative">
                                <input type="number" placeholder="0" 
                                    class="w-full bg-slate-950 border border-amber-900/50 p-3 text-amber-400 placeholder:text-amber-900/50 focus:outline-none focus:border-amber-500 text-sm">
                                <div class="absolute right-3 top-3 text-amber-900 text-[10px] font-bold">MIN_01</div>
                            </div>
                        </div>
                    </div>

                    <!-- Botón de Creación -->
                    <div class="pt-4">
                        <button type="submit" 
                            class="w-full py-4 bg-amber-500 text-slate-950 font-black uppercase tracking-[0.2em] text-sm hover:bg-amber-400 hover:shadow-[0_0_15px_rgba(251,191,36,0.4)] transition-all active:scale-95 relative overflow-hidden group">
                            <span class="relative z-10">Initialize_Saving_Protocol</span>
                            <!-- Scanline effect exclusivo del botón -->
                            <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_50%,transparent_50%)] bg-[length:100%_4px] pointer-events-none"></div>
                        </button>
                    </div>
                </form>

                <!-- Footer Footer del Formulario -->
                <div class="mt-6 flex justify-between items-end border-t border-amber-900/30 pt-4">
                    <div class="flex gap-4">
                        <div class="w-2 h-2 bg-amber-500 animate-ping"></div>
                        <div class="w-2 h-2 bg-amber-800"></div>
                        <div class="w-2 h-2 bg-amber-800"></div>
                    </div>
                    <span class="text-[8px] text-amber-900 font-bold uppercase italic">System_Auth: Admin_Level_05</span>
                </div>
            </div>
        </section>
    `;
}