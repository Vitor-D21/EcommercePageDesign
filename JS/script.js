function headerCell() {

    const header = document.getElementById("header");
    // Menu / Logo / Login / Carrinho

    const divMenu = document.createElement("div")
    divMenu.className = "divMenu"

    divMenu.innerHTML = ""; // Limpa para evitar duplicações

    // Botão Menu

    divMenu.innerHTML = (`
        <button aria-label="menu" type="button" class="btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="black">
                <path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" />
            </svg>
        </button>
    `);
    
    // Logo 

    const divLogo = document.createElement("div")
    divLogo.className = "divLogo"

    divLogo.innerHTML = (`
        <img src="CSS/images/logo-avanti.png" alt="Logo Avanti">
    `)

    // Botão Perfil

    const divPerfil = document.createElement("div")
    divPerfil.className = "divPerfil"

    divPerfil.innerHTML = (`
        <button aria-label="perfil" type="button" class="btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#007bff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
            </svg>
        </button>
    `)

    // Botão Carrinho

    const divCarrinho = document.createElement("div")
    divCarrinho.className = "divCarrinho"

    divCarrinho.innerHTML = (`
        <button aria-label="carrinho" type="button" class="btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
        </button>    
    `)

    divMenu.append(divLogo, divPerfil, divCarrinho)

    const divBusca = document.createElement("div")
    divBusca.className = "divBusca"

    divBusca.innerHTML = ""; // Limpa para evitar duplicações

    header.append(divMenu, divBusca);
}

function responsive() {
    const mediaQueryCell = window.matchMedia('(max-width: 768px)')

    const mediaQueryTablet = window.matchMedia('(max-width: 1024px)')

    if (mediaQueryCell.matches) {
        headerCell()
    } else if (mediaQueryTablet.matches) {
        headerTablet()
    } else {
        header()
    }
}

responsive()