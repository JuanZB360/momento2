export function registerView() {
    return `
        <div class="w-4/5 h-10 flex justify-center items-center">
            <h1 class="w-4/5 start-2p text-center text-[#F8FAFC] text-xl border-white border-b-2">
                REGISTRATE
            </h1>
        </div>

        <div class="flex justify-center relative w-7/8">

            <form action="" method="post" class="formRegister w-full h-full py-5 flex flex-col justify-center items-center">
                <div class="relative flex flex-col w-4/5 h-10 mt-3">
                    <input 
                        type="text" 
                        id="name"
                        name="name"
                        placeholder=" " 
                        class="email peer w-full h-full pl-2 bg-transparent border-b-2 border-[#22D3EE]/30 text-[#F8FAFC] outline-none transition-colors duration-300 focus:border-[#22D3EE] placeholder-transparent"
                    >
                    <label 
                        for="name" 
                        class="absolute left-2 top-5 text-[#F8FAFC]/50 transition-all duration-300 pointer-events-none start-2p text-[0.6rem]
                            peer-focus:-top-4 peer-focus:text-[#22D3EE]
                            peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[#22D3EE]"
                    >
                        NOMBRE
                    </label>
                    <span id="error-name" class="hidden text-[#F472B6] text-[0.4rem] start-2p mt-1 absolute -bottom-3">
                        *** Debes agregar tu Nombre ***
                    </span>
                </div>
                <div class="relative flex flex-col w-4/5 h-10 mt-8">
                    <input 
                        type="email" 
                        id="email"
                        name="email"
                        placeholder=" " 
                        class="email peer w-full h-full pl-2 bg-transparent border-b-2 border-[#22D3EE]/30 text-[#F8FAFC] outline-none transition-colors duration-300 focus:border-[#22D3EE] placeholder-transparent"
                    >
                    <label 
                        for="email" 
                        class="absolute left-2 top-5 text-[#F8FAFC]/50 transition-all duration-300 pointer-events-none start-2p text-[0.6rem]
                            peer-focus:-top-4 peer-focus:text-[#22D3EE]
                            peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[#22D3EE]"
                    >
                        CORREO
                    </label>
                    <span id="error-email" class="hidden text-[#F472B6] text-[0.4rem] start-2p mt-1 absolute -bottom-3">
                        *** Debes agregar tu Correo ***
                    </span>
                </div>
                <div class="relative flex flex-col w-4/5 h-12 mt-8">
                    <input 
                        type="password" 
                        id="password"
                        name = "password"
                        placeholder=" " 
                        class="password peer w-full h-10 pl-2 bg-transparent border-b-2 border-[#F472B6]/30 text-[#F8FAFC] outline-none transition-colors duration-300 focus:border-[#F472B6] placeholder-transparent"
                    >
                    <label 
                        for="password" 
                        class="absolute left-2 top-5 text-[#F8FAFC]/50 transition-all duration-300 pointer-events-none start-2p text-[0.6rem] peer-focus:-top-4 peer-focus:text-[#F472B6] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[#F472B6]"
                    >
                        CONTRASEÑA
                    </label>
                    <span id="error-password" class="hidden text-[#22D3EE] text-[0.4rem] start-2p mt-1 absolute -bottom-1">
                        * Debes agregar la contraseña *
                    </span>                
                </div>
                
                <div class="w-full h-8 flex justify-start px-5 mt-2">
                    <label for="seePassword" class="w-full h-8 flex items-center group cursor-pointer">
                        <input type="checkbox" id="seePassword" class="peer sr-only">
                        <div class="w-5 h-5 mx-2 border-2 border-[#22D3EE] rounded-sm transition-all duration-300 peer-checked:bg-[#22D3EE]  peer-checked:shadow-[0_0_10px_#22D3EE]flex items-center justify-center">
                            <svg class="w-5 h-5 text-[#0F172A] opacity-0 peer-checked:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <span class="text-[#22D3EE]/40 text-xs font-semibold tracking-widest  group-hover:text-[#22D3EE] peer-checked:text-sm peer-checked:text-[#22D3EE]">
                            Mostrar Contraseña
                        </span>
                    </label>
                </div>
                
                <div class="w-4/5 mt-5 flex justify-center items-center">
                    
                    <button 
                        type="submit" 
                        class="w-4/5 py-4 bg-[#22D3EE]/10 border-2 border-[#22D3EE] text-[#22D3EE] start-2p text-[0.7rem] rounded-lg
                            relative overflow-hidden transition-all duration-300 group
                            hover:bg-[#22D3EE] hover:text-[#0F172A] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]
                            hover:-translate-y-1
                            active:scale-95 active:duration-75
                            cursor-pointer"
                    >
                        <span class="tracking-widest">INGRESAR</span>

                        <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                    </button>

                </div>
            </form>
        </div>
        <div class="w-full h-10 flex justify-start items-center px-10">
            <p class="botonAtras w-11 border-b-2 border-[#22D3EE]/30 text-xs text-[#22D3EE]/40 text-center hover:text-[#22D3EE] hover:scale-103 hover:border-[#22D3EE] active:scale-95 cursor-pointer">VOLVER</p>
        </div>

    `;
}