import Friends from "./friends.json"
import './FriendList.css';

export const FriendList = () => {
    return (
        <ul className="friend-list">
            {Friends.map(({ avatar , name , isOnline , id }) => (
                <li className="item" key={id}>
                <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
                <img className="avatar" src={avatar} alt="User avatar" width="48" />
                <p className="name">{name}</p>
              </li>

            ))} 
        </ul>
    )
}


// [
//     {
//       "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
//       "name": "Mango",
//       "isOnline": true,
//       "id": 1812
//     },
//     {
//       "avatar": "https://cdn-icons-png.flaticon.com/512/616/616438.png",
//       "name": "Kiwi",
//       "isOnline": false,
//       "id": 1137
//     },
//     {
//       "avatar": "https://cdn-icons-png.flaticon.com/512/1623/1623681.png",
//       "name": "Ajax",
//       "isOnline": true,
//       "id": 1213
//     },
//     {
//       "avatar": "https://cdn-icons-png.flaticon.com/512/2977/2977285.png",
//       "name": "Jay",
//       "isOnline": true,
//       "id": 1714
//     },
//     {
//       "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998749.png",
//       "name": "Poly",
//       "isOnline": false,
//       "id": 1284
//     }
//   ]
  