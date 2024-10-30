const ldJson = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://www.labiteste.com.br/",
  "name": "Labiteste",
  "description": "Análises clínicas e testes laboratoriais confiáveis.",
  "inLanguage": "pt-BR",
  "publisher": { "@type": "Organization", "name": "Labiteste" },
  "potentialAction": {
     "@type": "SearchAction",
     "target": "https://www.labiteste.com.br/?s={search_term_string}",
     "query-input": "required name=search_term_string"
  }
};

const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(ldJson);
document.head.appendChild(script);
