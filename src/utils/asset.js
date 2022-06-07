import { aggregate } from "@makerdao/multicall";
import { Multi_Config, ERC20List } from "@/config";
import { getReadOnlyProvider } from '@/utils/ethers'
import store from '@/store'
import { ethers } from 'ethers'

export const getTokenBalance = async (address) => {
    return new Promise(async (resolve, reject) => {
        try{
            const res = await aggregate(ERC20List.map(e => ({
                target: e.address,
                call: [
                    'balanceOf(address)(uint256)',
                    address
                ],
                returns: [
                    [e.symbol, val => val.toString() / (10 ** e.decimals)]
                ]
            })), Multi_Config)
            const balances = res.results.transformed
            store.commit('saveERC20Balances', balances)
            resolve(balances)
        }catch(e) {
            console.log('Get erc20 balances fail:', e);
            reject(e)
        }
    })
}

export const getMainChainBalance = async (address) => {
    try{
        if (ethers.utils.isAddress(address)) {
            const provider = getReadOnlyProvider()
            let balance = await provider.getBalance(address)
            balance = balance.toString() / 1e18
            store.commit('saveEtherBalance', balance)
            return balance
        }
    }catch(e) {
        console.log('Get main net balance fail', e);
    }
    store.commit('saveEtherBalance', 0)
    return 0
}