import type { Paseador } from "@/types/paseador";

// TODO: Reemplazar por los datos REALES de los paseadores proporcionados por MyPet.
// Los campos verificado/experiencia/rating/especialidades solo se agregan si el dato existe.
export const paseadores: Paseador[] = [
  {
    id: "placeholder-1",
    slug: "nombre-del-paseador",
    nombre: "Nombre del paseador", // TODO: dato real
    foto: "/images/paseadores/paseador-1.svg", // TODO: foto real (webp preferido)
    zona: "Zona", // TODO: dato real
    descripcion:
      "Descripción breve y real del paseador, proporcionada por MyPet.", // TODO: dato real
    verificado: true, // TODO: solo si MyPet lo verifica
    experiencia: 1, // TODO: dato real
    rating: 5, // TODO: solo si existe rating real
    especialidades: ["Especialidad 1", "Especialidad 2"], // TODO: dato real
  },
  {
    id: "placeholder-2",
    slug: "nombre-del-paseador-2",
    nombre: "Nombre del paseador 2", // TODO: dato real
    foto: "/images/paseadores/paseador-2.svg", // TODO: foto real (webp preferido)
    zona: "Zona", // TODO: dato real
    descripcion:
      "Descripción breve y real del paseador, proporcionada por MyPet.", // TODO: dato real
    especialidades: ["Especialidad 1"], // TODO: dato real
  },
  {
    id: "placeholder-3",
    slug: "nombre-del-paseador-3",
    nombre: "Nombre del paseador 3", // TODO: dato real
    foto: "/images/paseadores/paseador-3.svg", // TODO: foto real (webp preferido)
    zona: "Zona", // TODO: dato real
    descripcion:
      "Descripción breve y real del paseador, proporcionada por MyPet.", // TODO: dato real
    especialidades: ["Especialidad 1", "Especialidad 2", "Especialidad 3"], // TODO: dato real
  },
];