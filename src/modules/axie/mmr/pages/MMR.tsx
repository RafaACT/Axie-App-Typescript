import React, { useState }from "react";
import FetchData from "../../../../api/Api";
import '../css/MMR.css'

export const MMR = () => {

  const [MMR, setMMR] = useState<string[] | any>()
  const [roninaddress, setRonin] = useState<string>('')
  const [Info, setInfo] = useState<boolean>(false)

  function getMMR(event: React.MouseEvent<HTMLElement>){
    event.preventDefault()
    setInfo(false)
    const URL = 'https://game-api.axie.technology/mmr/'
    const ronin = URL + roninaddress
    const data = FetchData(ronin)
    .then(data => {
      setMMR(data[0])
      setInfo(true)
    })
  }

  function HandleRonin(event: React.ChangeEvent<HTMLInputElement>){
    setRonin(event.target.value)
  }

  function message(){
    const message = ''
    if(MMR.items[1].elo >= 1500){
        const message = 'Que crack'
        return message
    } else if (MMR.items[1].elo >= 1100 && MMR.items[1].elo < 1500){
        const message = 'Vas por buen camino'
        return message
    } else {
        const message = 'Manco'
        return message
    }

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
        <h1>Place a valid Ronin Address</h1>:
          <div> 
            <h1 className="MMR1" >{MMR.items[1].name}</h1>
            <h1 className="MMR2">{MMR.items[1].elo} MMR</h1>
            <h1 className="MMR1">{message()}</h1>
          </div>
      }
    </div>
  );
}