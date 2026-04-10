# Don't Forget

Dein persönlicher Assistent für Aufgaben, Termine und Finanzen.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Sprache**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Datenbank**: PostgreSQL (lokal via Docker)
- **ORM**: Prisma
- **Auth**: NextAuth.js

## Voraussetzungen

- [Node.js](https://nodejs.org/) 18+
- [Docker](https://www.docker.com/) & Docker Compose
- [Git](https://git-scm.com/)

## Lokales Setup

### 1. Repository klonen

```bash
git clone <repo-url>
cd dont-forget
```

### 2. Dependencies installieren

```bash
npm install
```

### 3. Umgebungsvariablen konfigurieren

```bash
cp .env.example .env
```

Öffne `.env` und passe die Variablen an:

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/dont_forget"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="<generiere mit: openssl rand -base64 32>"
```

### 4. Datenbank starten (Docker)

```bash
docker-compose up -d
```

Prüfen ob der Container läuft:
```bash
docker ps
```

### 5. Datenbank-Schema migrieren

```bash
npm run db:generate   # Prisma Client generieren
npm run db:push       # Schema in die DB pushen (Development)
```

Oder mit Migrations-History:
```bash
npm run db:migrate    # Prisma Migrate (empfohlen für Production)
```

### 6. App starten

```bash
npm run dev
```

Die App läuft unter [http://localhost:3000](http://localhost:3000).

---

## Nützliche Commands

| Command | Beschreibung |
|---|---|
| `npm run dev` | Dev-Server starten |
| `npm run build` | Production Build |
| `npm run db:studio` | Prisma Studio öffnen |
| `npm run db:migrate` | Neue Migration erstellen |
| `npm run db:push` | Schema pushen (ohne Migrations-History) |
| `docker-compose up -d` | DB-Container starten |
| `docker-compose down` | DB-Container stoppen |

## Projektstruktur

```
dont-forget/
├── app/
│   ├── (auth)/              # Login & Registrierung
│   │   ├── login/
│   │   └── register/
│   ├── (dashboard)/         # Geschützte Bereiche
│   │   ├── dashboard/       # Übersicht
│   │   ├── tasks/           # Aufgabenverwaltung
│   │   ├── calendar/        # Kalender & Termine
│   │   └── finance/         # Finanzen
│   ├── api/
│   │   └── auth/            # NextAuth API Route
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── auth/                # Auth-Komponenten
│   ├── calendar/            # Kalender-Komponenten
│   ├── dashboard/           # Dashboard-Widgets
│   ├── finance/             # Finanz-Komponenten
│   ├── layout/              # Sidebar, Nav, Provider
│   ├── tasks/               # Task-Komponenten
│   └── ui/                  # shadcn/ui Basis-Komponenten
├── lib/
│   ├── auth.ts              # NextAuth Konfiguration
│   ├── db.ts                # Prisma Client
│   └── utils.ts             # Hilfsfunktionen
├── prisma/
│   └── schema.prisma        # Datenbank-Schema
├── types/
│   └── next-auth.d.ts       # TypeScript Erweiterungen
├── docker-compose.yml
├── .env.example
└── package.json
```

## shadcn/ui Komponenten installieren

Nach `npm install` kannst du shadcn/ui Komponenten hinzufügen:

```bash
npx shadcn@latest init
npx shadcn@latest add button card dialog input label select
```

## Google OAuth einrichten (optional)

1. Gehe zu [Google Cloud Console](https://console.cloud.google.com/)
2. Erstelle ein neues Projekt
3. Aktiviere die Google OAuth API
4. Erstelle OAuth 2.0 Credentials
5. Trage `GOOGLE_CLIENT_ID` und `GOOGLE_CLIENT_SECRET` in `.env` ein
