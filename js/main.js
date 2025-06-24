async function loadLanguage(lang = 'en') {
  const response = await fetch(`lang/${lang}.json`);
  const translations = await response.json();

  document.getElementById("welcome").textContent = translations.welcome;
  document.getElementById("about").textContent = translations.about;
}

const userLang = navigator.language.startsWith('pt') ? 'pt' : 'en';
loadLanguage(userLang);
