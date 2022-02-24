import React, { useState }from "react";
import { FetchData } from "../../../../api/Fetch";
import '../css/MMR.css'
import { message } from "../components/Message";
import { MMRinterface } from "../interfaces/Interfaces";

export const MMR = () => {

  const [MMR, setMMR] = useState<MMRinterface>()
  const [roninaddress, setRonin] = useState<string>('')
  const [Info, setInfo] = useState<boolean>(false)

  function getMMR(event: React.MouseEvent<HTMLElement>){
    event.preventDefault()
    setInfo(false)
    const URL = 'https://game-api.axie.technology/mmr/'
    const ronin = URL + roninaddress
    const data = async() => {
      const data = await FetchData(ronin)
      console.log(data)
        if (data === 'error') {
          throw ('ERROR')
        }
        setMMR(data[0])
        setInfo(true)
    }
    data()
  }

  function HandleRonin(event: React.ChangeEvent<HTMLInputElement>){
    setRonin(event.target.value)
  }

  return (
    <div>
        <input
          className='box'
          type='text'
          name='roninaddress'
          placeholder='Enter Ronin address'
          value={roninaddress}
          onChange={HandleRonin}
        />
        <button onClick={getMMR}>Get MMR</button>
      <h1>{roninaddress}</h1>
      {Info === false ? null :
      roninaddress.length !== 46 ?
      <h1>Place a valid Ronin Address</h1> :
          <div> 
            <h1 className="MMR1" >{MMR?.items[1].name}</h1>
            <h1 className="MMR2">{MMR?.items[1].elo} MMR</h1>
            <h1 className="MMR1">{message(MMR)}</h1>
          </div>
      }
    </div>
  );
}