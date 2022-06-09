const coinsMap = [
  {
      "id": "0x-wormhole",
      "symbol": "zrx"
  },
  {
      "id": "1inch-wormhole",
      "symbol": "1inch"
  },
  {
      "id": "1safu",
      "symbol": "safu"
  },
  {
      "id": "1sol-io-wormhole",
      "symbol": "1sol"
  },
  {
      "id": "aave-wormhole",
      "symbol": "aave"
  },
  {
      "id": "acumen",
      "symbol": "acm"
  },
  {
      "id": "ageur-wormhole",
      "symbol": "ageur"
  },
  {
      "id": "agronomist",
      "symbol": "agte"
  },
  {
      "id": "akro-wormhole",
      "symbol": "akro"
  },
  {
      "id": "aldrin",
      "symbol": "rin"
  },
  {
      "id": "aleph-im-wormhole",
      "symbol": "aleph"
  },
  {
      "id": "alien-chicken-farm",
      "symbol": "acf"
  },
  {
      "id": "all-art",
      "symbol": "aart"
  },
  {
      "id": "allbridge",
      "symbol": "abr"
  },
  {
      "id": "almond",
      "symbol": "alm"
  },
  {
      "id": "ampleforth-wormhole",
      "symbol": "ampl"
  },
  {
      "id": "amp-wormhole",
      "symbol": "amp"
  },
  {
      "id": "ankr-network-wormhole",
      "symbol": "ankr"
  },
  {
      "id": "apexit-finance",
      "symbol": "apex"
  },
  {
      "id": "apple-fruit",
      "symbol": "apple"
  },
  {
      "id": "apricot",
      "symbol": "apt"
  },
  {
      "id": "apyswap",
      "symbol": "apys"
  },
  {
      "id": "arte",
      "symbol": "arte"
  },
  {
      "id": "articoin",
      "symbol": "atc"
  },
  {
      "id": "ashera",
      "symbol": "ash"
  },
  {
      "id": "asset-backed-protocol",
      "symbol": "abp"
  },
  {
      "id": "astrals-glxy",
      "symbol": "glxy"
  },
  {
      "id": "astrapad",
      "symbol": "astra"
  },
  {
      "id": "atlas-dex",
      "symbol": "ats"
  },
  {
      "id": "audius-wormhole",
      "symbol": "audio"
  },
  {
      "id": "aurory",
      "symbol": "aury"
  },
  {
      "id": "avalanche-2",
      "symbol": "avax"
  },
  {
      "id": "avalanche-wormhole",
      "symbol": "avax"
  },
  {
      "id": "avocadocoin",
      "symbol": "avdo"
  },
  {
      "id": "axie-infinity-shard-wormhole",
      "symbol": "axset"
  },
  {
      "id": "babylondao",
      "symbol": "bby"
  },
  {
      "id": "baby-samo-coin",
      "symbol": "baby"
  },
  {
      "id": "babytigergold",
      "symbol": "babytiger"
  },
  {
      "id": "bacon",
      "symbol": "bacon"
  },
  {
      "id": "balisari",
      "symbol": "bst"
  },
  {
      "id": "balloonsville-air",
      "symbol": "air"
  },
  {
      "id": "bamboo-coin",
      "symbol": "bmbo"
  },
  {
      "id": "banana-bucks",
      "symbol": "bab"
  },
  {
      "id": "bancambios-ax",
      "symbol": "bxs"
  },
  {
      "id": "bancor-wormhole",
      "symbol": "bnt"
  },
  {
      "id": "basic-attention-token-wormhole",
      "symbol": "bat"
  },
  {
      "id": "basis-markets",
      "symbol": "basis"
  },
  {
      "id": "battle-of-guardians-share",
      "symbol": "bgs"
  },
  {
      "id": "big-defi-energy",
      "symbol": "bde"
  },
  {
      "id": "bilira",
      "symbol": "tryb"
  },
  {
      "id": "binance-coin-wormhole",
      "symbol": "bnb"
  },
  {
      "id": "binance-usd-wormhole",
      "symbol": "busdet"
  },
  {
      "id": "binance-usd-wormhole-from-bsc",
      "symbol": "busdbs"
  },
  {
      "id": "bird-money",
      "symbol": "bird"
  },
  {
      "id": "bitmon",
      "symbol": "bit"
  },
  {
      "id": "bitsol-finance",
      "symbol": "btsl"
  },
  {
      "id": "bitspawn",
      "symbol": "spwn"
  },
  {
      "id": "black-label",
      "symbol": "klb"
  },
  {
      "id": "blockasset",
      "symbol": "block"
  },
  {
      "id": "blockfilesystem",
      "symbol": "bfs"
  },
  {
      "id": "blocksmith-labs-forge",
      "symbol": "$forge"
  },
  {
      "id": "blocto-token",
      "symbol": "blt"
  },
  {
      "id": "bofb",
      "symbol": "bofb"
  },
  {
      "id": "boku",
      "symbol": "boku"
  },
  {
      "id": "bole-token",
      "symbol": "bole"
  },
  {
      "id": "bonfida",
      "symbol": "fida"
  },
  {
      "id": "bored-ape-social-club",
      "symbol": "bape"
  },
  {
      "id": "boring-protocol",
      "symbol": "bop"
  },
  {
      "id": "bork",
      "symbol": "bork"
  },
  {
      "id": "boryoku-genesis-dragonz-index",
      "symbol": "drgnz"
  },
  {
      "id": "bounty",
      "symbol": "bnty"
  },
  {
      "id": "bridgesplit-brand-index",
      "symbol": "bbi"
  },
  {
      "id": "brz",
      "symbol": "brz"
  },
  {
      "id": "buff-samo",
      "symbol": "bsamo"
  },
  {
      "id": "bulldog-billionaires",
      "symbol": "bone"
  },
  {
      "id": "bunnyducky",
      "symbol": "bud"
  },
  {
      "id": "capybara",
      "symbol": "capy"
  },
  {
      "id": "care-coin",
      "symbol": "crc"
  },
  {
      "id": "cashcow",
      "symbol": "cow"
  },
  {
      "id": "cashio-dollar",
      "symbol": "cash"
  },
  {
      "id": "cato",
      "symbol": "cato"
  },
  {
      "id": "cave",
      "symbol": "cave"
  },
  {
      "id": "celsius-wormhole",
      "symbol": "cel"
  },
  {
      "id": "chainlink-wormhole",
      "symbol": "link"
  },
  {
      "id": "charactbit",
      "symbol": "chb"
  },
  {
      "id": "cheems",
      "symbol": "cheems"
  },
  {
      "id": "cheesesoda-token",
      "symbol": "soda"
  },
  {
      "id": "chihuahuasol",
      "symbol": "chih"
  },
  {
      "id": "chikincoin",
      "symbol": "ckc"
  },
  {
      "id": "chiliz-wormhole",
      "symbol": "chz"
  },
  {
      "id": "chimp-fight",
      "symbol": "nana"
  },
  {
      "id": "chug-token",
      "symbol": "chug"
  },
  {
      "id": "chum-coin",
      "symbol": "chum"
  },
  {
      "id": "circlepod",
      "symbol": "cpx"
  },
  {
      "id": "clash-of-cars",
      "symbol": "clash"
  },
  {
      "id": "clintex-cti",
      "symbol": "cti"
  },
  {
      "id": "coban",
      "symbol": "coban"
  },
  {
      "id": "codi-finance",
      "symbol": "codi"
  },
  {
      "id": "coin98",
      "symbol": "c98"
  },
  {
      "id": "compendium-fi",
      "symbol": "cmfi"
  },
  {
      "id": "compound-wormhole",
      "symbol": "comp"
  },
  {
      "id": "constitutiondao-wormhole",
      "symbol": "people"
  },
  {
      "id": "convex-finance-wormhole",
      "symbol": "cvx"
  },
  {
      "id": "cope",
      "symbol": "cope"
  },
  {
      "id": "corestarter",
      "symbol": "cstr"
  },
  {
      "id": "cosmic-ape-coin",
      "symbol": "cac"
  },
  {
      "id": "cream-wormhole",
      "symbol": "cream"
  },
  {
      "id": "creamy",
      "symbol": "creamy"
  },
  {
      "id": "cricket-star-manager",
      "symbol": "csm"
  },
  {
      "id": "cronos-wormhole",
      "symbol": "cro"
  },
  {
      "id": "cropperfinance",
      "symbol": "crp"
  },
  {
      "id": "crowny-token",
      "symbol": "crwny"
  },
  {
      "id": "cry-coin",
      "symbol": "cryy"
  },
  {
      "id": "cryowar-token",
      "symbol": "cwar"
  },
  {
      "id": "crypto-mushroomz",
      "symbol": "shroomz"
  },
  {
      "id": "curate",
      "symbol": "xcur"
  },
  {
      "id": "curve-dao-token-wormhole",
      "symbol": "crv"
  },
  {
      "id": "cyborg-apes",
      "symbol": "borg"
  },
  {
      "id": "cyclos",
      "symbol": "cys"
  },
  {
      "id": "dab-coin",
      "symbol": "dab"
  },
  {
      "id": "dai-stablecoin-wormhole",
      "symbol": "daipo"
  },
  {
      "id": "dai-wormhole",
      "symbol": "dai"
  },
  {
      "id": "daosol",
      "symbol": "daosol"
  },
  {
      "id": "darcmatter-coin",
      "symbol": "darc"
  },
  {
      "id": "darleygo-essence",
      "symbol": "dge"
  },
  {
      "id": "dawg",
      "symbol": "dawg"
  },
  {
      "id": "dead-knight",
      "symbol": "dkm"
  },
  {
      "id": "deapcoin",
      "symbol": "dep"
  },
  {
      "id": "decentraland-wormhole",
      "symbol": "mana"
  },
  {
      "id": "decentsol",
      "symbol": "dsol"
  },
  {
      "id": "decimated",
      "symbol": "dio"
  },
  {
      "id": "defi-land",
      "symbol": "dfl"
  },
  {
      "id": "defi-land-gold",
      "symbol": "goldy"
  },
  {
      "id": "degen",
      "symbol": "degn"
  },
  {
      "id": "deltafi",
      "symbol": "delfi"
  },
  {
      "id": "dexlab",
      "symbol": "dxl"
  },
  {
      "id": "dino",
      "symbol": "dino"
  },
  {
      "id": "dinoegg",
      "symbol": "dinoegg"
  },
  {
      "id": "docuchain",
      "symbol": "dcct"
  },
  {
      "id": "dogelana",
      "symbol": "dgln"
  },
  {
      "id": "dogelon-mars-wormhole",
      "symbol": "elon"
  },
  {
      "id": "dogemon-go",
      "symbol": "dogo"
  },
  {
      "id": "doggystyle-coin",
      "symbol": "dsc"
  },
  {
      "id": "dragon-war",
      "symbol": "draw"
  },
  {
      "id": "dust-protocol",
      "symbol": "dust"
  },
  {
      "id": "dydx-wormhole",
      "symbol": "dydx"
  },
  {
      "id": "elumia",
      "symbol": "elu"
  },
  {
      "id": "enjin-wormhole",
      "symbol": "enj"
  },
  {
      "id": "enrex",
      "symbol": "enrx"
  },
  {
      "id": "equinox",
      "symbol": "enx"
  },
  {
      "id": "ethereum-name-service-wormhole",
      "symbol": "ens"
  },
  {
      "id": "ethereum-wormhole",
      "symbol": "eth"
  },
  {
      "id": "euronin",
      "symbol": "euronin"
  },
  {
      "id": "eversol-staked-sol",
      "symbol": "esol"
  },
  {
      "id": "exist",
      "symbol": "exist"
  },
  {
      "id": "fabric",
      "symbol": "fab"
  },
  {
      "id": "fanitrade",
      "symbol": "fani"
  },
  {
      "id": "fantom-token-wormhole",
      "symbol": "ftmet"
  },
  {
      "id": "fenix-danjon",
      "symbol": "djn"
  },
  {
      "id": "final-frontier",
      "symbol": "frnt"
  },
  {
      "id": "flock",
      "symbol": "flock"
  },
  {
      "id": "floof",
      "symbol": "floof"
  },
  {
      "id": "fone",
      "symbol": "fone"
  },
  {
      "id": "fortune-finance",
      "symbol": "frtn"
  },
  {
      "id": "fossil",
      "symbol": "fossil"
  },
  {
      "id": "fractionalized-smb-2367",
      "symbol": "daojones"
  },
  {
      "id": "fractionalized-wave-999",
      "symbol": "wav"
  },
  {
      "id": "fraktionalized-thug-2856",
      "symbol": "thug"
  },
  {
      "id": "frakt-token",
      "symbol": "frkt"
  },
  {
      "id": "frax",
      "symbol": "frax"
  },
  {
      "id": "frax-share",
      "symbol": "fxs"
  },
  {
      "id": "frax-share-wormhole",
      "symbol": "fxs"
  },
  {
      "id": "frax-wormhole",
      "symbol": "frax"
  },
  {
      "id": "frontier-token-wormhole",
      "symbol": "front"
  },
  {
      "id": "ftx-token",
      "symbol": "ftt"
  },
  {
      "id": "ftx-wormhole",
      "symbol": "ftt"
  },
  {
      "id": "fuji",
      "symbol": "fuji"
  },
  {
      "id": "fumoney",
      "symbol": "fum"
  },
  {
      "id": "future",
      "symbol": "ftr"
  },
  {
      "id": "gala-wormhole",
      "symbol": "gala"
  },
  {
      "id": "galaxy-essential",
      "symbol": "gxe"
  },
  {
      "id": "galaxy-war",
      "symbol": "gwt"
  },
  {
      "id": "gameyoo",
      "symbol": "gyc"
  },
  {
      "id": "gari-network",
      "symbol": "gari"
  },
  {
      "id": "garlic",
      "symbol": "grlc"
  },
  {
      "id": "gatechain-wormhole",
      "symbol": "gt"
  },
  {
      "id": "gear",
      "symbol": "gear"
  },
  {
      "id": "genesysgo-shadow",
      "symbol": "shdw"
  },
  {
      "id": "genopets",
      "symbol": "gene"
  },
  {
      "id": "gigco",
      "symbol": "gig"
  },
  {
      "id": "glitter-finance",
      "symbol": "xgli"
  },
  {
      "id": "gmsol",
      "symbol": "gmsol"
  },
  {
      "id": "gnar-token",
      "symbol": "gnar"
  },
  {
      "id": "goats",
      "symbol": "goats"
  },
  {
      "id": "god-dao",
      "symbol": "god"
  },
  {
      "id": "goosefx",
      "symbol": "gofx"
  },
  {
      "id": "governance-ohm-wormhole",
      "symbol": "gohm"
  },
  {
      "id": "grape-2",
      "symbol": "grape"
  },
  {
      "id": "green-satoshi-token",
      "symbol": "gst-sol"
  },
  {
      "id": "gton-capital",
      "symbol": "gton"
  },
  {
      "id": "gu",
      "symbol": "gu"
  },
  {
      "id": "hapi",
      "symbol": "hapi"
  },
  {
      "id": "hawksight",
      "symbol": "hawk"
  },
  {
      "id": "heavenland-hto",
      "symbol": "hto"
  },
  {
      "id": "hedget-wormhole",
      "symbol": "hget"
  },
  {
      "id": "high-roller-hippo-clique",
      "symbol": "roll"
  },
  {
      "id": "himalayan-cat-coin",
      "symbol": "hima"
  },
  {
      "id": "hippo-coin",
      "symbol": "$hippo"
  },
  {
      "id": "hiram",
      "symbol": "hiram"
  },
  {
      "id": "holy-trinity",
      "symbol": "holy"
  },
  {
      "id": "honey-finance",
      "symbol": "honey"
  },
  {
      "id": "hono",
      "symbol": "hono"
  },
  {
      "id": "hubble",
      "symbol": "hbb"
  },
  {
      "id": "huobi-btc-wormhole",
      "symbol": "hbtc"
  },
  {
      "id": "husd-stablecoin-wormhole",
      "symbol": "husd"
  },
  {
      "id": "hxro",
      "symbol": "hxro"
  },
  {
      "id": "hxro-wormhole",
      "symbol": "hxro"
  },
  {
      "id": "ice-wormhole",
      "symbol": "ice"
  },
  {
      "id": "illuvium-wormhole",
      "symbol": "ilv"
  },
  {
      "id": "interest-bearing-bitcoin-wormhole",
      "symbol": "ibbtc"
  },
  {
      "id": "intersola",
      "symbol": "isola"
  },
  {
      "id": "investin",
      "symbol": "ivn"
  },
  {
      "id": "invictus",
      "symbol": "in"
  },
  {
      "id": "invoke",
      "symbol": "iv"
  },
  {
      "id": "jet",
      "symbol": "jet"
  },
  {
      "id": "joe-wormhole",
      "symbol": "joe"
  },
  {
      "id": "jokes-meme",
      "symbol": "joke"
  },
  {
      "id": "jpool",
      "symbol": "jsol"
  },
  {
      "id": "jungle",
      "symbol": "jungle"
  },
  {
      "id": "jungle-defi",
      "symbol": "jfi"
  },
  {
      "id": "kaizen",
      "symbol": "kzen"
  },
  {
      "id": "kala-network",
      "symbol": "klnw"
  },
  {
      "id": "kalisten",
      "symbol": "ks"
  },
  {
      "id": "keep3rv1-wormhole",
      "symbol": "kp3r"
  },
  {
      "id": "keep-network-wormhole",
      "symbol": "keep"
  },
  {
      "id": "keeshond",
      "symbol": "$ksh"
  },
  {
      "id": "kekwcoin",
      "symbol": "kekw"
  },
  {
      "id": "kermit",
      "symbol": "kermit"
  },
  {
      "id": "killswitch",
      "symbol": "ksw"
  },
  {
      "id": "kin",
      "symbol": "kin"
  },
  {
      "id": "kineko",
      "symbol": "kko"
  },
  {
      "id": "king-samo",
      "symbol": "ksamo"
  },
  {
      "id": "kitty-coin-solana",
      "symbol": "kitty"
  },
  {
      "id": "kitty-solana",
      "symbol": "kitty"
  },
  {
      "id": "krill",
      "symbol": "krill"
  },
  {
      "id": "krook-coin",
      "symbol": "krook"
  },
  {
      "id": "krown",
      "symbol": "krw"
  },
  {
      "id": "kurobi",
      "symbol": "kuro"
  },
  {
      "id": "laddercaster",
      "symbol": "lada"
  },
  {
      "id": "larix",
      "symbol": "larix"
  },
  {
      "id": "leonidas-token",
      "symbol": "leonidas"
  },
  {
      "id": "lido-dao-wormhole",
      "symbol": "ldo"
  },
  {
      "id": "lido-staked-ether-wormhole",
      "symbol": "steth"
  },
  {
      "id": "lido-staked-sol",
      "symbol": "stsol"
  },
  {
      "id": "lifinity",
      "symbol": "lfnty"
  },
  {
      "id": "liq-protocol",
      "symbol": "liq"
  },
  {
      "id": "littleinu",
      "symbol": "linu"
  },
  {
      "id": "lizard-token",
      "symbol": "lizard"
  },
  {
      "id": "loopringcoin-v2-wormhole",
      "symbol": "lrc"
  },
  {
      "id": "loot-token",
      "symbol": "loot"
  },
  {
      "id": "luatoken-wormhole",
      "symbol": "lua"
  },
  {
      "id": "luna-wormhole",
      "symbol": "lunc"
  },
  {
      "id": "magic-eggs",
      "symbol": "maga"
  },
  {
      "id": "magic-internet-money-wormhole",
      "symbol": "mimet"
  },
  {
      "id": "maneki-neko",
      "symbol": "neki"
  },
  {
      "id": "mango-markets",
      "symbol": "mngo"
  },
  {
      "id": "maps",
      "symbol": "maps"
  },
  {
      "id": "marinade",
      "symbol": "mnde"
  },
  {
      "id": "math-token-wormhole",
      "symbol": "math"
  },
  {
      "id": "matic-wormhole",
      "symbol": "maticpo"
  },
  {
      "id": "matic-wormhole-from-ethereum",
      "symbol": "maticet"
  },
  {
      "id": "matrixetf",
      "symbol": "mdf"
  },
  {
      "id": "matrix-solana-index",
      "symbol": "msi"
  },
  {
      "id": "meanfi",
      "symbol": "mean"
  },
  {
      "id": "media-network",
      "symbol": "media"
  },
  {
      "id": "mekkafroggo",
      "symbol": "mekka"
  },
  {
      "id": "mekka-froggo",
      "symbol": "lfgo"
  },
  {
      "id": "mend",
      "symbol": "mend"
  },
  {
      "id": "mercurial",
      "symbol": "mer"
  },
  {
      "id": "metamall",
      "symbol": "mall"
  },
  {
      "id": "metamounts",
      "symbol": "mount"
  },
  {
      "id": "metashells",
      "symbol": "shell"
  },
  {
      "id": "million-monke",
      "symbol": "mimo"
  },
  {
      "id": "millionsy",
      "symbol": "milli"
  },
  {
      "id": "mim",
      "symbol": "swarm"
  },
  {
      "id": "mimatic",
      "symbol": "mimatic"
  },
  {
      "id": "mindfolk-wood",
      "symbol": "$wood"
  },
  {
      "id": "mma-gaming",
      "symbol": "mma"
  },
  {
      "id": "mongoosecoin",
      "symbol": "mongoose"
  },
  {
      "id": "monkeyball",
      "symbol": "mbs"
  },
  {
      "id": "moonlana",
      "symbol": "mola"
  },
  {
      "id": "moshiheads",
      "symbol": "moshi"
  },
  {
      "id": "msol",
      "symbol": "msol"
  },
  {
      "id": "musk-doge",
      "symbol": "mkd"
  },
  {
      "id": "my-neighbor-alice-wormhole",
      "symbol": "alice"
  },
  {
      "id": "naga-kingdom",
      "symbol": "naga"
  },
  {
      "id": "naxar",
      "symbol": "naxar"
  },
  {
      "id": "neonomad-finance",
      "symbol": "nni"
  },
  {
      "id": "nerv-protocol",
      "symbol": "nrv"
  },
  {
      "id": "nest-arcade",
      "symbol": "nesta"
  },
  {
      "id": "next-defi-protocol",
      "symbol": "nxdf"
  },
  {
      "id": "nexus-mutual-wormhole",
      "symbol": "nxm"
  },
  {
      "id": "nfteyez",
      "symbol": "eye"
  },
  {
      "id": "ninja-protocol",
      "symbol": "ninja"
  },
  {
      "id": "nirvana-ana",
      "symbol": "ana"
  },
  {
      "id": "nirvana-nirv",
      "symbol": "nirv"
  },
  {
      "id": "nodebunch",
      "symbol": "noch"
  },
  {
      "id": "nogoaltoken",
      "symbol": "ino"
  },
  {
      "id": "nole-npc",
      "symbol": "npc"
  },
  {
      "id": "nooft",
      "symbol": "nooft"
  },
  {
      "id": "nora-token",
      "symbol": "nra"
  },
  {
      "id": "nosana",
      "symbol": "nos"
  },
  {
      "id": "nova-finance",
      "symbol": "nova"
  },
  {
      "id": "odop",
      "symbol": "odop"
  },
  {
      "id": "oink-token",
      "symbol": "oink"
  },
  {
      "id": "olympus-wormhole",
      "symbol": "ohm"
  },
  {
      "id": "only1",
      "symbol": "like"
  },
  {
      "id": "oogi",
      "symbol": "oogi"
  },
  {
      "id": "opendao-wormhole",
      "symbol": "sos"
  },
  {
      "id": "oppa",
      "symbol": "oppa"
  },
  {
      "id": "orca",
      "symbol": "orca"
  },
  {
      "id": "otter-finance",
      "symbol": "otr"
  },
  {
      "id": "oxbull-solana",
      "symbol": "oxs"
  },
  {
      "id": "oxygen",
      "symbol": "oxy"
  },
  {
      "id": "pancakeswap-wormhole",
      "symbol": "cake"
  },
  {
      "id": "panda-coin",
      "symbol": "panda"
  },
  {
      "id": "parasol-finance",
      "symbol": "psol"
  },
  {
      "id": "parrot-protocol",
      "symbol": "prt"
  },
  {
      "id": "parrot-usd",
      "symbol": "pai"
  },
  {
      "id": "particle-technology",
      "symbol": "part"
  },
  {
      "id": "partneroid",
      "symbol": "ptr"
  },
  {
      "id": "paxos-gold-wormhole",
      "symbol": "paxg"
  },
  {
      "id": "pellet-food",
      "symbol": "pellet"
  },
  {
      "id": "perpetual-wormhole",
      "symbol": "perp"
  },
  {
      "id": "phant",
      "symbol": "pnt"
  },
  {
      "id": "phantasia",
      "symbol": "fant"
  },
  {
      "id": "physis",
      "symbol": "phy"
  },
  {
      "id": "pigeon-sol",
      "symbol": "pgnt"
  },
  {
      "id": "pip",
      "symbol": "pip"
  },
  {
      "id": "pixels-so",
      "symbol": "pixl"
  },
  {
      "id": "pizza-pug-coin",
      "symbol": "ppug"
  },
  {
      "id": "playground",
      "symbol": "playa"
  },
  {
      "id": "playground-waves-floor-index",
      "symbol": "waves"
  },
  {
      "id": "plutonian-dao",
      "symbol": "pld"
  },
  {
      "id": "pollen-coin",
      "symbol": "pcn"
  },
  {
      "id": "portals-ivory-index",
      "symbol": "ivry"
  },
  {
      "id": "port-finance",
      "symbol": "port"
  },
  {
      "id": "positron-token",
      "symbol": "pot"
  },
  {
      "id": "potato",
      "symbol": "potato"
  },
  {
      "id": "prism",
      "symbol": "prism"
  },
  {
      "id": "protoreality-games",
      "symbol": "prgc"
  },
  {
      "id": "psy-coin",
      "symbol": "psy"
  },
  {
      "id": "psyoptions",
      "symbol": "psy"
  },
  {
      "id": "puff",
      "symbol": "puff"
  },
  {
      "id": "quid-token",
      "symbol": "quid"
  },
  {
      "id": "racefi",
      "symbol": "racefi"
  },
  {
      "id": "rad",
      "symbol": "rad"
  },
  {
      "id": "rally-solana",
      "symbol": "srly"
  },
  {
      "id": "rari-governance-token-wormhole",
      "symbol": "rgt"
  },
  {
      "id": "ratio-finance",
      "symbol": "ratio"
  },
  {
      "id": "raydium",
      "symbol": "ray"
  },
  {
      "id": "realy-metaverse",
      "symbol": "real"
  },
  {
      "id": "rendoge",
      "symbol": "rendoge"
  },
  {
      "id": "republic-credits",
      "symbol": "rpc"
  },
  {
      "id": "reserve-rights-wormhole",
      "symbol": "rsr"
  },
  {
      "id": "rice",
      "symbol": "rice"
  },
  {
      "id": "roar-token",
      "symbol": "roar"
  },
  {
      "id": "rocket-pool-wormhole",
      "symbol": "rpl"
  },
  {
      "id": "rollbit-coin",
      "symbol": "rlb"
  },
  {
      "id": "rope-token",
      "symbol": "rope"
  },
  {
      "id": "rose-wormhole",
      "symbol": "rose"
  },
  {
      "id": "run",
      "symbol": "run"
  },
  {
      "id": "saber",
      "symbol": "sbr"
  },
  {
      "id": "saber-wrapped-usd-coin",
      "symbol": "susdc-9"
  },
  {
      "id": "sail",
      "symbol": "sail"
  },
  {
      "id": "samo-inu",
      "symbol": "sinu"
  },
  {
      "id": "samoyedcoin",
      "symbol": "samo"
  },
  {
      "id": "samusky-token",
      "symbol": "samu"
  },
  {
      "id": "santaclaus",
      "symbol": "santa"
  },
  {
      "id": "sator",
      "symbol": "sao"
  },
  {
      "id": "sbf-coin",
      "symbol": "sbfc"
  },
  {
      "id": "scrap",
      "symbol": "scrap"
  },
  {
      "id": "secretum",
      "symbol": "ser"
  },
  {
      "id": "seeded-network",
      "symbol": "seeded"
  },
  {
      "id": "sentre",
      "symbol": "sntr"
  },
  {
      "id": "serum",
      "symbol": "srm"
  },
  {
      "id": "serum-ecosystem-token",
      "symbol": "seco"
  },
  {
      "id": "serum-wormhole-from-ethereum",
      "symbol": "srmet"
  },
  {
      "id": "shiba-inu-wormhole",
      "symbol": "shib"
  },
  {
      "id": "shibalana",
      "symbol": "shiba"
  },
  {
      "id": "shiba-light",
      "symbol": "shibt"
  },
  {
      "id": "shibana",
      "symbol": "bana"
  },
  {
      "id": "shibaverse-token",
      "symbol": "shiver"
  },
  {
      "id": "shill-token",
      "symbol": "shill"
  },
  {
      "id": "shoebill-coin",
      "symbol": "shbl"
  },
  {
      "id": "smooth-love-potion-wormhole",
      "symbol": "slp"
  },
  {
      "id": "socean-staked-sol",
      "symbol": "scnsol"
  },
  {
      "id": "solabrador",
      "symbol": "solab"
  },
  {
      "id": "solalambo",
      "symbol": "sob"
  },
  {
      "id": "solana-ecosystem-index",
      "symbol": "soli"
  },
  {
      "id": "solana-inu",
      "symbol": "inu"
  },
  {
      "id": "solana-nut",
      "symbol": "solnut"
  },
  {
      "id": "solana-paws",
      "symbol": "paws"
  },
  {
      "id": "solanaprime",
      "symbol": "prime"
  },
  {
      "id": "solanasail-governance-token",
      "symbol": "gsail"
  },
  {
      "id": "solanax",
      "symbol": "sold"
  },
  {
      "id": "sola-ninja",
      "symbol": "snj"
  },
  {
      "id": "solanium",
      "symbol": "slim"
  },
  {
      "id": "solanyx",
      "symbol": "syx"
  },
  {
      "id": "solape-token",
      "symbol": "solape"
  },
  {
      "id": "solapoly",
      "symbol": "slpy"
  },
  {
      "id": "solar",
      "symbol": "solar"
  },
  {
      "id": "solar-bear",
      "symbol": "solbear"
  },
  {
      "id": "solareum-wallet",
      "symbol": "xsb"
  },
  {
      "id": "sola-token",
      "symbol": "sola"
  },
  {
      "id": "sol-baby-doge",
      "symbol": "sbabydoge"
  },
  {
      "id": "solbank-token",
      "symbol": "sbnk"
  },
  {
      "id": "solberg",
      "symbol": "slb"
  },
  {
      "id": "solberry",
      "symbol": "solberry"
  },
  {
      "id": "solcats",
      "symbol": "meow"
  },
  {
      "id": "solchicks-shards",
      "symbol": "shards"
  },
  {
      "id": "solchicks-token",
      "symbol": "chicks"
  },
  {
      "id": "solcial",
      "symbol": "slcl"
  },
  {
      "id": "solclout",
      "symbol": "sct"
  },
  {
      "id": "solcondoms",
      "symbol": "condoms"
  },
  {
      "id": "solcubator",
      "symbol": "solc"
  },
  {
      "id": "soldate-token",
      "symbol": "date"
  },
  {
      "id": "solderland",
      "symbol": "sldr"
  },
  {
      "id": "soldex",
      "symbol": "solx"
  },
  {
      "id": "soldoge",
      "symbol": "sdoge"
  },
  {
      "id": "solend",
      "symbol": "slnd"
  },
  {
      "id": "solex-finance",
      "symbol": "slx"
  },
  {
      "id": "solfarm",
      "symbol": "tulip"
  },
  {
      "id": "solfina",
      "symbol": "solfi"
  },
  {
      "id": "solfire-finance",
      "symbol": "fire"
  },
  {
      "id": "sol-flowers",
      "symbol": "flwr"
  },
  {
      "id": "sol-fox",
      "symbol": "sfox"
  },
  {
      "id": "solhero",
      "symbol": "hero"
  },
  {
      "id": "solice",
      "symbol": "slc"
  },
  {
      "id": "solid-protocol",
      "symbol": "solid"
  },
  {
      "id": "solily-protocol",
      "symbol": "lily"
  },
  {
      "id": "solit",
      "symbol": "slt"
  },
  {
      "id": "solminter",
      "symbol": "smrt"
  },
  {
      "id": "solmoon",
      "symbol": "solmo"
  },
  {
      "id": "solootbox-dao",
      "symbol": "box"
  },
  {
      "id": "solpad-finance",
      "symbol": "solpad"
  },
  {
      "id": "solpatrol-bail",
      "symbol": "bail"
  },
  {
      "id": "solpay-finance",
      "symbol": "solpay"
  },
  {
      "id": "solrazr",
      "symbol": "solr"
  },
  {
      "id": "solrider",
      "symbol": "srd"
  },
  {
      "id": "solrise-finance",
      "symbol": "slrs"
  },
  {
      "id": "solster",
      "symbol": "str"
  },
  {
      "id": "soltato-fries",
      "symbol": "fries"
  },
  {
      "id": "solum",
      "symbol": "solum"
  },
  {
      "id": "soluna",
      "symbol": "slna"
  },
  {
      "id": "solust",
      "symbol": "solust"
  },
  {
      "id": "solvent",
      "symbol": "svt"
  },
  {
      "id": "solview",
      "symbol": "solv"
  },
  {
      "id": "solx-gaming-guild",
      "symbol": "sgg"
  },
  {
      "id": "solyard-finance",
      "symbol": "yard"
  },
  {
      "id": "sombe",
      "symbol": "sbe"
  },
  {
      "id": "sonarwatch",
      "symbol": "sonar"
  },
  {
      "id": "soul-dog-city-bones",
      "symbol": "bones"
  },
  {
      "id": "soulocoin",
      "symbol": "soulo"
  },
  {
      "id": "spacefalcon",
      "symbol": "fcon"
  },
  {
      "id": "space-hamster",
      "symbol": "hams"
  },
  {
      "id": "spell-token-wormhole",
      "symbol": "spell"
  },
  {
      "id": "sphinxel",
      "symbol": "spx"
  },
  {
      "id": "spookeletons-token",
      "symbol": "spkl"
  },
  {
      "id": "star-atlas",
      "symbol": "atlas"
  },
  {
      "id": "star-atlas-dao",
      "symbol": "polis"
  },
  {
      "id": "starbots",
      "symbol": "bot"
  },
  {
      "id": "star-chain",
      "symbol": "star"
  },
  {
      "id": "starlaunch",
      "symbol": "stars"
  },
  {
      "id": "step-finance",
      "symbol": "step"
  },
  {
      "id": "stepn",
      "symbol": "gmt"
  },
  {
      "id": "stoned-ape-crew-index",
      "symbol": "sac"
  },
  {
      "id": "such-shiba",
      "symbol": "such"
  },
  {
      "id": "sunny-aggregator",
      "symbol": "sunny"
  },
  {
      "id": "sunnysideup",
      "symbol": "ssu"
  },
  {
      "id": "superbonds",
      "symbol": "sb"
  },
  {
      "id": "sushi",
      "symbol": "sushi"
  },
  {
      "id": "sushi-wormhole",
      "symbol": "sushi"
  },
  {
      "id": "swag-finance-wormhole",
      "symbol": "swag"
  },
  {
      "id": "swanlana",
      "symbol": "swan"
  },
  {
      "id": "swerve-protocol",
      "symbol": "swerve"
  },
  {
      "id": "swipe-wormhole",
      "symbol": "sxp"
  },
  {
      "id": "swole-doge",
      "symbol": "swole"
  },
  {
      "id": "synchrony",
      "symbol": "scy"
  },
  {
      "id": "synesis-one",
      "symbol": "sns"
  },
  {
      "id": "synex-coin",
      "symbol": "minecraft"
  },
  {
      "id": "synthetic-ftt",
      "symbol": "xftt"
  },
  {
      "id": "synthetic-sol",
      "symbol": "xsol"
  },
  {
      "id": "synthetic-usd",
      "symbol": "xusd"
  },
  {
      "id": "synthetic-usd-fabric",
      "symbol": "fusd"
  },
  {
      "id": "synthetify-token",
      "symbol": "sny"
  },
  {
      "id": "synthetix-network-token-wormhole",
      "symbol": "snx"
  },
  {
      "id": "sypool",
      "symbol": "syp"
  },
  {
      "id": "tabtrader",
      "symbol": "ttt"
  },
  {
      "id": "taki",
      "symbol": "taki"
  },
  {
      "id": "terrausd-wormhole",
      "symbol": "ust"
  },
  {
      "id": "tether",
      "symbol": "usdt"
  },
  {
      "id": "tether-usd-pos-wormhole",
      "symbol": "usdtpo"
  },
  {
      "id": "tether-usd-wormhole-from-bsc",
      "symbol": "usdtbs"
  },
  {
      "id": "tether-usd-wormhole-from-ethereum",
      "symbol": "usdtet"
  },
  {
      "id": "the-4th-pillar",
      "symbol": "four"
  },
  {
      "id": "the-alliance-of-eragard",
      "symbol": "era"
  },
  {
      "id": "theca",
      "symbol": "theca"
  },
  {
      "id": "the-graph-wormhole",
      "symbol": "grt"
  },
  {
      "id": "the-sandbox-wormhole",
      "symbol": "sand"
  },
  {
      "id": "thesolandao",
      "symbol": "sdo"
  },
  {
      "id": "the-starship-finance",
      "symbol": "bip"
  },
  {
      "id": "the-xenobots-project",
      "symbol": "xeno"
  },
  {
      "id": "ticket-finance",
      "symbol": "ticket"
  },
  {
      "id": "tiger-coin",
      "symbol": "tiger"
  },
  {
      "id": "tiny-bonez",
      "symbol": "t1ny"
  },
  {
      "id": "tiny-colony",
      "symbol": "tiny"
  },
  {
      "id": "tokemak-wormhole",
      "symbol": "toke"
  },
  {
      "id": "tokenbook",
      "symbol": "tbk"
  },
  {
      "id": "torg",
      "symbol": "torg"
  },
  {
      "id": "tribeland",
      "symbol": "trbl"
  },
  {
      "id": "tribe-wormhole",
      "symbol": "tribe"
  },
  {
      "id": "trollbox",
      "symbol": "tox"
  },
  {
      "id": "tudabirds",
      "symbol": "burd"
  },
  {
      "id": "turnt-up-tikis",
      "symbol": "tut"
  },
  {
      "id": "turtles-token",
      "symbol": "trtls"
  },
  {
      "id": "twirl-governance-token",
      "symbol": "tgt"
  },
  {
      "id": "ufo-gaming-wormhole",
      "symbol": "ufo"
  },
  {
      "id": "unclemine",
      "symbol": "um"
  },
  {
      "id": "uniswap-wormhole",
      "symbol": "uni"
  },
  {
      "id": "unq",
      "symbol": "unq"
  },
  {
      "id": "upbots-wormhole",
      "symbol": "ubxt"
  },
  {
      "id": "upfi-network",
      "symbol": "ups"
  },
  {
      "id": "usd-coin",
      "symbol": "usdc"
  },
  {
      "id": "usd-coin-pos-wormhole",
      "symbol": "usdcpo"
  },
  {
      "id": "usd-coin-wormhole-from-bsc",
      "symbol": "usdcbs"
  },
  {
      "id": "usd-coin-wormhole-from-ethereum",
      "symbol": "usdcet"
  },
  {
      "id": "usdh",
      "symbol": "usdh"
  },
  {
      "id": "usdk-wormhole",
      "symbol": "usdk"
  },
  {
      "id": "uxd-protocol-token",
      "symbol": "uxp"
  },
  {
      "id": "uxd-stablecoin",
      "symbol": "uxd"
  },
  {
      "id": "viral-inu",
      "symbol": "vinu"
  },
  {
      "id": "visiongame",
      "symbol": "vision"
  },
  {
      "id": "vitall-markets",
      "symbol": "vital"
  },
  {
      "id": "vivaion",
      "symbol": "vivaion"
  },
  {
      "id": "void-games",
      "symbol": "void"
  },
  {
      "id": "voovoo",
      "symbol": "voo"
  },
  {
      "id": "vybit",
      "symbol": "vi"
  },
  {
      "id": "vynk-chain",
      "symbol": "vync"
  },
  {
      "id": "waggle-network",
      "symbol": "wag"
  },
  {
      "id": "wagmi-on-solana",
      "symbol": "wagmi"
  },
  {
      "id": "walken",
      "symbol": "wlkn"
  },
  {
      "id": "wamo",
      "symbol": "wamo"
  },
  {
      "id": "ween-token",
      "symbol": "weens"
  },
  {
      "id": "whalemap",
      "symbol": "wmp"
  },
  {
      "id": "whey-token",
      "symbol": "whey"
  },
  {
      "id": "winerz",
      "symbol": "$wnz"
  },
  {
      "id": "wipemyass",
      "symbol": "wipe"
  },
  {
      "id": "wolfecoin",
      "symbol": "wolfe"
  },
  {
      "id": "woof-token",
      "symbol": "woof"
  },
  {
      "id": "woo-network",
      "symbol": "woo"
  },
  {
      "id": "woop",
      "symbol": "woop"
  },
  {
      "id": "wrapped-bitcoin-sollet",
      "symbol": "sobtc"
  },
  {
      "id": "wrapped-btc-wormhole",
      "symbol": "wbtc"
  },
  {
      "id": "wrapped-busd-allbridge-from-bsc",
      "symbol": "abbusd"
  },
  {
      "id": "wrapped-chainlink-sollet",
      "symbol": "solink"
  },
  {
      "id": "wrapped-cusd-allbridge-from-celo",
      "symbol": "acusd"
  },
  {
      "id": "wrapped-ethereum-sollet",
      "symbol": "soeth"
  },
  {
      "id": "wrapped-solana",
      "symbol": "sol"
  },
  {
      "id": "wrapped-usdt-allbridge-from-polygon",
      "symbol": "apusdt"
  },
  {
      "id": "wrapped-ust",
      "symbol": "ustc"
  },
  {
      "id": "wrapped-yfi-sollet",
      "symbol": "soyfi"
  },
  {
      "id": "xhashtag",
      "symbol": "xtag"
  },
  {
      "id": "xverse",
      "symbol": "xvc"
  },
  {
      "id": "yawww",
      "symbol": "yaw"
  },
  {
      "id": "yearn-finance-wormhole",
      "symbol": "yfi"
  },
  {
      "id": "yield-guild-games-wormhole",
      "symbol": "ygg"
  },
  {
      "id": "zap",
      "symbol": "zap"
  },
  {
      "id": "zebec-protocol",
      "symbol": "zbc"
  },
  {
      "id": "zion",
      "symbol": "zion"
  },
  {
      "id": "zoints",
      "symbol": "zee"
  }
]

const getIdBySymbol = (symbol) => {
  const coin = coinsMap.find(c => c.symbol.toUpperCase() == symbol.toUpperCase());
  return coin?.id;
}

module.exports = {
  getIdBySymbol
}