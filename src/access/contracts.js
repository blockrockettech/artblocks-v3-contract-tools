const SimpleArtistToken = require('../abi/SimpleArtistToken');

const networkSplitter = (network, {ropsten, rinkeby, mainnet, local}) => {
    switch (network) {
        case 1:
        case '1':
        case 'mainnet':
            return mainnet;
        case 3:
        case '3':
        case 'ropsten':
            return ropsten;
        case 4:
        case '4':
        case 'rinkeby':
            return rinkeby;
        case 5777:
        case '5777':
        case 'local':
            return local;
        default:
            throw new Error(`Unknown network ID ${network}`);
    }
};

const getNetwork = (network) => {
    return networkSplitter(network, {
        mainnet: 'mainnet',
        ropsten: 'ropsten',
        rinkeby: 'rinkeby',
        local: 'local'
    });
};

const getMigrations = (network) => {
    return networkSplitter(network, {
        mainnet: {
            address: '',
            deploymentBlock: 0
        },
        ropsten: {
            address: '',
            deploymentBlock: 0
        },
        rinkeby: {
            address: '',
            deploymentBlock: 0
        },
        local: {
            address: '',
            deploymentBlock: 0
        }
    });
};

const getSimpleArtistToken = (network) => {
    return networkSplitter(network, {
        mainnet: {
            address: '',
            deploymentBlock: 0,
            abi: SimpleArtistToken,
        },
        ropsten: {
            address: '0xF9DE4231D171eC2C98a81a00E6c5cBc3545788cc',
            deploymentBlock: 6045063,
            abi: SimpleArtistToken,
        },
        rinkeby: {
            address: '',
            deploymentBlock: 0,
            abi: SimpleArtistToken,
        },
        local: {
            address: '',
            deploymentBlock: 0,
            abi: SimpleArtistToken,
        }
    });
};



module.exports = {
    getNetwork,
    networkSplitter,
    getMigrations,
    getSimpleArtistToken,
};
