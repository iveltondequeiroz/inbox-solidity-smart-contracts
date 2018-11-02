const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const { interface, bytecode } = require('./compile')
// 0x40ab18C941e7813e3f25b960E68Ba57b28812698

const provider = new HDWalletProvider(
	'12 words',
	'https://rinkeby.infura.io/v3/50bdd2eb47084653b40dc5b90994086c'
)

const web3 = new Web3(provider)

const deploy = async () => {
	const accounts = await web3.eth.getAccounts()
	console.log('Attempting to deploy from account ', accounts[0])

	const result = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({data: '0x'+bytecode, arguments: ['Hi there!']})
		.send({ gas: 4700000, from: accounts[0] })

	console.log('Contract deployed to ', result.options.address)
}

deploy()

