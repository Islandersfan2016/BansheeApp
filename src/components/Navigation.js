import { ethers } from 'ethers'

const Navigation = ({ account, setAccount }) => {
  const connectHandler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    const account = ethers.utils.getAddress(accounts[0])
    setAccount(account)
  }

  return (
    <nav>
      <div className='nav__brand'>
        <h1>Banshee</h1>

        <input className='nav__search' type="text" placeholder='Find millions of experiences' />

        <ul className='nav__links'>
          <li><a href="https://odd-silence-8553.on.fleek.co">Concerts</a></li>
          <li><a href="/">Airdrops</a></li>
          <li><a href="https://www.eventbrite.com/o/banshee-music-87678492063?_gl=1*1wydv5r*_up*MQ..*_ga*ODYwMTQyMzQ0LjE3MTk4MzY5MjI.*_ga_TQVES5V6SH*MTcxOTgzNjkyMS4xLjEuMTcxOTgzNzUxMS4wLjAuMA..">Eventbrite</a></li>
          <li><a href="https://bansheenft.xyz/">Artists</a></li>
        </ul>
      </div>

      {account ? (
        <button
          type="button"
          className='nav__connect'
        >
          {account.slice(0, 6) + '...' + account.slice(38, 42)}
        </button>
      ) : (
        <button
          type="button"
          className='nav__connect'
          onClick={connectHandler}
        >
          Connect
        </button>
      )}
    </nav>
  );
}

export default Navigation;
