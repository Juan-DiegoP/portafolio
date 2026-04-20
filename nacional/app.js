const jugadores = [
  {
    nombre: "David Ospina", posicion: "Arquero", numero: 1,
    nacionalidad: "Colombiano", edad: 36,
    goles: 0, asistencias: 0, partidos: 8,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfwwjocELZU1KkkoyZvy2CWhtR_RgR1Vgq2Q&s"
  },
  {
    nombre: "Harlen Castillo", posicion: "Arquero", numero: 15,
    nacionalidad: "Colombiano", edad: 24,
    goles: 0, asistencias: 0, partidos: 7,
    foto: "https://cdn.colombia.com/sdi/2023/07/28/atletico-nacional-harlen-castillo-envio-un-mensaje-de-aliento-a-diego-novoa-1172828.jpg"
  },
  {
    nombre: "Kevin Cataño", posicion: "Arquero", numero: 44,
    nacionalidad: "Colombiano", edad: 22,
    goles: 0, asistencias: 0, partidos: 1,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GOpfwDdNdJzl1dojcb-2h04YPuQ3N6Mebw&s"
  },
  {
    nombre: "Cesar Haydar", posicion: "Defensa", numero: 4,
    nacionalidad: "Colombiano", edad: 23,
    goles: 0, asistencias: 0, partidos: 10,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK9R2lR1RfDYmTJqOuhc9zBEkIJOFjzra84A&s" 
  },
  {
    nombre: "Milton Casco", posicion: "Defensa", numero: 20,
    nacionalidad: "Argentino", edad: 38,
    goles: 2, asistencias: 2, partidos: 13,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK8lN903Sy4_hb2CJlmrtirXykbGHth8N_5A&s"
  },
  {
    nombre: "William Tesillo", posicion: "Defensa", numero: 16,
    nacionalidad: "Colombiano", edad: 34,
    goles: 1, asistencias: 1, partidos: 8,
    foto: "https://files.winsports.co/cms/2026/02/24193810/William-Tesillo-defensor-de-Nacional-_-VizzorImage-_-Andres-Alvarez.jpg?r=1_1"
  },
  {
    nombre: "Simón García", posicion: "Defensa", numero: 28,
    nacionalidad: "Colombiano", edad: 27,
    goles: 0, asistencias: 0, partidos: 11,
    foto: "https://estaticos.elcolombiano.com/binrepository/780x780/0c0/780d565/none/11101/BACG/g4svpzcwyaajyd0_49147951_20251101165926.jpg"
  },
  {
    nombre: "Andrés Román", posicion: "Defensa", numero: 6,
    nacionalidad: "Colombiano", edad: 28,
    goles: 0, asistencias: 1, partidos: 14,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA-1jR3m3X_XO94BefHKDzUbH2ykWBTCzbjg&s"
  },
  {
    nombre: "Samuel Velasquez", posicion: "Defensa", numero: 33,
    nacionalidad: "Colombiano", edad: 22,
    goles: 0, asistencias: 0, partidos: 5,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA2kmtSPR6Mmu2Q3mtq7K2P1y6R6YTcZOw8Q&s"
  },
  {
    nombre: "Juan Manuel Zapata", posicion: "Volante", numero: 80,
    nacionalidad: "Colombiano", edad: 21,
    goles: 0, asistencias: 0, partidos: 8,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJAtYy_Nly5YYJ0nxdF2_QLDLrYHeeI7-FJQ&s"
  },
  {
    nombre: "Edwin Cardona", posicion: "Volante", numero: 10,
    nacionalidad: "Colombiano", edad: 31,
    goles: 1, asistencias: 2, partidos: 13,
    foto: "https://www.espn.com.co/2003/photos2014/1209/g_cardona_288.jpg"
  },
  {
    nombre: "Jorman Campuzano", posicion: "Volante", numero: 21,
    nacionalidad: "Colombiano", edad: 28,
    goles: 0, asistencias: 0, partidos: 11,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi4BiaZE19aiPAc-m41g_EJYTxWwQO59pIdA&s"
  },
  {
    nombre: "Matheus Uribe", posicion: "Volante", numero: 8,
    nacionalidad: "Colombiano", edad: 32,
    goles: 1, asistencias: 0, partidos: 15,
    foto: "https://caracoltv.brightspotcdn.com/dims4/default/a1421e4/2147483647/strip/true/crop/1280x720+0+0/resize/1280x720!/format/webp/quality/75/?url=https%3A%2F%2Fcaracol-brightspot.s3.us-west-2.amazonaws.com%2Fe5%2Fad%2F1ee99a9a45279c377aefa746574f%2Fmateus-urobe.jpg"
  },
  {
    nombre: "Juan Rengifo", posicion: "Volante", numero: 19,
    nacionalidad: "Colombiano", edad: 21,
    goles: 6, asistencias: 5, partidos: 16,
    foto: "https://files.winsports.co/cms/2026/02/05100351/Juan-Manuel-Rengifo-y-un-inesperado-registro-en-el-Nacional-vs.-America-VizzorImage.jpg?r=4_3"
  },
  {
    nombre: "Juan Bauza", posicion: "Volante", numero: 30,
    nacionalidad: "Argentino", edad: 29,
    goles: 1, asistencias: 0, partidos: 6,
    foto: "https://estaticos.elcolombiano.com/binrepository/1200x799/1c0/1200d675/none/11101/CWUE/bauza_49264812_20251115175153.jpg"
  },
  {
    nombre: "Alfredo Morelos", posicion: "Delantero", numero: 9,
    nacionalidad: "Colombiano", edad: 28,
    goles: 9, asistencias: 2, partidos: 14,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ZNlA1czkygmhWynNxB2vuaGOrPJoUKTJww&s"
  },
  {
    nombre: "Andrés Sarmiento", posicion: "Delantero", numero: 29,
    nacionalidad: "Colombiano", edad: 24,
    goles: 3, asistencias: 4, partidos: 16,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfKbSfwigfdg1hjhszQxQy7mlLybyQ40PRZA&s"
  },
  {
    nombre: "Cristian Arango", posicion: "Delantero", numero: 17,
    nacionalidad: "Colombiano", edad: 31,
    goles: 1, asistencias: 0, partidos: 9,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-VVrYx40QAwdOlfFaYQjUUiZ3haU11k-nEg&s"
  },
  {
    nombre: "Marlos Moreno", posicion: "Delantero", numero: 7,
    nacionalidad: "Colombiano", edad: 29,
    goles: 2, asistencias: 1, partidos: 15,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYDnE2KTuRd9t-LAGgemqTHT61Mop17jMggA&s"
  },
  {
    nombre: "Nicolas Rodriguez", posicion: "Delantero", numero: 13,
    nacionalidad: "Colombiano", edad: 21,
    goles: 0, asistencias: 2, partidos: 11,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ixDe6OapOJN5pIB2OE93vzHcEVN-4ykssA&s"
  },
  {
    nombre: "Eduardo Bello", posicion: "Delantero", numero: 18,
    nacionalidad: "Venezolano", edad: 30,
    goles: 2, asistencias: 1, partidos: 10,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Rab-4n9F2Rbp3RW4K1gtrOXOMPIWtOlaOw&s"
  },
  {
    nombre: "Dairon Asprilla", posicion: "Delantero", numero: 27,
    nacionalidad: "Colombiano", edad: 30,
    goles: 2, asistencias: 1, partidos: 13,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVQ8TcLnAo_RKuYSf66sBsOhN81uBVQsawNQ&s"
  }
];

