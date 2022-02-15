[@3rdweb/sdk - v2.0.0-32](../README.md) / [Exports](../modules.md) / ContractRoles

# Class: ContractRoles<TContract, TRole\>

Handles Contract roles and permissions

## Type parameters

| Name | Type |
| :------ | :------ |
| `TContract` | extends `AccessControlEnumerable` |
| `TRole` | extends [`Role`](../modules.md#role) |

## Table of contents

### Constructors

- [constructor](ContractRoles.md#constructor)

### Methods

- [get](ContractRoles.md#get)
- [getAll](ContractRoles.md#getall)
- [grant](ContractRoles.md#grant)
- [revoke](ContractRoles.md#revoke)
- [setAll](ContractRoles.md#setall)

## Constructors

### constructor

• **new ContractRoles**<`TContract`, `TRole`\>(`contractWrapper`, `roles`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TContract` | extends `AccessControlEnumerable`<`TContract`\> |
| `TRole` | extends ``"transfer"`` \| ``"admin"`` \| ``"minter"`` \| ``"pauser"`` \| ``"lister"`` \| ``"editor"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractWrapper` | `ContractWrapper`<`TContract`\> |
| `roles` | readonly `TRole`[] |

#### Defined in

[core/classes/contract-roles.ts:18](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/contract-roles.ts#L18)

## Methods

### get

▸ **get**(`role`): `Promise`<`string`[]\>

Call this to get a list of addresses that are members of a specific role.

**`remarks`** See [ContractRoles.getAll](ContractRoles.md#getall) to get get a list of addresses for all supported roles on the contract.

**`throws`** If you are requestiong a role that does not exist on the contract this will throw an error.

**`example`** Say you want to get the list of addresses that are members of the minter role.
```javascript
const minterAddresses: string[] = await contract.getRoleMemberList("minter");
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `role` | `TRole` | The Role to to get a memberlist for. |

#### Returns

`Promise`<`string`[]\>

The list of addresses that are members of the specific role.

#### Defined in

[core/classes/contract-roles.ts:63](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/contract-roles.ts#L63)

___

### getAll

▸ **getAll**(): `Promise`<`Record`<`TRole`, `string`[]\>\>

Call this to get get a list of addresses for all supported roles on the contract.

**`remarks`** See [ContractRoles.get](ContractRoles.md#get) to get a list of addresses that are members of a specific role.

**`throws`** If the contract does not support roles this will throw an error.

#### Returns

`Promise`<`Record`<`TRole`, `string`[]\>\>

A record of [Role](../modules.md#role)s to lists of addresses that are members of the given role.

#### Defined in

[core/classes/contract-roles.ts:39](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/contract-roles.ts#L39)

___

### grant

▸ **grant**(`role`, `address`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Call this to grant a role to a specific address.

**`remarks`**

Make sure you are sure you want to grant the role to the address.

**`throws`** If you are trying to grant does not exist on the contract this will throw an error.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `role` | `TRole` | The [Role](../modules.md#role) to grant to the address |
| `address` | `string` | The address to grant the role to |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

The transaction receipt

#### Defined in

[core/classes/contract-roles.ts:189](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/contract-roles.ts#L189)

___

### revoke

▸ **revoke**(`role`, `address`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Call this to revoke a role from a specific address.

**`remarks`**

-- Caution --

This will let you remove yourself from the role, too.
If you remove yourself from the admin role, you will no longer be able to administer the module.
There is no way to recover from this.

**`throws`** If you are trying to revoke does not exist on the module this will throw an error.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `role` | `TRole` | The [Role](../modules.md#role) to revoke |
| `address` | `string` | The address to revoke the role from |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

The transaction receipt

#### Defined in

[core/classes/contract-roles.ts:220](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/contract-roles.ts#L220)

___

### setAll

▸ **setAll**(`rolesWithAddresses`): `Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

Call this to OVERWRITE the list of addresses that are members of specific roles.

Every role in the list will be overwritten with the new list of addresses provided with them.
If you want to add or remove addresses for a single address use [ContractRoles.grant](ContractRoles.md#grant) and [ContractRoles.revoke](ContractRoles.md#revoke) respectively instead.

**`throws`** If you are requestiong a role that does not exist on the contract this will throw an error.

**`example`** Say you want to overwrite the list of addresses that are members of the minter role.
```javascript
const minterAddresses: string[] = await contract.getRoleMemberList("minter");
await contract.setAll({
 minter: []
});
console.log(await contract.getRoleMemberList("minter")); // No matter what members had the role before, the new list will be set to []
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rolesWithAddresses` | { [key in "transfer" \| "admin" \| "minter" \| "pauser" \| "lister" \| "editor"]?: string[] } | A record of [Role](../modules.md#role)s to lists of addresses that should be members of the given role. |

#### Returns

`Promise`<`Omit`<`TransactionResultWithMetadata`<`unknown`\>, ``"data"``\>\>

#### Defined in

[core/classes/contract-roles.ts:98](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/classes/contract-roles.ts#L98)
