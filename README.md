# CBC Onderzoeksapp — Installatiegids

Drie bestanden, gratis online, werkend in 20 minuten.

---

## Wat je nodig hebt
- Een gratis account op [supabase.com](https://supabase.com)
- Een gratis account op [github.com](https://github.com)
- Deze drie bestanden: `admin.html`, `survey.html`, `config.js`

---

## Stap 1 — Supabase instellen (database)

1. Ga naar [supabase.com](https://supabase.com) → **Start your project** → maak een account
2. Klik **New project** → kies een naam (bijv. `cbc-onderzoek`) → kies een wachtwoord → **Create project**
3. Wacht ~1 minuut tot het project klaar is
4. Ga naar **SQL Editor** (linkermenu) → klik **New query** → plak dit en klik **Run**:

```sql
CREATE TABLE studies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text, author text, description text,
  attrs jsonb, design jsonb,
  opts_per_set int DEFAULT 3,
  show_none boolean DEFAULT true,
  admin_code text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  study_id uuid REFERENCES studies(id),
  respondent_name text,
  respondent_role text,
  answers jsonb,
  duration_sec int,
  submitted_at timestamptz DEFAULT now()
);

ALTER TABLE studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE responses ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public_all" ON studies FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "public_all" ON responses FOR ALL USING (true) WITH CHECK (true);
```

5. Ga naar **Project Settings → API**
6. Kopieer de **Project URL** en de **anon public** key

---

## Stap 2 — config.js invullen

Open `config.js` in een teksteditor  en vul in:

```javascript
const CBC_CONFIG = {
  supabaseUrl:  "https://jouw-project-id.supabase.co",
  supabaseKey:  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  adminCode:    "kies-een-eigen-wachtwoord"
};
```

Sla op.

---

## Stap 3 — GitHub Pages (gratis hosting)

1. Ga naar [github.com](https://github.com) → log in of maak een account
2. Klik **+** (rechtsboven) → **New repository**
3. Naam: `cbc-onderzoek` → **Public** → **Create repository**
4. Klik **Add file → Upload files**
5. Sleep de drie bestanden (`admin.html`, `survey.html`, `config.js`) naar het venster → **Commit changes**
6. Ga naar **Settings → Pages**
7. Onder **Source**: kies **Deploy from a branch → main → / (root) → Save**
8. Wacht ~1 minuut — dan is de app live!

---

## Jouw URLs

| Pagina | URL |
|--------|-----|
| Adminpagina (onderzoeker) | `https://[gebruikersnaam].github.io/cbc-onderzoek/admin.html` |
| Survey (respondenten) | `https://[gebruikersnaam].github.io/cbc-onderzoek/survey.html?study=[study-id]` |

Het exacte survey-link met `study=` ID verschijnt automatisch in de admin-app nadat je het onderzoek hebt opgeslagen.

---

## Werkwijze

1. Open `admin.html` → log in met je beheercode
2. Vul attributen en niveaus in → genereer het design → sla op
3. Kopieer de survey-link → stuur naar respondenten
4. Volg de responses live in de **Responses**-tab
5. Exporteer als CSV voor analyse in Excel of SPSS

---

## Vragen?

Neem contact op met je docent of bekijk de documentatie van:
- Supabase: [supabase.com/docs](https://supabase.com/docs)
- GitHub Pages: [pages.github.com](https://pages.github.com)
