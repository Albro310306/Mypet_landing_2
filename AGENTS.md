# AGENTS.md

# MyPet — Frontend Guidelines

## 1. Proyecto

MyPet es una marca/plataforma orientada a conectar dueños de mascotas con paseadores, con énfasis en:
- Seguridad
- Confianza
- Transparencia
- Bienestar animal

La fuente principal de información sobre el producto es:
`MyPet planeacion estrategica.pdf`

La planificación describe la visión completa de la plataforma, incluyendo funcionalidades futuras como negociación, pagos, GPS, reputación y seguridad. Esta web **NO implementará esas funcionalidades**.

La web actual es una **landing page estática y comercial**.

## 2. Objetivo de la web

La web debe:
1. Presentar MyPet.
2. Generar confianza.
3. Mostrar los paseadores.
4. Mostrar mascotas que han sido paseadas.
5. Mostrar reseñas reales.
6. Explicar cómo funciona MyPet.
7. Comunicar seguridad y bienestar animal.
8. Facilitar el contacto por WhatsApp.

La conversión principal es: **Contacto por WhatsApp.**

## 3. Alcance

### Incluido
- Landing page
- Navbar
- Hero
- Paseadores
- Perfiles de paseadores
- Cómo funciona
- Seguridad y confianza
- Galería de mascotas
- Tipos de paseo
- Reseñas
- Sobre MyPet
- FAQ
- CTA final
- WhatsApp
- Footer
- Responsive design
- Animaciones
- SEO básico
- Accesibilidad

### No incluido
No implementar:
- Backend
- API
- Base de datos
- CMS
- Autenticación
- Registro de usuarios
- Login
- Pagos
- Reservas reales
- Negociación real
- GPS
- Geolocalización
- Video en vivo
- Sistema de reputación funcional
- Sistema de notificaciones
- Panel administrativo
- Marketplace
- Integraciones con veterinarias
- Integraciones externas de datos

Estas funcionalidades pertenecen al producto/plataforma futura descrita en la planificación, no a esta web.

## 4. Regla principal: todo es estático

Esta web **no consume datos externos**.

No realizar:
```ts
fetch()
```
para obtener contenido.

No utilizar:
- APIs
- Axios
- React Query
- SWR
- GraphQL
- Firebase
- Supabase
- CMS
- Base de datos
- Backend

Los datos viven directamente dentro del proyecto.

Ejemplo:
```text
data/
├── paseadores.ts
├── mascotas.ts
└── resenas.ts
```

Los componentes importan estos datos y los renderizan.

## 5. Stack

### Framework
- Next.js
- React
- TypeScript

### Styling
- Tailwind CSS

### UI
- shadcn/ui únicamente cuando aporte valor real
- Lucide React para iconos

### Animaciones
- Motion

Lenis puede utilizarse únicamente si realmente aporta una mejora al scroll.
No utilizar GSAP inicialmente.

## 6. Filosofía de implementación

La web debe ser:
- Visualmente premium
- Rápida
- Responsive
- Accesible
- Semántica
- Mantenible
- Simple

No sobrearquitecturar.

El proyecto es estático, por lo que la prioridad es:
**Diseño + experiencia + performance + mantenibilidad.**

No crear infraestructura que actualmente no se necesita.

## 7. Estructura

```text
mypet/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── paseadores/
│       └── [slug]/
│           └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Paseadores.tsx
│   │   ├── ComoFunciona.tsx
│   │   ├── Seguridad.tsx
│   │   ├── Mascotas.tsx
│   │   ├── TiposPaseo.tsx
│   │   ├── Resenas.tsx
│   │   ├── Nosotros.tsx
│   │   ├── FAQ.tsx
│   │   └── ContactCTA.tsx
│   ├── paseadores/
│   │   ├── PaseadorCard.tsx
│   │   └── PaseadorProfile.tsx
│   └── ui/
├── data/
│   ├── paseadores.ts
│   ├── mascotas.ts
│   └── resenas.ts
├── lib/
│   └── whatsapp.ts
├── types/
│   ├── paseador.ts
│   ├── mascota.ts
│   └── resena.ts
├── public/
│   └── images/
│       ├── hero/
│       ├── paseadores/
│       ├── mascotas/
│       ├── resenas/
│       └── logo/
├── package.json
├── tsconfig.json
└── next.config.ts
```

No agregar carpetas solamente "por si algún día se necesitan".

## 8. Arquitectura de componentes

`app/page.tsx` debe encargarse de componer las secciones.

Ejemplo:
```tsx
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Paseadores />
        <ComoFunciona />
        <Seguridad />
        <Mascotas />
        <TiposPaseo />
        <Resenas />
        <Nosotros />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
```

No convertir `page.tsx` en un componente gigante.
Cada sección debe tener una responsabilidad clara.

## 9. Datos estáticos

Los datos deben estar separados de la presentación.

Ejemplo:
```ts
// data/paseadores.ts
export const paseadores = [
  {
    id: "1",
    slug: "nombre-paseador",
    nombre: "Nombre",
    foto: "/images/paseadores/nombre.webp",
    zona: "Zona",
    descripcion: "Descripción real.",
    verificado: true,
    especialidades: ["..."],
  },
];
```

