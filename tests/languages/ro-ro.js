var numeral = require('../../numeral'),
    language = require('../../languages/ro-ro');

numeral.language('ro-ro', language);

exports['language:ro-ro'] = {
    setUp: function (callback) {
        numeral.language('ro-ro');
        callback();
    },

    tearDown: function (callback) {
        numeral.language('en');
        callback();
    },

    format: function (test) {
        test.expect(16);

        var tests = [
            [10000,'0,0.0000','10.000,0000'],
            [10000.23,'0,0','10.000'],
            [-10000,'0,0.0','-10.000,0'],
            [10000.1234,'0.000','10000,123'],
            [-10000,'(0,0.0000)','(10.000,0000)'],
            [-0.23,'.00','-,23'],
            [-0.23,'(.00)','(,23)'],
            [0.23,'0.00000','0,23000'],
            [1230974,'0.0a','1,2milhões'],
            [1460,'0a','1mil'],
            [-104000,'0a','-104mil'],
            [1,'0o','1º'],
            [52,'0o','52º'],
            [23,'0o','23º'],
            [100,'0o','100º'],
            [1,'0[.]0','1']
        ];

        for (var i = 0; i < tests.length; i++) {
            test.strictEqual(numeral(tests[i][0]).format(tests[i][1]), tests[i][2], tests[i][1]);
        }

        test.done();
    },

    currency: function (test) {
        test.expect(8);

        var tests = [
            [1000.234,'$0,0.00','full','1.000,23 LEI'],
            [-1000.234,'($0,0)','rounded','(1.000 LEI)'],
            [-1000.234,'$0.00','full','(1.000,23 LEI)'],
            [1230974,'($0.00a)','abbr','1,23milhões LEI']
        ];

        for (var i = 0; i < tests.length; i++) {
            test.strictEqual(numeral(tests[i][0]).format(tests[i][1]), tests[i][3], tests[i][1]);
        }

        for (var i = 0; i < tests.length; i++) {
            test.strictEqual(numeral(tests[i][0]).formatCurrency(tests[i][2]), tests[i][3], tests[i][1]);
        }

        test.done();
    },

    percentages: function (test) {
        test.expect(4);

        var tests = [
            [1,'0%','100%'],
            [0.974878234,'0.000%','97,488%'],
            [-0.43,'0%','-43%'],
            [0.43,'(0.000%)','43,000%']
        ];

        for (var i = 0; i < tests.length; i++) {
            test.strictEqual(numeral(tests[i][0]).format(tests[i][1]), tests[i][2], tests[i][1]);
        }

        test.done();
    },

    unformat: function (test) {
        test.expect(9);

        var tests = [
            ['10.000,123',10000.123],
            ['(0,12345)',-0.12345],
            ['(LEI1,23milhões)',-1230000],
            ['10mil',10000],
            ['-10mil',-10000],
            ['23º',23],
            ['LEI10.000,00',10000],
            ['-76%',-0.76],
            ['2:23:57',8637]
        ];

        for (var i = 0; i < tests.length; i++) {
            test.strictEqual(numeral().unformat(tests[i][0]), tests[i][1], tests[i][0]);
        }

        test.done();
    }
};
