// config.js — Vul hier je eigen Supabase-gegevens in
// Dit bestand upload je samen met admin.html en survey.html naar GitHub
//
// Stap 1: Maak een gratis account op https://supabase.com
// Stap 2: Ga naar Project Settings → API
// Stap 3: Kopieer de Project URL en anon public key hieronder
// Stap 4: Kies een eigen beheercode (wachtwoord voor de admin-pagina)

const CBC_CONFIG = {
  supabaseUrl:  "https://nobcpdagesfbasanjulr.supabase.co",      // bijv. https://abcdefgh.supabase.co
  supabaseKey:  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vYmNwZGFnZXNmYmFzYW5qdWxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc4OTk5NjUsImV4cCI6MjA5MzQ3NTk2NX0.0KInS3iECztfErWINW1s8XGshZaufHy_jMwCC2RKMbI",   // begint met eyJhbG...
  adminCode:    "cbc2025"                          // verander dit naar een eigen wachtwoord
};