Los datos deben corresponder a información real proporcionada por MyPet.
No inventar información.

## 10. Tipos

Utilizar TypeScript para definir los datos.

### Paseador
```ts
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
}
```

### Mascota
```ts
export interface Mascota {
  id: string;
  foto: string;
  nombre?: string;
  especie?: string;
  raza?: string;
}
```

### Reseña
```ts
export interface Resena {
  id: string;
  nombre: string;
  texto: string;
  rating?: number;
  foto?: string;
  mascota?: string;
}
```

Los campos opcionales deben utilizarse únicamente cuando el dato realmente exista.

## 11. Información real

Nunca inventar:
- Nombres
- Fotos
- Ratings
- Experiencia
- Cantidad de paseos
- Clientes
- Estadísticas
- Reseñas
- Testimonios
- Zonas
- Especialidades
- Verificaciones

Incorrecto:
```text
★★★★★
4.9/5
+500 paseos
10 años de experiencia
```
si esos datos no fueron proporcionados.

## 12. Reseñas

Las reseñas son parte de la V1.
Deben ser:
- Reales
- Proporcionadas por MyPet
- Autorizadas para publicación

No crear testimonios ficticios.
No alterar el sentido de una reseña para hacerla parecer más positiva.
El rating solamente debe aparecer si existe un rating real.

## 13. Mascotas

La sección de mascotas debe ser principalmente visual y emocional.

Concepto: **"Ellos son parte de la familia"**

Utilizar fotografías reales de mascotas que hayan sido parte de la experiencia de MyPet cuando exista autorización para utilizarlas.
No presentar fotografías de stock como clientes reales.

La galería puede utilizar:
- Masonry
- Grid asimétrico
- Diferentes proporciones
- Hover sutil
- Animaciones de entrada

## 14. Paseadores

La sección de paseadores es una sección comercial principal.

Cada card debe priorizar:
```text
Foto
Nombre
Verificación, si corresponde
Zona
Información relevante
Especialidades
CTA
```

No sobrecargar las cards.
Los datos deben provenir de `data/paseadores.ts`.

## 15. Perfil del paseador

Los perfiles pueden utilizar:
```text
/paseadores/[slug]
```

La información sigue siendo completamente estática.
No hacer fetch.
El contenido se obtiene de los datos locales.

El perfil puede incluir:
- Foto
- Nombre
- Zona
- Descripción
- Verificación
- Experiencia
- Especialidades
- Rating
- Reseñas
- WhatsApp

Solo mostrar información que exista.

## 16. WhatsApp

WhatsApp es el principal CTA.
Centralizar la generación del enlace.

Ejemplo:
```ts
const WHATSAPP_NUMBER = "XXXXXXXXXXX";

export function getWhatsAppUrl(message?: string) {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) {
    return baseUrl;
  }
  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}
```

No repetir el número de WhatsApp por todo el proyecto.
Los botones pueden utilizar mensajes contextuales.

Ejemplo:
```text
Hola, quiero conocer los paseadores disponibles de MyPet.
```

## 17. Secciones

Orden principal:
```text
Navbar
Hero
Paseadores
Cómo funciona
Seguridad y confianza
Mascotas
Tipos de paseo
Reseñas
Sobre MyPet
FAQ
CTA WhatsApp
Footer
```

El orden puede modificarse durante el diseño si mejora la experiencia, pero debe mantenerse la narrativa: **conocer → confiar → conectar emocionalmente → contactar.**

## 18. Diseño visual

MyPet debe sentirse:
- Premium
- Cercano
- Cálido
- Profesional
- Moderno
- Seguro
- Tecnológico
- Humano

Evitar apariencia de plantilla genérica.
No abusar de:
- Gradientes
- Sombras
- Bordes
- Animaciones
- Colores
- Cards
- Efectos glassmorphism

El diseño debe tener suficiente espacio en blanco.

## 19. Animaciones

Las animaciones deben mejorar la experiencia.
Utilizar Motion cuando aporte valor.

Ejemplos:
- Entrada del Hero
- Aparición de secciones
- Hover de cards
- Animación de imágenes
- Microinteracciones de botones
- Transiciones suaves

Evitar:
- Animaciones infinitas innecesarias
- Parallax excesivo
- Scroll hijacking
- Animaciones que dificulten la lectura
- Efectos que reduzcan performance

Respetar:
```css
prefers-reduced-motion
```

## 20. Responsive

Diseñar Mobile First.
Debe funcionar correctamente en:
- Mobile
- Tablet
- Desktop

No hacer simplemente una versión desktop y reducirla.

En mobile priorizar:
- Navegación sencilla
- CTA visible
- WhatsApp
- Cards legibles
- Botones táctiles
- Imágenes optimizadas
- Buena separación vertical

## 21. Server / Client Components

Utilizar Server Components por defecto.
No utilizar:
```tsx
"use client";
```
salvo que sea necesario.

