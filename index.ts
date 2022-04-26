import axios from 'axios'

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
const sdk = () => axios.get<IResponse<IRecord>>('https://pokeapi.co/api/v2/pokemon').then(res => res.data)

// 화면에 표시
const react = async () => {
    const res = await sdk()

    console.log(JSON.stringify(res, null, 2))
}

react()