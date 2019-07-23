const contracts = require('./access/contracts');

const SimpleArtistToken = require('./abi/SimpleArtistToken');

module.exports = {
    abi: {
        SimpleArtistToken: SimpleArtistToken,
    },
    contracts,
    getContractForNetworkAndAddress: require('./access/lookup')
};
