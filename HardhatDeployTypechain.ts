import type { DeployFunction } from 'hardhat-deploy/types'
import type { HardhatRuntimeEnvironment } from 'hardhat/types'
import type { Contract, Contract__factory } from '../typechain-types'

const deploy: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getNamedAccounts } = hre
  const { deploy, execute } = deployments
  const accounts = await getNamedAccounts()

  const deployArgs: Parameters<Contract__factory['deploy']> = ['foo']
  await deploy('Contract', {
    from: accounts.deployer,
    args: deployArgs,
  })

  const executeArgs: Parameters<Contract['fn']> = ['bar']
  execute(
    'Contract',
    { from: accounts.deployer },
    'fn',
    ...executeArgs,
  )
}

deploy.tags = ['Contract']
export default deploy
