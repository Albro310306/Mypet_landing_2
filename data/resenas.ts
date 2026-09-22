import type { Resena } from "@/types/resena";

// TODO: Agregar aqui las reseñas REALES proporcionadas por MyPet y autorizadas para publicacion.
// Cada reseña debe contener: nombre, texto y (si existe) rating y mascota.
export const resenas: Resena[] = [
  {
    id: "1",
    nombre: "Camila Rojas",
    mascota: "Dueña de Max",
    rating: 5,
    texto: "Desde que Max pasea con el equipo de MyPet, regresa mucho más relajado y feliz. La comunicación es excelente y siempre me envían fotos de sus aventuras. ¡100% recomendados!",
    foto: "/images/mascotas/mascota_1.jpg"
  },
  {
    id: "2",
    nombre: "Jorge Villanueva",
    mascota: "Dueño de Toby",
    rating: 5,
    texto: "Trabajo todo el día y me sentía muy culpable por dejar a Toby solo. Encontrar a MyPet fue un alivio. El paseador es súper puntual y Toby lo adora.",
    foto: "/images/mascotas/mascota_2.jpg"
  },
  {
    id: "3",
    nombre: "Andrea Medina",
    mascota: "Dueña de Luna",
    rating: 5,
    texto: "Luna es una cachorrita con mucha energía y necesitaba paciencia. El paseo individual ha sido clave para que aprenda a socializar poco a poco. Excelente servicio.",
    foto: "/images/mascotas/mascota_3.jpg"
  },
  {
    id: "4",
    nombre: "Luis Torres",
    mascota: "Dueño de Rocky",
    rating: 5,
    texto: "Muy profesionales. Valoro mucho la seguridad y transparencia que brindan. Sé exactamente quién está paseando a mi perro y eso no tiene precio.",
    foto: "/images/mascotas/mascota_1.jpg"
  },
  {
    id: "5",
    nombre: "Sofía Castro",
    mascota: "Dueña de Bella",
    rating: 5,
    texto: "Bella es una perrita mayor y necesita ir a su ritmo. El paseador es súper comprensivo y cariñoso con ella. Me da muchísima tranquilidad dejarlos a cargo.",
    foto: "/images/mascotas/mascota_2.jpg"
  }
];