const colores = {
  "Arquero":   { bg: "#fff3e0", color: "#e65100", borde: "#ffb74d" },
  "Defensa":   { bg: "#e8f5e9", color: "#2e7d32", borde: "#a5d6a7" },
  "Volante":   { bg: "#e3f2fd", color: "#1565c0", borde: "#90caf9" },
  "Delantero": { bg: "#fce4ec", color: "#880e4f", borde: "#f48fb1" }
};

function mostrarJugadores(lista) {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  lista.forEach(jugador => {
    const c = colores[jugador.posicion];
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta';
    tarjeta.innerHTML = `
      <img 
        src="${jugador.foto}" 
        alt="${jugador.nombre}"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
      >
      <div class="sin-foto" style="display:none;">${jugador.nombre.charAt(0)}</div>
      <div class="tarjeta-info">
        <span class="posicion" style="background:${c.bg}; color:${c.color}; border-color:${c.borde};">
          ${jugador.posicion}
        </span>
        <h3>N° ${jugador.numero} — ${jugador.nombre}</h3>
        <p>🌎 ${jugador.nacionalidad} · ${jugador.edad} años</p>
        <div class="stats">
          <div class="stat">
            <span class="stat-num">${jugador.goles}</span>
            <span class="stat-label">⚽ Goles</span>
          </div>
          <div class="stat">
            <span class="stat-num">${jugador.asistencias}</span>
            <span class="stat-label">🎯 Asistencias</span>
          </div>
          <div class="stat">
            <span class="stat-num">${jugador.partidos}</span>
            <span class="stat-label">🏟️ Partidos</span>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(tarjeta);
  });
}

document.getElementById('filtro').addEventListener('change', function() {
  const valor = this.value;
  const filtrados = valor ? jugadores.filter(j => j.posicion === valor) : jugadores;
  mostrarJugadores(filtrados);
});

mostrarJugadores(jugadores);