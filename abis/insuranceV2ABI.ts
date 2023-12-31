export const insuranceV2Abi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_defaultCurrency",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_optimisticOracleV3",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "policyId",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "insuredEvent",
        "type": "bytes"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "insuranceAmount",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "payoutAddress",
        "type": "address"
      }
    ],
    "name": "InsuranceIssued",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "policyId",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "assertionId",
        "type": "bytes32"
      }
    ],
    "name": "InsurancePayoutRequested",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "policyId",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "assertionId",
        "type": "bytes32"
      }
    ],
    "name": "InsurancePayoutSettled",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "assertedPolicies",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "assertionId",
        "type": "bytes32"
      }
    ],
    "name": "assertionDisputedCallback",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "assertionLiveness",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "assertionId",
        "type": "bytes32"
      },
      {
        "internalType": "bool",
        "name": "assertedTruthfully",
        "type": "bool"
      }
    ],
    "name": "assertionResolvedCallback",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "defaultCurrency",
    "outputs": [
      {
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "defaultIdentifier",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "insuranceAmount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "payoutAddress",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "insuredEvent",
        "type": "bytes"
      }
    ],
    "name": "issueInsurance",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "policyId",
        "type": "bytes32"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "oo",
    "outputs": [
      {
        "internalType": "contract OptimisticOracleV3Interface",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "policies",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "insuranceAmount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "payoutAddress",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "insuredEvent",
        "type": "bytes"
      },
      {
        "internalType": "enum InsuranceV2.Status",
        "name": "status",
        "type": "uint8"
      },
      {
        "internalType": "bytes32",
        "name": "assertionId",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "policyId",
        "type": "bytes32"
      }
    ],
    "name": "requestPayout",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "assertionId",
        "type": "bytes32"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const