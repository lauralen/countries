import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { fetchCountry } from './api'
import { Region } from './types'

interface Data {
  name: string
  nativeName: string
  currency: string
  continent: Region
  languages: string[]
  states: string[]
}

type Status = 'loading' | 'error' | 'idle'

const Country = () => {
  const { code } = useParams<'code'>()

  const [data, setData] = useState<Data>()
  const [status, setStatus] = useState<Status>('idle')

  useEffect(() => {
    const fetchData = async () => {
      setStatus('loading')

      try {
        const res = await fetchCountry()
        const {
          continent,
          currency,
          languages,
          name,
          native: nativeName,
          states,
        } = res.data.country

        const formattedData = {
          name,
          nativeName,
          currency,
          continent: continent.name,
          languages: languages.map(({ name }) => name),
          states: states.map(({ name }) => name),
        }

        setData(formattedData)
        setStatus('idle')
      } catch (error) {
        console.log('error', error)
        setStatus('error')
      }
    }

    fetchData()
  }, [code])

  return (
    <div>
      {
        {
          loading: 'Loading...',
          failed: 'Error',
          idle: (
            <>
              <div>{data?.name}</div>
              <div>{data?.nativeName}</div>
              <div>{data?.continent}</div>
              <div>{data?.currency}</div>
            </>
          ),
        }[status]
      }
    </div>
  )
}

export default Country