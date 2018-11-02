const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')

// web instance
const web3 = new Web3(ganache.provider())

// testing
beforeEach(async ()=> {
	// get accounts
	accounts = await web3.eth.getAccounts()
	console.log(accounts)
	// deploy contract to account
})

describe('Inbox', ()=> {
	it('deploys a contract', ()=> {

	})	
})




