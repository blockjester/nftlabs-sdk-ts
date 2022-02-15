[@3rdweb/sdk - v2.0.0-32](../README.md) / [Exports](../modules.md) / IStorage

# Interface: IStorage

## Table of contents

### Methods

- [get](IStorage.md#get)
- [getUploadToken](IStorage.md#getuploadtoken)
- [upload](IStorage.md#upload)
- [uploadBatch](IStorage.md#uploadbatch)
- [uploadMetadata](IStorage.md#uploadmetadata)
- [uploadMetadataBatch](IStorage.md#uploadmetadatabatch)

## Methods

### get

▸ **get**(`hash`): `Promise`<`Record`<`string`, `any`\>\>

Fetches data from storage. This method expects to fetch JSON formatted data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hash` | `string` | The Hash of the file to fetch |

#### Returns

`Promise`<`Record`<`string`, `any`\>\>

- The data, if found.

#### Defined in

[core/interfaces/IStorage.ts:29](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/interfaces/IStorage.ts#L29)

___

### getUploadToken

▸ **getUploadToken**(`contractAddress`): `Promise`<`string`\>

Fetches a one-time-use upload token that can used to upload
a file to storage.

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractAddress` | `string` |

#### Returns

`Promise`<`string`\>

- The one time use token that can be passed to the Pinata API.

#### Defined in

[core/interfaces/IStorage.ts:21](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/interfaces/IStorage.ts#L21)

___

### upload

▸ **upload**(`data`, `contractAddress?`, `signerAddress?`): `Promise`<`string`\>

Uploads a file to the storage.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` \| [`FileOrBuffer`](../modules.md#fileorbuffer) | The data to be uploaded. Can be a file/buffer (which will be loaded), or a string. |
| `contractAddress?` | `string` | Optional. The contract address the data belongs to. |
| `signerAddress?` | `string` | Optional. The address of the signer. |

#### Returns

`Promise`<`string`\>

- The hash of the uploaded data.

#### Defined in

[core/interfaces/IStorage.ts:40](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/interfaces/IStorage.ts#L40)

___

### uploadBatch

▸ **uploadBatch**(`files`, `fileStartNumber?`, `contractAddress?`, `signerAddress?`): `Promise`<`string`\>

Uploads a folder to storage.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `files` | (`string` \| [`FileOrBuffer`](../modules.md#fileorbuffer))[] | An array of the data to be uploaded. Can be a files or buffers (which will be loaded), or strings. (can be mixed, too) |
| `fileStartNumber?` | `number` | Optional. The first file file name begins with. |
| `contractAddress?` | `string` | Optional. The contract address the data belongs to. |
| `signerAddress?` | `string` | Optional. The address of the signer. |

#### Returns

`Promise`<`string`\>

- The CID of the uploaded folder.

#### Defined in

[core/interfaces/IStorage.ts:56](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/interfaces/IStorage.ts#L56)

___

### uploadMetadata

▸ **uploadMetadata**(`metadata`, `contractAddress?`, `signerAddress?`): `Promise`<`string`\>

Uploads JSON metadata to IPFS

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadata` | [`JsonObject`](../modules.md#jsonobject) | The metadata to be uploaded. |
| `contractAddress?` | `string` | Optional. The contract address the data belongs to. |
| `signerAddress?` | `string` | Optional. The address of the signer. |

#### Returns

`Promise`<`string`\>

#### Defined in

[core/interfaces/IStorage.ts:72](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/interfaces/IStorage.ts#L72)

___

### uploadMetadataBatch

▸ **uploadMetadataBatch**(`metadatas`, `fileStartNumber?`, `contractAddress?`, `signerAddress?`): `Promise`<`UploadMetadataBatchResult`\>

Uploads JSON metadata to IPFS

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadatas` | [`JsonObject`](../modules.md#jsonobject)[] | - |
| `fileStartNumber?` | `number` | Optional. The first file file name begins with. |
| `contractAddress?` | `string` | Optional. The contract address the data belongs to. |
| `signerAddress?` | `string` | Optional. The address of the signer. |

#### Returns

`Promise`<`UploadMetadataBatchResult`\>

#### Defined in

[core/interfaces/IStorage.ts:87](https://github.com/nftlabs/nftlabs-sdk-ts/blob/2a7690c/src/core/interfaces/IStorage.ts#L87)
