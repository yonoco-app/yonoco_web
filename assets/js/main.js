document.addEventListener('DOMContentLoaded', () => {
  // Initialize any required functionality
});

// Language Switcher Functionality
function changeLanguage(langCode) {
  const currentPath = window.location.pathname;
  const baseUrl = window.location.origin;
  
  // Handle root path
  if (currentPath === '/' || currentPath === '/index.html') {
    if (langCode === 'en') {
      window.location.href = baseUrl + '/';
    } else {
      window.location.href = baseUrl + '/' + langCode + '/';
    }
    return;
  }
  
  // Handle language switch for other pages
  const pathSegments = currentPath.split('/').filter(segment => segment);
  
  // Check if the first segment is a language code
  const currentLangCodeIndex = 0;
  
  if (langCode === 'en') {
    // Remove language code for English (default)
    pathSegments.splice(currentLangCodeIndex, 1);
    window.location.href = baseUrl + '/' + pathSegments.join('/');
  } else {
    // Replace or add language code
    if (pathSegments[0] === 'fr' || pathSegments[0] === 'en') {
      pathSegments[0] = langCode;
    } else {
      pathSegments.unshift(langCode);
    }
    window.location.href = baseUrl + '/' + pathSegments.join('/');
  }
} 