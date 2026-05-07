export function transaction() {
    
    return `
        <div class="min-h-screen w-full bg-slate-950 p-6 font-mono text-emerald-500 relative overflow-hidden">
            <!-- Efecto de líneas de escaneo (Scanlines) -->
            <div class="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-50"></div>

            <div class="max-w-6xl mx-auto relative z-10">
                
                <!-- Header de Navegación Rápida -->
                <header class="border-b-2 border-emerald-900 pb-4 mb-8 flex justify-between items-end">
                    <div>
                        <h1 class="text-2xl font-black tracking-tighter uppercase italic leading-none">Terminal_Logs_v1.0</h1>
                        <p class="text-[10px] text-emerald-800 font-bold uppercase mt-1">> Database_Query: Get_All_Transactions</p>
                    </div>
                    <div class="text-right">
                        <span class="text-[10px] block text-emerald-800">STATUS</span>
                        <span class="text-xs animate-pulse text-cyan-400">● READING_DISK...</span>
                    </div>
                </header>

                <!-- Contenedor de Dos Columnas -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    <!-- COLUMNA IZQUIERDA: INGRESOS -->
                    <section class="border border-emerald-900 bg-slate-900/50 backdrop-blur-sm p-4 relative">
                        <div class="absolute -top-2 -left-2 bg-slate-950 px-2 text-[10px] text-emerald-400 font-bold border border-emerald-400 italic">
                            [ INFLOW_DATA ]
                        </div>
                        
                        <div class="flex justify-between items-center mb-6 border-b border-emerald-900 pb-2">
                            <h2 class="text-lg font-bold uppercase tracking-tighter">Ingresos_Recientes</h2>
                            <span class="text-xs bg-emerald-900/30 px-2 py-1 text-emerald-400">TOTAL: +$5,240.00</span>
                        </div>

                        <!-- Lista de Ingresos -->
                        <div class="space-y-3">
                            <!-- Item de ejemplo -->
                            <div class="group flex items-center justify-between p-2 border border-emerald-900/30 hover:bg-emerald-500/10 transition-all cursor-crosshair">
                                <div class="flex flex-col">
                                    <span class="text-[10px] text-emerald-700">2026-05-07 // 14:00</span>
                                    <span class="text-sm font-bold uppercase">Nómina_Empresa_X</span>
                                </div>
                                <span class="text-emerald-400 font-black tracking-widest">+$3,500.00</span>
                            </div>

                            <div class="group flex items-center justify-between p-2 border border-emerald-900/30 hover:bg-emerald-500/10 transition-all cursor-crosshair">
                                <div class="flex flex-col">
                                    <span class="text-[10px] text-emerald-700">2026-05-05 // 09:30</span>
                                    <span class="text-sm font-bold uppercase">Freelance_Project_01</span>
                                </div>
                                <span class="text-emerald-400 font-black tracking-widest">+$1,740.00</span>
                            </div>
                            
                            <p class="text-[10px] text-emerald-800 italic mt-4">_end_of_inflow_buffer</p>
                        </div>
                    </section>

                    <!-- COLUMNA DERECHA: GASTOS -->
                    <section class="border border-rose-900 bg-slate-900/50 backdrop-blur-sm p-4 relative">
                        <div class="absolute -top-2 -left-2 bg-slate-950 px-2 text-[10px] text-rose-500 font-bold border border-rose-500 italic">
                            [ OUTFLOW_DATA ]
                        </div>

                        <div class="flex justify-between items-center mb-6 border-b border-rose-900 pb-2">
                            <h2 class="text-lg font-bold uppercase tracking-tighter text-rose-500">Gastos_Registrados</h2>
                            <span class="text-xs bg-rose-900/30 px-2 py-1 text-rose-400">TOTAL: -$1,210.00</span>
                        </div>

                        <!-- Lista de Gastos -->
                        <div class="space-y-3">
                            <div class="group flex items-center justify-between p-2 border border-rose-900/30 hover:bg-rose-500/10 transition-all cursor-crosshair">
                                <div class="flex flex-col">
                                    <span class="text-[10px] text-rose-800">2026-05-06 // 18:20</span>
                                    <span class="text-sm font-bold uppercase text-rose-200">Alquiler_Nodo_Central</span>
                                </div>
                                <span class="text-rose-500 font-black tracking-widest">-$900.00</span>
                            </div>

                            <div class="group flex items-center justify-between p-2 border border-rose-900/30 hover:bg-rose-500/10 transition-all cursor-crosshair">
                                <div class="flex flex-col">
                                    <span class="text-[10px] text-rose-800">2026-05-06 // 12:45</span>
                                    <span class="text-sm font-bold uppercase text-rose-200">Suministro_Energía</span>
                                </div>
                                <span class="text-rose-500 font-black tracking-widest">-$250.00</span>
                            </div>

                            <div class="group flex items-center justify-between p-2 border border-rose-900/30 hover:bg-rose-500/10 transition-all cursor-crosshair">
                                <div class="flex flex-col">
                                    <span class="text-[10px] text-rose-800">2026-05-04 // 21:10</span>
                                    <span class="text-sm font-bold uppercase text-rose-200">Mantenimiento_Hardware</span>
                                </div>
                                <span class="text-rose-500 font-black tracking-widest">-$60.00</span>
                            </div>

                            <p class="text-[10px] text-rose-900 italic mt-4">_end_of_outflow_buffer</p>
                        </div>
                    </section>

                </div>

                <!-- Footer Decorativo -->
                <footer class="mt-12 pt-4 border-t border-emerald-900/30 text-[10px] text-emerald-900 flex justify-between">
                    <span>SYS_ADMIN: JD_ZAPATA</span>
                    <span class="animate-pulse">VIRTUAL_MACHINE_ACTIVE</span>
                    <span>SECURE_ENCRYPTION_AES_256</span>
                </footer>

            </div>
        </div>
    `;
}