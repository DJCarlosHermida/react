# DJ Team | E-commerce ficticio

Proyecto final de estudio desarrollado en **React**. Simula un e-commerce de equipamiento para fiestas y eventos: parlantes, iluminación, DJ, micrófonos, interfaces y monitores.

No procesa pagos ni envíos reales. El flujo de compra (login → carrito → checkout) está pensado como **demostración de portfolio**.

**Demo en vivo:** [djcarloshermida.vercel.app](https://djcarloshermida.vercel.app/)

Repositorio: [github.com/DJCarlosHermida/react](https://github.com/DJCarlosHermida/react)

---

## Características

- Catálogo de productos desde **Firebase Firestore**
- Filtros por categoría con rutas amigables (`/productos/parlantes`, `/productos/dj`, etc.)
- Detalle de producto con control de stock
- Carrito persistente en `localStorage` con cantidades +/−
- Login de demostración (sin registro real)
- Checkout simulado con guardado de pedidos en Firestore
- Formulario de contacto con persistencia en Firestore
- Diseño responsive (navbar con menú móvil)
- Deploy en **Vercel** con soporte SPA (React Router)

---

## Stack

| Tecnología | Uso |
|------------|-----|
| React 18 | UI |
| Create React App | Build y desarrollo |
| React Router 6 | Navegación |
| Bootstrap 5 + Sass | Estilos |
| Firebase 9 | Firestore (productos, pedidos, contactos) |
| React Icons | Iconografía |

---

## Credenciales de demostración

| Campo | Valor |
|-------|--------|
| Correo | `usuario@djteam.com` |
| Contraseña | `demo1234` |

El login es ficticio: no usa Firebase Auth ni registro real. Solo desbloquea agregar al carrito y finalizar la compra simulada.

---

## Instalación local

```bash
git clone https://github.com/DJCarlosHermida/react.git
cd react
npm install
```

### Variables de entorno

Copiá `.env.example` como `.env.local` y completá las variables de Firebase:

```bash
cp .env.example .env.local
```

Variables requeridas (prefijo `REACT_APP_`):

- `FIREBASE_API_KEY`
- `FIREBASE_AUTH_DOMAIN`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_STORAGE_BUCKET`
- `FIREBASE_MESSAGING_SENDER_ID`
- `FIREBASE_APP_ID`

Si no configurás `.env.local`, la app usa valores por defecto embebidos en `src/firebase/config.js` (útil para desarrollo rápido, no recomendado para producción).

### Desarrollo

```bash
npm start
```

Abre [http://localhost:3000](http://localhost:3000).

### Build de producción

```bash
npm run build
```

La salida queda en la carpeta `build/`.

---

## Firebase

### Colecciones

| Colección | Descripción |
|-----------|-------------|
| `productos` | Catálogo (lectura pública) |
| `orders` | Pedidos simulados del checkout |
| `contacts` | Consultas del formulario de contacto |

### Cargar productos de prueba

Desde `src/firebase/upload.js` podés volcar `src/data/MOCK_DATA.json` a Firestore (ejecutar con Node según tu entorno).

### Reglas de seguridad

El archivo `firestore.rules` incluye reglas para el demo:

- `productos`: lectura pública, escritura bloqueada
- `contacts` y `orders`: solo creación desde la app

Para publicarlas:

```bash
firebase deploy --only firestore:rules
```

O copiá el contenido de `firestore.rules` en Firebase Console → Firestore → Reglas.

---

## Deploy

### Vercel (recomendado)

Sitio en producción: [https://djcarloshermida.vercel.app/](https://djcarloshermida.vercel.app/)

El proyecto incluye `vercel.json` con:

- **Build:** `npm run build`
- **Output:** `build`
- **Rewrites SPA** para rutas de React Router

En Vercel, configurá las mismas variables `REACT_APP_FIREBASE_*` que en `.env.local`.

### GitHub Pages (alternativo)

```bash
npm run deploy
```

Usa `gh-pages` y publica el contenido de `build/`. Requiere `homepage: "."` en `package.json` (ya configurado).

---

## Estructura del proyecto

```
src/
├── components/     # UI (Navbar, Cart, Checkout, Item, etc.)
├── context/        # CartContext, LoginContext
├── data/           # MOCK_DATA.json, categorías, credenciales demo
├── firebase/       # Config y script de carga
├── helpers/
├── App.js
└── index.js
public/             # favicon, logo, index.html
firestore.rules     # Reglas Firestore
vercel.json         # Configuración Vercel
```

---

## Rutas principales

| Ruta | Descripción | Login |
|------|-------------|-------|
| `/` | Inicio | No |
| `/productos` | Catálogo completo | No |
| `/productos/:categoria` | Catálogo filtrado | No |
| `/detail/:id` | Detalle de producto | No (sí para agregar al carrito) |
| `/cart` | Carrito | No |
| `/checkout` | Finalizar compra | Sí |
| `/login` | Acceso demo | — |
| `/nosotros` | Sobre DJ Team | No |
| `/contacto` | Formulario de contacto | No |

---

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm test` | Tests (Jest / Testing Library) |
| `npm run deploy` | Deploy a GitHub Pages |

---

## Notas

- Proyecto académico / portfolio. Los totales y pedidos son referenciales.
- Las imágenes de productos provienen de URLs externas en `MOCK_DATA.json`.
- El carrito se guarda en el navegador (`localStorage`, clave `cart`).
- La sesión demo se guarda en `localStorage` (clave `djteam-demo-user`).

---

## Autor

**DJ Carlos Hermida** — [djcarloshermida@outlook.com](mailto:djcarloshermida@outlook.com)
