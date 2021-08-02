import { methods as substrateMethods } from '@substrate/txwrapper-substrate';
import * as typesBundle from '@docknetwork/node-types';
// import {bundle as typesBundle} from './bundle';
import { OverrideBundleType } from '@polkadot/types/types';
import {
  getRegistryBase,
  GetRegistryOptsCore,
  getSpecTypes,
  TypeRegistry,
} from '@substrate/txwrapper-core';

/**
 * `ChainProperties` for networks that txwrapper-dock supports. These are normally returned
 * by `system_properties` call, but since they don't change much, it's pretty safe to hardcode them.
 */
const KNOWN_CHAIN_PROPERTIES = {
  'dock-pos-main-runtime': {
    ss58Format: 22,
    tokenDecimals: 6,
    tokenSymbol: 'DOCK',
  },
  'dock-pos-test-runtime': {
    ss58Format: 21,
    tokenDecimals: 6,
    tokenSymbol: 'DOCK',
  },
	'dock-dev-test-runtime': {
    ss58Format: 42,
    tokenDecimals: 6,
    tokenSymbol: 'DOCK',
  },
};

// We override the `specName` property of `GetRegistryOptsCore` in order to get narrower type specificity,
// hopefully creating a better experience for users.
/**
 * Options for the `getRegistry` function.
 */
 export interface GetRegistryOpts extends GetRegistryOptsCore {
  specName: keyof typeof KNOWN_CHAIN_PROPERTIES;
}

export const methods = {
	balances: substrateMethods.balances,
	utility: substrateMethods.utility,
};

/**
 * Get a type registry for networks that txwrapper-dock supports.
 *
 * @param GetRegistryOptions specName, chainName, specVersion, and metadataRpc of the current runtime
 */
 export function getRegistry({
  specName,
  chainName,
  specVersion,
  metadataRpc,
  properties,
}: GetRegistryOpts): TypeRegistry {
  const registry = new TypeRegistry();
  registry.setKnownTypes({
    typesBundle: (typesBundle as unknown) as OverrideBundleType,
  });

  return getRegistryBase({
    chainProperties: properties || KNOWN_CHAIN_PROPERTIES[specName],
    specTypes: getSpecTypes(registry, chainName, specName, specVersion),
    metadataRpc,
  });
}