export interface Paseador {
  id: string;
  slug: string;
  nombre: string;
  foto: string;
  zona: string;
  descripcion: string;
  verificado?: boolean;
  experiencia?: number;
  rating?: number;
  especialidades?: string[];
  paseosCompletados?: number;
  resenas?: number;
}