export function formTransaction() {
    return `
        <section class="max-w-2xl mx-auto mb-12 relative">
            <!-- Contenedor del Formulario -->
            <div class="bg-slate-900 border-2 border-emerald-900 p-6 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                
                <!-- Encabezado del Formulario -->
                <div class="flex items-center gap-2 mb-6 border-b border-emerald-900 pb-3">
                    <span class="animate-bounce">▼</span>
                    <h2 class="text-sm font-black uppercase tracking-[0.2em]">New_Transaction_Entry</h2>
                </div>

                <form class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    <!-- Tipo de Transacción (Select) -->
                    <div class="flex flex-col gap-2">
                        <label class="text-[10px] uppercase font-bold text-emerald-700 font-mono">> Select_Type</label>
                        <select class="bg-slate-950 border border-emerald-900 p-2 text-emerald-500 focus:outline-none focus:border-emerald-400 appearance-none cursor-pointer font-mono text-sm uppercase">
                            <option value="income" class="bg-slate-950 text-emerald-500">[+] Income</option>
                            <option value="expense" class="bg-slate-950 text-rose-500">[-] Expense</option>
                        </select>
                    </div>

                    <!-- Nombre -->
                    <div class="flex flex-col gap-2">
                        <label class="text-[10px] uppercase font-bold text-emerald-700 font-mono">> Entry_Name</label>
                        <input type="text" placeholder="E.g. Salario..." 
                            class="bg-slate-950 border border-emerald-900 p-2 text-emerald-400 placeholder:text-emerald-900 focus:outline-none focus:border-emerald-400 font-mono text-sm uppercase">
                    </div>

                    <!-- Categoría (Select) -->
                    <div class="flex flex-col gap-2">
                        <label class="text-[10px] uppercase font-bold text-emerald-700 font-mono">> Category_Class</label>
                        <select class="bg-slate-950 border border-emerald-900 p-2 text-emerald-500 focus:outline-none focus:border-emerald-400 appearance-none cursor-pointer font-mono text-sm">
                            <option value="pago mensual">PAGO MENSUAL</option>
                            <option value="alimentacion">ALIMENTACION</option>
                            <option value="ocio">OCIO / DIVERSION</option>
                            <option value="servicios">SERVICIOS PUBLICOS</option>
                            <option value="otros">OTROS_SISTEMAS</option>
                        </select>
                    </div>

                    <!-- Valor (Monto) -->
                    <div class="flex flex-col gap-2">
                        <label class="text-[10px] uppercase font-bold text-emerald-700 font-mono">> Numeric_Value</label>
                        <div class="relative">
                            <span class="absolute left-2 top-2 text-emerald-800 font-bold">$</span>
                            <input type="number" placeholder="0.00" 
                                class="w-full bg-slate-950 border border-emerald-900 p-2 pl-6 text-emerald-400 placeholder:text-emerald-900 focus:outline-none focus:border-emerald-400 font-mono text-sm uppercase">
                        </div>
                    </div>

                    <!-- Botón de Ejecución -->
                    <div class="md:col-span-2 mt-4">
                        <button type="submit" 
                            class="w-full bg-emerald-900/20 border-2 border-emerald-500 py-3 text-emerald-400 font-black uppercase tracking-widest hover:bg-emerald-500 hover:text-slate-950 transition-all duration-300 shadow-[0_0_10px_rgba(16,185,129,0.3)] group relative overflow-hidden">
                            <span class="relative z-10">Execute_Transaction.exe</span>
                            <!-- Efecto de brillo al pasar el mouse -->
                            <div class="absolute inset-0 bg-emerald-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
                        </button>
                    </div>

                </form>
                
                <!-- Decoración de pie de formulario -->
                <div class="mt-4 flex justify-between items-center text-[9px] text-emerald-900">
                    <span>MEM_ADDR: 0x4F3A...</span>
                    <span class="italic">Ready for input_</span>
                </div>
            </div>
        </section>
    `;
}