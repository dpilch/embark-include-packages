# embark-include-packages

Include other Solidity files not contained in src.

## Install

```
npm install embark-include-packages
```

## Config

in `embark.json`

```
"plugins": {
  "embark-include-packages": {
    "include": [
      "path/to/contract.sol"
    ]
  }
}
```