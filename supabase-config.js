// supabase-config.js
const SUPABASE_URL = 'https://pnheueabzgwcyyisyaur.supabase.co';
const SUPABASE_KEY = 'sb_publishable_0WMgRDtkg4Y6iF2sYpevTA_5xcGJErY';

// Загружаем Supabase библиотеку
async function loadSupabase() {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
    script.onload = () => {
      const { createClient } = supabase;
      window.supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
      resolve();
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

// Инициализация при загрузке страницы
loadSupabase().then(() => {
  console.log('✅ Supabase подключен');
}).catch(err => {
  console.error('❌ Ошибка подключения Supabase:', err);
});