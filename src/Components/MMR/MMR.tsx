import React, { useState }from "react";

function MMR() {

  const [MMR, setMMR] = useState<any>()
  const [roninaddress, setRonin] = useState<string>('')
  const [Info, setInfo] = useState<boolean>(false)

  function getMMR(event: any){
    event.preventDefault()
    const URL = 'https://game-api.axie.technology/mmr/'
    const ronin = URL + roninaddress
    fetch(ronin)
      .then(response => response.json())
      .then(response => {
        setMMR(response[0].items[1])
        setInfo(true)
      })
  }

  function changeRonin(event: any){
    const {value} = event.target
    setRonin(value)
  }

  function message(){
    const message = ''
    if(MMR.elo >= 1500){
        const message = 'Que crack'
        return message
    } else if (MMR.elo >= 1100 && MMR.elo < 1500){
        const message = 'Vas por buen camino'
        return message
    } else {
        const message = 'Manco'
        return message
    }

}

  return (
    <div>
      <form onSubmit={getMMR}>
        <input
          className='box'
          type='text'
          name='roninaddress'
          placeholder='Enter Ronin address'
          value={roninaddress}
          onChange={changeRonin}
        />
        <button>Get MMR</button>
      </form>
      <h1>{roninaddress}</h1>
      {Info === false ? null :
      <div> 
        <h1>{MMR.name}</h1>
        <h1>{MMR.elo} MMR</h1>
        <h1>{message()}</h1>
      </div>}
    </div>
  );
}

export default MMR