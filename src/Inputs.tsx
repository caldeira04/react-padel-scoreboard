export default function Inputs(
  name: {
    double1: {
      player1: string,
      player2: string
    },
    double2: {
      player1: string,
      player2: string
    }
  }
) {


  return (

    <form>
      <p>Dupla 1</p>
      <input type="text" value={name.double1.player1} placeholder="Jogador 1" />
      <input type="text" value={name.double1.player2} placeholder="Jogador 2" />
      <p>Dupla 2</p>
      <input type="text" value={name.double2.player1} placeholder="Jogador 1" />
      <input type="text" value={name.double2.player2} placeholder="Jogador 2" />
    </form>
  )
}
