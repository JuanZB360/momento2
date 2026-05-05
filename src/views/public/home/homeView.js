export function homeView() {
    return `
        <div class="w-full min-h-dvh flex justify-center items-atart py-10">

            <div id="contenedorInicio" class="w-4/5 h-fit  py-20 flex flex-col justify-center items-center rounded-lg border-2 border-[#22D3EE] shadow-[0_0_15px_rgba(34,211,238,0.3)] bg-[#1E293B] relative hover:shadow-ms hover:shadow-[#22D3EE] ">

                <p class="absolute top-13 font-retro text-xs text-center start-2p text-[#F8FAFC]">
                    BIENVENIDO,<br>COMIENZA TU EXPERIENCIA.
                </p>

                <img src="./img/sinFondo/juan_avatar_saludando-removebg-preview.png" alt="saludo" class="w-42 mb-2 mt-5">

                <div class="flex gap-4">
                    <button class="login w-32 start-2p text-[0.6rem] border-2 border-[#22D3EE] p-2 rounded-lg bg-[#22D3EE]/20 text-[#22D3EE] hover:bg-[#22D3EE] hover:text-[#0F172A] hover:scale-105 active:scale-95 transition-all duration-300">LOGIN</button>
                    <button class="registro w-32 start-2p text-[0.6rem] border-2 border-[#F472B6] p-2 rounded-lg bg-[#F472B6]/20 text-[#F472B6] hover:bg-[#F472B6] hover:text-[#0F172A] hover:scale-105 active:scale-95 transition-all duration-300">REGISTRO</button>
                </div>

            </div>

        </div>
    `;
}