Un componente puede ser Client Component cuando necesite:
- Estado
- Interacciones complejas
- Eventos del navegador
- Animaciones que realmente lo requieran

No convertir toda la aplicación en Client Components.

## 22. Imágenes

Utilizar:
```tsx
next/image
```
cuando corresponda.

Las imágenes deben:
- Estar optimizadas
- Tener `alt`
- Utilizar tamaños apropiados
- Evitar formatos innecesariamente pesados

Preferir WebP/AVIF cuando el flujo de assets lo permita.

## 23. SEO

Implementar:
- Metadata
- Title
- Description
- Open Graph
- Favicon
- HTML semántico
- Heading hierarchy

Debe existir un único H1 principal.

Utilizar:
```text
H1
├── H2
│   └── H3
```
cuando corresponda.

## 24. Accesibilidad

Cumplir buenas prácticas básicas:
- Contraste adecuado
- `alt` en imágenes
- Focus visible
- Navegación por teclado
- Botones accesibles
- Links descriptivos
- Tamaños táctiles adecuados
- No depender solamente del color

No utilizar un `<div>` como botón cuando un `<button>` sea apropiado.

## 25. Performance

Prioridades:
1. Imágenes optimizadas.
2. JavaScript mínimo.
3. Server Components.
4. Carga diferida cuando corresponda.
5. Evitar dependencias innecesarias.
6. Animaciones eficientes.
7. Buen rendimiento mobile.

No instalar una librería para resolver algo que puede resolverse con CSS o React.

## 26. Naming

### Componentes
PascalCase:
```text
PaseadorCard.tsx
Paseadores.tsx
ContactCTA.tsx
```

### Variables
camelCase:
```ts
paseadores
whatsappUrl
selectedWalker
```

### Funciones
camelCase:
```ts
getWhatsAppUrl()
```

### Constantes
```ts
WHATSAPP_NUMBER
```

## 27. Regla de simplicidad

No sobrearquitecturar.
No crear:
```text
services/repositories/api/hooks/providers/contexts/
```
si la web no los necesita.

La arquitectura debe reflejar la realidad del proyecto: **es una web estática.**

## 28. Dependencias

Antes de instalar una dependencia:
1. Comprobar si Next.js lo resuelve.
2. Comprobar si React lo resuelve.
3. Comprobar si Tailwind lo resuelve.
4. Comprobar si CSS lo resuelve.
5. Evaluar si realmente mejora el proyecto.

Evitar dependencias innecesarias.

## 29. No implementar funcionalidades futuras

El PDF describe funcionalidades de la plataforma como:
- Registro
- Perfiles
- Solicitudes
- Negociación
- Pagos
- GPS
- Video
- PIN
- SOS
- Reputación
- Marketplace

Estas funcionalidades **no deben implementarse en esta web estática**.
Pueden utilizarse como contexto para comunicar la visión de MyPet, pero no deben presentarse como funcionalidades operativas de esta página.

La planificación define estas capacidades dentro de la plataforma completa.

## 30. No inventar funcionalidades

Nunca escribir en la web:
> "Reserva tu paseo ahora"

si el botón no realiza una reserva real.

Nunca escribir:
> "Sigue el paseo en tiempo real"

si la web no tiene GPS real.

Nunca escribir:
> "Paga de forma segura"

si la web no procesa pagos.

En esos casos, comunicar únicamente lo que realmente ofrece MyPet en esta etapa.

## 31. Git

Utilizar commits pequeños y descriptivos.

Ejemplos:
```text
feat: add hero section
feat: add walker cards
feat: add pets gallery
feat: add testimonials
feat: add whatsapp CTA
style: refine responsive layout
fix: improve mobile navigation
```

Evitar:
```text
final
final2
cambios
ahora si
```

## 32. Workflow

Para tareas importantes:
1. Entender el objetivo.
2. Revisar `AGENTS.md`.
3. Revisar el PDF cuando la tarea dependa del producto.
4. Proponer un plan breve.
5. Implementar solamente el alcance solicitado.
6. Verificar responsive.
7. Verificar accesibilidad.
8. Verificar que no existan datos inventados.
9. Explicar qué cambió.

No hacer scope creep.

## 33. Regla de incertidumbre

Si falta información importante: **preguntar.**
No inventar.

Especialmente:
- Datos de paseadores
- Reseñas
- Fotos
- Ratings
- WhatsApp
- Información legal
- Información de contacto

## 34. Principio de diseño

La web debe comunicar:
```text
Personas
+ Mascotas
+ Confianza
+ Seguridad
+ Bienestar
+ Emoción
+ Conversión
```

No debe sentirse como una aplicación compleja.
Debe sentirse como una **marca de confianza que presenta un servicio real**.

## 35. Regla final

Cuando exista una decisión entre:
**más arquitectura** y **una solución más simple que cumple correctamente el objetivo**,
elegir la solución simple.

Este proyecto no necesita infraestructura de aplicación todavía.
Necesita una web: **rápida + bonita + responsive + accesible + mantenible + estática + orientada a conversión.**