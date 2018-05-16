import {Map} from 'immutable'
let board = Map();

//action types
const MOVE = 'MOVE';

//action creators
export const move = (turn, position) => {
  return {
    type: MOVE, // 'MOVE'
    turn: turn, // 'X'
    position: position, // [row, col]
  }
}

export const bad = () => {}

//reducer
export default function reducer(state = {turn: 'X', board: board}, action) {
  console.log('action pos', action.position)
  switch(action.type){
    case 'MOVE':
      let newTurn = action.turn === 'X' ? 'O' : 'X'
      let newBoard = state.board.setIn(action.position, action.turn)
      return {turn: newTurn, board: newBoard}
    default:
      return state
  }
}

// action = {
//   type: "MOVE",
//   position: [row, col],
//   player: 'X'
// }


// state = {
//   playerMove: 'X',
//   map: Map.setIn([0,0,0],[0,0,0],[0,0,0])
// }

