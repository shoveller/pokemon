import fetch from 'isomorphic-fetch'

interface IRecord {
    name: string
    url: string
}

interface IResponse<RecordType> {
    count: number
    next: string
    previous?: string
    results: Array<RecordType>
}

// sdk 생성
const sdk = () => fetch('https://pokeapi.co/api/v2/pokemon').then((res: { json: () => any }) => res.json()) as Promise<IResponse<IRecord>>

// 화면에 표시
const react = async () => {
    const res = await sdk()

    console.log(JSON.stringify(res, null, 2))
}

react()