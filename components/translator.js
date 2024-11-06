class Translator {
  constructor() {
    this.americanOnly = require('./american-only.js');
    this.americanToBritishSpelling = require('./american-to-british-spelling.js');
    this.americanToBritishTitles = require('./american-to-british-titles.js');
    this.britishOnly = require('./british-only.js');
  }

  translate(text, locale) {
    let translation = text;
    const isAmToBr = locale === 'american-to-british';

    // Handle titles
    if (isAmToBr) {
      // American to British
      const titleRegex = /(?:Mr\.|Mrs\.|Ms\.|Dr\.|Prof\.)\s+\w+/g;
      translation = translation.replace(titleRegex, (match) => {
        const title = match.split(' ')[0];
        const name = match.split(' ')[1];
        const britishTitle = title.slice(0, -1); // Remove the period
        return `<span class="highlight">${britishTitle}</span> ${name}`;
      });
    } else {
      // British to American
      const titleRegex = /(?:Mr|Mrs|Ms|Dr|Prof)\s+\w+/g;
      translation = translation.replace(titleRegex, (match) => {
        const title = match.split(' ')[0];
        const name = match.split(' ')[1];
        const americanTitle = `${title}.`; // Add the period
        return `<span class="highlight">${americanTitle}</span> ${name}`;
      });
    }

    // Handle spellings
    const spellings = isAmToBr ? this.americanToBritishSpelling : this.swapKeysAndValues(this.americanToBritishSpelling);
    for (let word in spellings) {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      if (regex.test(translation)) {
        const match = translation.match(regex)[0];
        const replacement = spellings[word.toLowerCase()];
        translation = translation.replace(match, `<span class="highlight">${replacement}</span>`);
      }
    }

    // Handle specific terms
    const terms = isAmToBr ? this.americanOnly : this.britishOnly;
    for (let term in terms) {
      const regex = new RegExp(`\\b${term}\\b`, 'gi');
      if (regex.test(translation)) {
        const match = translation.match(regex)[0];
        const replacement = terms[term.toLowerCase()];
        translation = translation.replace(match, `<span class="highlight">${replacement}</span>`);
      }
    }

    // Handle time format
    if (isAmToBr) {
      translation = translation.replace(/(\d{1,2}):(\d{2})/g, '<span class="highlight">$1.$2</span>');
    } else {
      translation = translation.replace(/(\d{1,2})\.(\d{2})/g, '<span class="highlight">$1:$2</span>');
    }

    return {
      text,
      translation: translation === text ? "Everything looks good to me!" : translation
    };
  }

  swapKeysAndValues(obj) {
    const swapped = {};
    for (let key in obj) {
      swapped[obj[key]] = key;
    }
    return swapped;
  }
}

module.exports = Translator;
