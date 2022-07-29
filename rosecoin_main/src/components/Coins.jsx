import React, { useEffect, useState } from 'react'

const Coins = () => {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    getCoinList()
  }, [])

  const getCoinList = async () => {
    const check = localStorage.getItem('coins')

    if (check) {
      setCoins(JSON.parse(check))
    } else {
      const connectApi = await fetch(
        `https://api.coinstats.app/public/v1/coins`
      )
      const data = await connectApi.json()
      localStorage.setItem('coins', JSON.stringify(data))
      setCoins(data)
      console.log(coins)
    }
  }

  return (
    <div>
      <h1>Coins</h1>
      <table>
        <thead>
          <tr>
            <td>Rank</td>
            <td>Name</td>
            <td>Symbol</td>
            <td>Market Cap</td>
            <td>Price</td>
            <td>Available Supply</td>
            <td>Volume(24hrs)</td>
          </tr>
        </thead>

        <tbody>
          {coins.map((coin, coinid) => {
            return (
              <>
                <tr id={coinid}>
                  <td>{coin.rank}</td>
                  <td>
                    <a href={coin.websiteUrl}>
                      <img src={coin.icon} alt='coin logo' />
                      <p>{coin.name}</p>
                    </a>
                  </td>
                  <td></td>
                </tr>
              </>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Coins
