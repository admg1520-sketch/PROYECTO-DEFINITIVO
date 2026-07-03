// --- 1. BASE DE DATOS LOCAL ---
const baseDeDatos = [
    { titulo: "Chambea", artista: "Bad Bunny", archivo: "musica/Bad Bunnychambea.m4a", genero: "Reggaeton", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Bad+Bunny", seccion: "acceso-rapido" },
    { titulo: "Tití Me Preguntó", artista: "Bad Bunny", archivo: "musica/titimepregunto.m4a", genero: "Reggaeton", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Bad+Bunny", seccion: "acceso-rapido" },
    { titulo: "Dákiti", artista: "Bad Bunny & Jhay Cortez", archivo: "musica/dakiti.m4a", genero: "Reggaeton", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Dakiti", seccion: "acceso-rapido" },
    { titulo: "Propuesta Indecente", artista: "Romeo Santos", archivo: "musica/romeo.mp3", genero: "Bachata", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Romeo", seccion: "acceso-rapido" },
    { titulo: "COSAS QUE NO TE DIJE", artista: "Saiko", archivo: "musica/saiko.mp3", genero: "Reggaeton", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Saiko", seccion: "acceso-rapido" },
    { titulo: "As It Was", artista: "Harry Styles", archivo: "musica/asitwas.m4a", genero: "Pop", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Harry", seccion: "acceso-rapido" },
    { titulo: "Blinding Lights", artista: "The Weeknd", archivo: "musica/blinding.m4a", genero: "Pop", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=The+Weeknd", seccion: "acceso-rapido" },
    { titulo: "Starboy", artista: "The Weeknd & Daft Punk", archivo: "musica/starboy.m4a", genero: "Pop", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Starboy", seccion: "acceso-rapido" },
    { titulo: "Ella Baila Sola", artista: "Eslabón Armado & Peso Pluma", archivo: "musica/ellabailasola.m4a", genero: "Regional", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Peso+Pluma", seccion: "acceso-rapido" },
    { titulo: "LALA", artista: "Myke Towers", archivo: "musica/lala.m4a", genero: "Reggaeton", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Lala", seccion: "acceso-rapido" },
    { titulo: "LUNA", artista: "Feid & ATL Jacob", archivo: "musica/luna.m4a", genero: "Reggaeton", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Luna", seccion: "acceso-rapido" },
    { titulo: "Anti-Hero", artista: "Taylor Swift", archivo: "musica/antihero.m4a", genero: "Pop", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Taylor", seccion: "mas-sonadas" },
    { titulo: "Cruel Summer", artista: "Taylor Swift", archivo: "musica/cruelsummer.m4a", genero: "Pop", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Taylor", seccion: "mas-sonadas" },
    { titulo: "Shake It Off", artista: "Taylor Swift", archivo: "musica/shakeit.m4a", genero: "Pop", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Taylor", seccion: "mas-sonadas" },
    { titulo: "CHIHIRO", artista: "Billie Eilish", archivo: "musica/chihiro.m4a", genero: "Pop", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Billie", seccion: "mas-sonadas" },
    { titulo: "Billy", artista: "Billie Eilish", archivo: "musica/billy.mp3", genero: "Pop", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Billie", seccion: "mas-sonadas" },
    { titulo: "Flowers", artista: "Miley Cyrus", archivo: "musica/flowers.m4a", genero: "Pop", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Flowers", seccion: "mas-sonadas" },
    { titulo: "Espresso", artista: "Sabrina Carpenter", archivo: "musica/espresso.m4a", genero: "Pop", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Espresso", seccion: "mas-sonadas" },
    { titulo: "Levitating", artista: "Dua Lipa", archivo: "musica/levitating.m4a", genero: "Pop", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Dua+Lipa", seccion: "mas-sonadas" },
    { titulo: "Shape of You", artista: "Ed Sheeran", archivo: "musica/shapeofyou.m4a", genero: "Pop", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Ed+Sheeran", seccion: "mas-sonadas" },
    { titulo: "Watermelon Sugar", artista: "Harry Styles", archivo: "musica/watermelon.m4a", genero: "Pop", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Harry", seccion: "mas-sonadas" },
    { titulo: "Todo De Ti", artista: "Rauw Alejandro", archivo: "musica/tododeti.m4a", genero: "Pop", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Rauw", seccion: "mas-sonadas" },
    { titulo: "Dura", artista: "Daddy Yankee", archivo: "musica/dura.m4a", genero: "Reggaeton", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=DY", seccion: "recomendadas" },
    { titulo: "Gasolina", artista: "Daddy Yankee", archivo: "musica/gasolina.m4a", genero: "Reggaeton", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=DY", seccion: "recomendadas" },
    { titulo: "Despacito", artista: "Luis Fonsi & Daddy Yankee", archivo: "musica/despacito.m4a", genero: "Reggaeton", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Despacito", seccion: "recomendadas" },
    { titulo: "Danza Kuduro", artista: "Don Omar", archivo: "musica/danzakuduro.m4a", genero: "Reggaeton", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Don+Omar", seccion: "recomendadas" },
    { titulo: "Dile", artista: "Don Omar", archivo: "musica/dile.m4a", genero: "Reggaeton", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Don+Omar", seccion: "recomendadas" },
    { titulo: "Bailando", artista: "Enrique Iglesias", archivo: "musica/bailando.m4a", genero: "Pop Latino", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Bailando", seccion: "recomendadas" },
    { titulo: "Hasta El Amanecer", artista: "Nicky Jam", archivo: "musica/hastaelamanecer.m4a", genero: "Reggaeton", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Nicky+Jam", seccion: "recomendadas" },
    { titulo: "EL MAKINON", artista: "KAROL G & Mariah Angeliq", archivo: "musica/makinonm4a", genero: "Reggaeton", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Karol+G", seccion: "recomendadas" },
    { titulo: "Tusa", artista: "KAROL G & Nicki Minaj", archivo: "musica/tusa.m4a", genero: "Reggaeton", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Tusa", seccion: "recomendadas" },
    { titulo: "Pepas", artista: "Farruko", archivo: "musica/pepas.m4a", genero: "Guaracha", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Pepas", seccion: "recomendadas" },
    { titulo: "Pa Que Retozen", artista: "Tego Calderón", archivo: "musica/paqueretozen.m4a", genero: "Reggaeton", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Tego", seccion: "recomendadas" },
    { titulo: "Rakata", artista: "Wisin & Yandel", archivo: "musica/rakata.m4a", genero: "Reggaeton", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Wisin+Yandel", seccion: "recomendadas" },
    { titulo: "Relación", artista: "Sech", archivo: "musica/relacion.m4a", genero: "Reggaeton", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Sech", seccion: "recomendadas" },
    { titulo: "Closer", artista: "The Chainsmokers", archivo: "musica/closer.m4a", genero: "Electrónica", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Closer", seccion: "recomendadas" },
    { titulo: "Cold Heart", artista: "Elton John & Dua Lipa", archivo: "musica/coldheart.m4a", genero: "Pop", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Cold+Heart", seccion: "recomendadas" },
    { titulo: "Die For You", artista: "The Weeknd", archivo: "musica/dieforyou.m4a", genero: "R&B", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Die+For+You", seccion: "recomendadas" },
    { titulo: "Dynamite", artista: "BTS", archivo: "musica/dinamita.m4a", genero: "Pop", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Dynamite", seccion: "recomendadas" },
    { titulo: "Locked Out of Heaven", artista: "Bruno Mars", archivo: "musica/locked.m4a", genero: "Pop", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Bruno+Mars", seccion: "recomendadas" },
    { titulo: "Love Me Like You Do", artista: "Ellie Goulding", archivo: "musica/lovemelikeyoudo.m4a", genero: "Pop", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Ellie", seccion: "recomendadas" },
    { titulo: "Stay", artista: "The Kid LAROI & Justin Bieber", archivo: "musica/stay.m4a", genero: "Pop", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Stay", seccion: "recomendadas" },
    { titulo: "Yummy", artista: "Justin Bieber", archivo: "musica/yummy.m4a", genero: "R&B", portada: "https://via.placeholder.com/150/2a1b4e/ffffff?text=Yummy", seccion: "recomendadas" }
];

let cancionesActuales = [...baseDeDatos];
let indiceActual = 0;
const audioPlayer = document.getElementById('html5-player');

// --- 2. FUNCIÓN DE RENDERIZADO (GLOBAL) ---
function renderizarFila(contenedorId, listaCanciones) {
    const track = document.getElementById(contenedorId);
    if (!track) return;
    
    track.innerHTML = '';
    
    listaCanciones.forEach((cancion) => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.innerHTML = `
            <img src="${cancion.portada}" alt="${cancion.titulo}" class="album-cover" onerror="this.src='https://via.placeholder.com/150/2a1b4e/ffffff?text=ECLIPSE'">
            <h3 style="font-size: 0.9rem; margin-bottom: 3px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${cancion.titulo}</h3>
            <p style="font-size: 0.75rem; color: #b3b3b3; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${cancion.artista}</p>
        `;
        item.addEventListener('click', () => {
            const indexOriginal = baseDeDatos.indexOf(cancion);
            cargarCancion(indexOriginal, true);
        });
        track.appendChild(item);
    });
}

// --- 3. INICIALIZAR PANTALLA (CON FILTROS) ---
function inicializarPantallaPrincipal(generoFiltro = 'Todos') {
    let datosAFiltrar = baseDeDatos;
    
    if (generoFiltro === 'Reggaeton') {
        datosAFiltrar = baseDeDatos.filter(c => c.genero === 'Reggaeton');
    } else if (generoFiltro === 'Ingles') {
        // Incluye Pop, R&B, Electrónica
        datosAFiltrar = baseDeDatos.filter(c => ['Pop', 'R&B', 'Electrónica'].includes(c.genero));
    }

    renderizarFila('acceso-rapido-track', datosAFiltrar.filter(c => c.seccion === "acceso-rapido"));
    renderizarFila('mas-sonadas-track', datosAFiltrar.filter(c => c.seccion === "mas-sonadas"));
    renderizarFila('recomendadas-track', datosAFiltrar.filter(c => c.seccion === "recomendadas"));
}

// --- 4. CARGAR CANCION ---
function cargarCancion(index, autoPlay = true) {
    indiceActual = index;
    const cancion = baseDeDatos[indiceActual]; // Referencia a la base de datos completa
    if (!cancion) return;
    
    audioPlayer.src = cancion.archivo;
    // (Añade aquí tu lógica restante de actualizar imagen, título, etc.)
    if (autoPlay) audioPlayer.play();
}

// --- 5. EVENTOS ---
document.addEventListener('DOMContentLoaded', () => {
    inicializarPantallaPrincipal();

    const genreButtons = document.querySelectorAll('.genre-btn');
    genreButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            genreButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            inicializarPantallaPrincipal(e.target.getAttribute('data-genero'));
        });
    });
});