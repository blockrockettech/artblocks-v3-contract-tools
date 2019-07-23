const contracts = require('../access/contracts');

const SimpleArtistToken = require('../abi/SimpleArtistToken');

/**
 * For a given address and network, return the required contract info for it
 *
 * @param network the network its deployed to
 * @param address the address to find
 *
 * @throws Error if network/address combo is not found
 *
 * @return {{deploymentBlock: number, address: *, abi, network}}
 */
module.exports = function getContractForNetworkAndAddress(network, address) {

    if (contracts.getSimpleArtistToken(network).address === address) {
        return {
            abi: SimpleArtistToken,
            deploymentBlock: contracts.getSimpleArtistToken(network).deploymentBlock,
            network: contracts.getNetwork(network),
            address,
        };
    }

    throw new Error(`Unknown address [${address}] for network [${network}]`);
};
