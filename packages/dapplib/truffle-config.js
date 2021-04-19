require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan renew stereo prosper hunt merry fog genre'; 
let testAccounts = [
"0xfd234a8401fe1968375b50d7801c76f7735f33b275889032f068ba4efc1842dc",
"0xf1db0d8796f5cb014f1711aded036e64db84a0a8fd9de556504a010414c66161",
"0x7cd4c58f0b7ebf53a304aa3a671f5cc7ff546a3554ebe02204ca4ec31a42a7f9",
"0xbd45ec95689eed2bda0a94364a4e59faa40c5c7fb731fd02986d626df61d0ef6",
"0xe9a0de1f78cf9338ee8367dcb4452a36a9b687f485dcb0cc7528153bbe1481d7",
"0x9461d85849d8f4ec6be2526fd88d1563038f92e7492d8eaad0ad6f371746cfed",
"0xa955e0b7818b64b04e8ab4434c54fc893250e7c2918f2eacbd59f41d22ac2a80",
"0xe20dd80a09e5ddd1586ce48050a33cd3c0b2365732036d8a451e1f61c8b64358",
"0x4025bb5d411e71b5b52c8ed572251dbe8b2962c85d4aa66cd55d7b2e6eb1857b",
"0x388aa8e6548686ee4763246155030b6478a1c9cdf4dda8c8f1f11701a7b01e71"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
