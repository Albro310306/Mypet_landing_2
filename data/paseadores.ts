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
      "Amante de los animales con más de 3 años de experiencia paseando perros de todas las razas.", 
    verificado: true, 
    experiencia: 3, 
    rating: 5, 
    especialidades: ["Cachorros", "Perros pequeños"], 
  },
  {
    id: "placeholder-2",
    slug: "nombre-del-paseador-2",
    nombre: "Carlos Gómez", 
    foto: "/images/paseadores/paseador_2.jpg", 
    zona: "Surco, San Borja", 
    descripcion:
      "Especialista en perros grandes y rutinas deportivas para mascotas con mucha energía.", 
    especialidades: ["Deportivo", "Perros grandes"], 
  },
  {
    id: "placeholder-3",
    slug: "nombre-del-paseador-3",
    nombre: "Lucía Fernández", 
    foto: "/images/paseadores/paseador_1.jpg", 
    zona: "Barranco, Chorrillos", 
    descripcion:
      "Paciencia y amor para los más viejitos. Conozco los cuidados especiales que necesitan.", 
    especialidades: ["Adulto mayor", "Cuidados especiales"], 
  },
];