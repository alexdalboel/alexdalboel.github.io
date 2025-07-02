document.addEventListener('DOMContentLoaded', () => {
  const langEnBtn = document.getElementById('lang-en');
  const langDaBtn = document.getElementById('lang-da');

  const setLanguage = async (lang) => {
    const response = await fetch(`locales/${lang}.json`);
    const translations = await response.json();
    
    document.querySelectorAll('[data-key]').forEach(element => {
      const key = element.getAttribute('data-key');
      if (translations[key]) {
        element.innerHTML = translations[key];
      }
    });
    localStorage.setItem('language', lang);
  };

  langEnBtn.addEventListener('click', () => setLanguage('en'));
  langDaBtn.addEventListener('click', () => setLanguage('da'));

  const preferredLanguage = localStorage.getItem('language') || 'en';
  setLanguage(preferredLanguage);
}); 