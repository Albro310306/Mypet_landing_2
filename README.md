# MyPet

Landing page estática y comercial de MyPet, plataforma que conecta a dueños de mascotas con paseadores de confianza.

## Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS v4
- Motion (animaciones)
- Lucide React (iconos)

## Comandos

```bash
npm run dev     # servidor de desarrollo
npm run build   # build de producción
npm run lint    # eslint
npm start       # sirve el build
```

## Estructura

La guía completa de desarrollo vive en `AGENTS.md` (reglas de proyecto, stack, estructura, datos estáticos y convenciones).

Puntos clave:

- Web 100% estática: los datos viven en `data/` y se renderizan localmente.
- Conversión principal: WhatsApp (`lib/whatsapp.ts`).
- No hay backend, API ni base de datos.
- Los datos actuales son placeholders marcados con `TODO: dato real` pendientes de reemplazo por información de MyPet.