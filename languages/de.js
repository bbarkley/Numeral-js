/*! 
 * numeral.js language configuration
 * language : German (de) – generally useful in Germany, Austria, Luxembourg, Belgium
 * author : Marco Krage : https://github.com/sinky
 */
(function () {
    var language = {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function (number) {
            return '.';
        },
        number : {
          defaultFormat : '#,##0[.]00[0]'
        },
        currency: {
            format: {
              full: '#,##0.00 $',
              negative_full: '(#,##0.00 $)',
              abbr: '0.00a $',
              negative_abbr: '(0.00a $)',
              rounded: '#,### $',
              negative_rounded: '(#,### $)',
              exceptions : {
                INR : {
                  full: '#,### $',
                  negative_full: '(#,## $)'
                },
                JPY : {
                  full: '#,### $',
                  negative_full: '(#,## $)'
                }
              }
            },
            exceptions: {AUD: 'AUD', BRL: 'BRL', CAD: 'CAD', CNY: 'CN\u00A5', DKK: 'DKK', EUR: 'EUR', GBP: 'GBP', HKD: 'HKD', ILS: '\u20AA', INR: 'INR', JPY: 'JPY', KRW: '\u20A9', MXN: 'MX$', NZD: 'NZD', THB: '\u0E3F', TWD: 'NT$', USD: 'USD', VND: '\u20AB', XAF: 'FCFA', XCD: 'EC$', XOF: 'CFA', XPF: 'CFPF'},
            localCurrency: 'EUR',
            symbol: '\u20AC'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numeral && this.numeral.language) {
        this.numeral.language('de', language);
    }
}());
