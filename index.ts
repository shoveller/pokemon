import fetch from 'isomorphic-fetch'
import {DefaultApiFactory} from "./poke-api/api";

const sdk = DefaultApiFactory({ basePath: 'https://pokeapi.co' }, fetch)

// 화면에 표시
const react = async () => {
    const res = await sdk.apiV2PokemonNameGet('ditto').then(res => res.json())

    console.log(JSON.stringify(res, null, 2))
}

react()