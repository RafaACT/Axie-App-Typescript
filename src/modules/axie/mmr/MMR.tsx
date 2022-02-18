import React, { useState }from "react";
import FetchData from "../../../api/Api";
import './MMR.css'

function MMR() {

  const [MMR, setMMR] = useState<string[] | any>()
  const [roninaddress, setRonin] = useState<string>('')
  const [Info, setInfo] = useState<boolean>(false)

  function getMMR(event: any){
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

  function changeRonin(event: any){
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
          onChange={changeRonin}
        />
        <button onClick={getMMR}>Get MMR</button>
      <h1>{roninaddress}</h1>
      {Info === false ? null :
      <div> 
        <h1 className="MMR1" >{MMR.items[1].name}</h1>
        <h1 className="MMR2">{MMR.items[1].elo} MMR</h1>
        <h1 className="MMR1">{message()}</h1>
      </div>
      }
    </div>
  );
}

export default MMR