export function inputSaving() {
    return `
        <section class="max-w-md mx-auto mb-12 relative font-mono">
            <!-- Contenedor Estilo Módulo de Transferencia -->
            <div class="bg-slate-900 border-2 border-cyan-900 p-6 relative shadow-[0_0_15px_rgba(34,211,238,0.05)]">
                
                <!-- Decoración: Líneas de Datos laterales -->
                <div class="absolute left-0 top-1/4 w-1 h-1/2 bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-50"></div>
                
                <!-- Encabezado de Módulo -->
                <div class="mb-6 flex justify-between items-start border-b border-cyan-900/50 pb-4">
                    <div>
                        <h2 class="text-cyan-400 text-sm font-black uppercase tracking-widest flex items-center gap-2">
                            <span class="inline-block w-2 h-2 bg-cyan-500 shadow-[0_0_5px_#22d3ee]"></span>
                            Fund_Allocation_v1.1
                        </h2>
                        <p class="text-[9px] text-cyan-800 mt-1 font-bold">SOURCE: MAIN_BALANCE >> DESTINATION: SAVINGS</p>
                    </div>
                    <span class="text-[10px] text-cyan-900 italic">TX_ID: 99-B</span>
                </div>

                <form class="space-y-5">
                    <!-- Selector de Objetivo (Destino) -->
                    <div class="flex flex-col gap-2">
                        <label class="text-[10px] uppercase font-bold text-cyan-700 tracking-tighter">
                            > SELECT_TARGET_GOAL
                        </label>
                        <div class="relative">
                            <select class="w-full bg-slate-950 border border-cyan-900 p-3 text-cyan-400 focus:outline-none focus:border-cyan-400 appearance-none cursor-pointer text-xs uppercase">
                                <option value="moto">[ GOAL: MOTO | CAP: 8M ]</option>
                                <option value="viaje">[ GOAL: VIAJE | CAP: 2M ]</option>
                                <option value="emergencia">[ GOAL: FONDO_EMERGENCIA ]</option>
                            </select>
                            <!-- Flecha personalizada -->
                            <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none text-cyan-900">
                                ▼
                            </div>
                        </div>
                    </div>

                    <!-- Monto del Abono -->
                    <div class="flex flex-col gap-2">
                        <label class="text-[10px] uppercase font-bold text-cyan-700 tracking-tighter">
                            > DEPOSIT_AMOUNT ($)
                        </label>
                        <div class="relative group">
                            <input type="number" placeholder="0.00" 
                                class="w-full bg-slate-950 border border-cyan-900/50 p-3 text-cyan-400 placeholder:text-cyan-900 focus:outline-none focus:border-cyan-400 transition-colors text-lg font-bold">
                            <!-- Decoración interna de input -->
                            <div class="absolute right-3 bottom-1 text-[8px] text-cyan-900 font-bold">INPUT_REQUIRED</div>
                        </div>
                    </div>

                    <!-- Botón de Confirmación -->
                    <div class="pt-4">
                        <button type="submit" 
                            class="w-full bg-transparent border-2 border-cyan-400 py-3 text-cyan-400 font-black uppercase tracking-[0.3em] text-xs hover:bg-cyan-400 hover:text-slate-950 transition-all duration-200 relative group overflow-hidden">
                            
                            <span class="relative z-10">Confirm_Deposit_Entry</span>
                            
                            <!-- Efecto de glitch al hover -->
                            <div class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shine"></div>
                        </button>
                    </div>
                </form>

                <!-- Información de Sistema -->
                <div class="mt-6 grid grid-cols-2 gap-2 border-t border-cyan-900/30 pt-4">
                    <div class="text-[8px] text-cyan-900">
                        <p>LATENCY: 12ms</p>
                        <p>ENCRYPTION: ACTIVE</p>
                    </div>
                    <div class="text-right text-[8px] text-cyan-900 uppercase">
                        <p>Verified_By_JD_Zapata</p>
                        <p class="text-cyan-600">Secure_Node_01</p>
                    </div>
                </div>
            </div>
        </section>

        <style>
            @keyframes shine {
                100% {
                    left: 125%;
                }
            }
            .animate-shine {
                animation: shine 0.7s italic;
            }
        </style>
    `;
}