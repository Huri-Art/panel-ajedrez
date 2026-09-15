// Configuración PÚBLICA de Supabase para el panel de proyección y la app.
//
// La "publishable key" (sb_publishable_...) es pública por diseño: va dentro de
// clientes (web/app) y está protegida por las reglas de acceso (RLS) de la base
// de datos. NO es un secreto.
//
// ⚠️ NUNCA pongas aquí la "secret key" (sb_secret_...): esa es privada y solo
// se usa en servidores/funciones, jamás en el navegador ni en la app.
window.SUPABASE_CONFIG = {
  url: "https://jpqkgurrcpkxauyestux.supabase.co",
  publishableKey: "sb_publishable_Sbw5xLyOCX04fKBscfTd1A_Wb4a9q_O",
};
