const main = document.querySelector(`main`)
const playerList = document.createElement(`ul`);
main.appendChild(playerList)
let playerInfo;
// call the API to get our puppies and their info
const getPlayers = async() => {
  const result = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2406-FTB-ET-WEB-FT/players`)
  playerInfo = await result.json();
// ({ players } = playerInfo.data) destructure to access data
console.log(players)
  players.forEach((player)=> {
    const puppy = document.createElement(`li`);
    playerList.appendChild(puppy);
    puppy.innerText = `${player.name}`
  })
}
getPlayers();

const displayPlayerDetails = (player)=>{
player.forEach(detail => {
  const detailDropDown = document.createElement(`li`);
})
}
