export function containerSavings(name, target, percentage) {
    return `
        <article class="relative pl-4 border-l-2 border-emerald-900 group">
            <div class="flex justify-between items-end mb-1">
                <div>
                    <h4 class="nombreAhorro text-xs font-bold uppercase group-hover:text-white transition-colors italic">${name}</h4>
                    <p class="valorAhorrar text-[9px] text-emerald-800 font-bold tracking-tighter">EST_VAL: $${target}</p>
                </div>
                <span class="avamce text-xs font-black">${percentage}%</span>
            </div>
            <div class="w-full bg-emerald-950 h-3 border border-emerald-900 p-[2px]">
                <div class="w-[${percentage}%] 
                bg-emerald-500 h-full shadow-[0_0_10px_#10b981]" ></div>
            </div>
        </article>
    `;
}