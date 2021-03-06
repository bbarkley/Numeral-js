/*!
 * numeral.js language configuration
 * language : french (fr-ch)
 * author : Adam Draper : https://github.com/adamwdraper
 */
(function (root) {
    var language = {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal : function (number) {
            return number === 1 ? 'er' : 'e';
        },
        currency: {
            format: {
                full: '$ #,##0.00',
                negative_full: '$-#,##0.00',
                abbr: '$ 0.00a',
                negative_abbr: '$-0.00a',
                rounded: '$ #,###',
                negative_rounded: '$-#,###'
            },
            exceptions: {ADP: '\u20A7A', AFN: 'Af', ANG: 'f.NA', AUD: '$AU', BAM: 'KM', BDT: 'Tk', BEF: 'FB', BND: '$BN', BRL: 'R$', CAD: '$CA', CNY: '\u00A5CN', CYP: '\u00A3CY', DJF: 'FDj', EEK: 'krE', ESP: '\u20A7', EUR: '\u20AC', FJD: '$FJ', FRF: 'F', GBP: '\u00A3UK', HKD: '$HK', IDR: 'Rp', IEP: '\u00A3IE', ILP: '\u00A3IL', ILS: '\u20AA', INR: '\u20B9', ITL: '\u20A4IT', JPY: '\u00A5JP', KRW: '\u20A9', LKR: 'RsSL', MMK: 'KMm', MNT: 'Tug', MTP: '\u00A3MT', MVR: 'Rf', MXN: '$MEX', MYR: 'RM', NPR: 'RsNP', NZD: '$NZ', PKR: 'RsPK', RHD: '$RH', SBD: '$SB', SGD: '$SG', SVC: '\u20A1SV', THB: '\u0E3F', TOP: 'T$', TWD: 'NT$', USD: '$US', VND: '\u20AB', VUV: 'VT', WST: 'WS$', XAF: 'FCFA', XCD: '$EC', XOF: 'CFA', XPF: 'FCFP', ZWD: '$Z'},
            localCurrency: 'CHF',
            symbol: 'CHF'
        }
    };

  // Node
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = language;
  }

  if (root.numeral && root.numeral.language) {
    root.numeral.language('fr-ch', language);
  }
}(this));
