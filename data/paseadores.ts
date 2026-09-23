import type { Paseador } from "@/types/paseador";

// TODO: Reemplazar por los datos REALES de los paseadores proporcionados por MyPet.
// Los campos verificado/experiencia/rating/especialidades solo se agregan si el dato existe.
export const paseadores: Paseador[] = [
  {
    id: "placeholder-1",
    slug: "nombre-del-paseador",
    nombre: "Ana Ramírez", 
    foto: "/images/paseadores/paseador_1.jpg", 
    zona: "San Isidro, Miraflores", 
    descripcion:
      "Amante de los animales con más de 3 años de experiencia paseando perros de todas las razas. Siempre llevo premios y agua para los paseos largos.", 
    verificado: true, 
    experiencia: 3, 
    rating: 4.9, 
    especialidades: ["Cachorros", "Perros pequeños"], 
    paseosCompletados: 450,
    resenas: 128,
  },
  {
    id: "placeholder-2",
    slug: "nombre-del-paseador-2",
    nombre: "Carlos Gómez", 
    foto: "/images/paseadores/paseador_2.jpg", 
    zona: "Surco, San Borja", 
    descripcion:
      "Especialista en perros grandes y rutinas deportivas para mascotas con mucha energía. Entrenador canino certificado y amante de los animales.", 
    verificado: true,
    experiencia: 5,
    rating: 5.0,
    especialidades: ["Deportivo", "Perros grandes"], 
    paseosCompletados: 820,
    resenas: 315,
  },
  {
    id: "placeholder-3",
    slug: "nombre-del-paseador-3",
    nombre: "Lucía Fernández", 
    foto: "/images/paseadores/paseador_1.jpg", 
    zona: "Barranco, Chorrillos", 
    descripcion:
      "Paciencia y amor para los más viejitos. Conozco los cuidados especiales que necesitan y llevo un ritmo adecuado para su salud articular.", 
    verificado: true,
    experiencia: 8,
    rating: 4.8,
    especialidades: ["Adulto mayor", "Cuidados especiales"], 
    paseosCompletados: 630,
    resenas: 210,
  },
];