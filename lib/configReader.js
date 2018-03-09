var fs = require('fs');

var configFile = (function(){
    for (var i = 0; i < process.argv.length; i++){
        if (process.argv[i].indexOf('-config=') === 0)
            return process.argv[i].split('=')[1];
    }
    return 'config.json';
})();


try {
    global.config = JSON.parse(fs.readFileSync(configFile));
}
catch(e){
    console.error('Failed to read config file ' + configFile + '\n\n' + e);
    return;
}

var donationAddresses = {
    dump: {
        XMR: '44Dx3bVEarKNGciPJSsD9BXFZASyooXpjCBCzhw3D8cANMzyyJn6PcyWbwaVe4vUMveKAzAiA4j8xgUi29TpKXpm3wUvH8Z'
    },
    core: {
        BCN: '23z7sC1bZ1DdNZ9gLPk4miUuB6x3YnSPvhVnypP1f5SRVXovvX72ydGKA32X5SrJuDPBgXTsSmQRoAbCzcDvM2d2PfYsxbY',
        XMR: '44Dx3bVEarKNGciPJSsD9BXFZASyooXpjCBCzhw3D8cANMzyyJn6PcyWbwaVe4vUMveKAzAiA4j8xgUi29TpKXpm3wUvH8Z',
        FCN: '6qCZgyFKUY5RfGhZtJSUH95UN3EZaXTmTWen5CUBb9YZZowx1dV9VoZbyftABRVPdXbYRyBKfHd72H3XvUTr8Ht2Jry2BZU',
        AEON: 'Wmswvbsac7eZ7pZEbey9nmgoZPjtwBAwRh7Qgm1xHVwF6hcnH43r2vX3hLTKARSrvtH8g4wJtEXS9V3Axz1Y2m8P2uqXEZi51',
        DSH: 'XtKTCad86mpGmALqKhGqzqFTBkcb1ZzXrn'
    },
    limit: {
        XDN: 'ddchiP79MK6UHe15Qaf7Q45bmF6r1HLtBeY2EXURC98R83aNg3Bc815QRrdbUBaLyQ9h4wtvggAcY3Way3t4cGoX1AUC9vS6v',
        XMR: '44Dx3bVEarKNGciPJSsD9BXFZASyooXpjCBCzhw3D8cANMzyyJn6PcyWbwaVe4vUMveKAzAiA4j8xgUi29TpKXpm3wUvH8Z'
    }
};

global.donations = {};

for(var configOption in donationAddresses) {
    var percent = config.blockUnlocker[configOption];
    var wallet = donationAddresses[configOption][config.symbol];
    if(percent && wallet) {
        global.donations[wallet] = percent;
    }
}

global.version = "v1.1.5_uni";
