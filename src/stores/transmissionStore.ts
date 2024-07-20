import { computed, reactive, type Reactive } from "vue";

export type Transmission = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  img: string;
  views: number;
  channel: string;

}

interface TransmissionStore {
  following: Transmission[];
  recommended: Transmission[];
}

export const transmissionStore: Reactive<TransmissionStore> = reactive({
  following: [
    {
      id: 1,
      title: "Lo mejor de la Gaita Zuliana",
      description: "Escuchando los cardenales del exito",
      tags: ["Gaita", "Zulia", "Musica"],
      img: "https://i.ytimg.com/vi/Q2kQbIrEB8I/hq720.jpg",
      views: 1000,
      channel: "Exitos 90.3",
    },
    {
      id: 2,
      title: "Aguilas vs Tigres",
      description: "Aguilas 5 - Tigres 3",
      tags: ["Beisbol", "LVBP", "Deportes"],
      img: "https://i.ytimg.com/vi/CBjs8Qabk2Q/hq720.jpg",
      views: 2000,
      channel: "Liga Venezolana de Beisbol Profesional",
    },
    {
      id: 3,
      title: "Exitos de Luis Miguel",
      description: "Hasta que me olvides",
      tags: ["Musica", "Mexico", "Baladas"],
      img: "https://i.ytimg.com/vi/wEF19rvbH3I/hq720.jpg",
      views: 3000,
      channel: "Exitos Mexicanos",
    },
    {
      id: 4,
      title: "Argentina vs Colombia",
      description: "Copa America 2024 - Argentina 1 - Colombia 1 ",
      tags: ["Futbol", "America", "Deportes"],
      img: "https://i.ytimg.com/vi/-eG3KB3h1LE/hq720.jpg",
      views: 400,
      channel: "Conmebol",
    },
  ],
  recommended: [
    {
      id: 7,
      title: "C: El mejor lenguaje de programacion",
      description: "Conversando con el creador de C, Dennis Ritchie",
      tags: ["Linux", "C", "Programacion"],
      img: "https://i.ytimg.com/vi/xf2W1wZozbk/hq720.jpg",
      views: 1000,
      channel: "Linux Foundation",
    },
    {
      id: 8,
      title: "Mario Jazz",
      description:
        "Musica de Mario Bros en Jazz, interpretado por la orquesta sinfonica de Londres",
      tags: ["Mario", "Jazz", "Musica"],
      img: "https://i.ytimg.com/vi/mw34FQUIu3I/hq720.jpg",
      views: 2000,
      channel: "Orquesta Sinfonica de Londres",
    },
    {
      id: 9,
      title: "Los mejores videojuegos de la historia",
      description: "Conversamos sobre los mejores juegos de todos los tiempos",
      tags: ["Videojuegos", "Juegos", "Top"],
      img: "https://i.ytimg.com/vi/ndodaE6OlSk/hq720.jpg",
      views: 3000,
      channel: "Top Games",
    },
    {
      id: 10,
      title: "Toad interpreta a Frank Sinatra",
      description:
        "Toad, el personaje de Mario Bros, interpreta a Frank Sinatra en un concierto en vivo",
      tags: ["Frank", "Sinatra", "Nintendo"],
      img: "https://i.ytimg.com/vi/ow5XgHDkPOQ/hq720.jpg",
      views: 40000,
      channel: "Nintendo",
    },
    {
      id: 11,
      title: "Wikipedia: $100/mes?????",
      description:
        "Conversamos con el fundador de Wikipedia sobre el futuro de la plataforma",
      tags: ["wikipedia", "futuro", "podcast"],
      img: "https://i.ytimg.com/vi/Bzj7u4Q5GG0/hq720.jpg",
      views: 5000,
      channel: "Juan Perez",
    },
  ],
});

export const allTransmissions = computed(() => {
  return transmissionStore.following.concat(transmissionStore.recommended);
});

