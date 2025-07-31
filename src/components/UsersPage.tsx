import { useEffect, useState, useRef } from 'react'
import type { Datum} from '../interfaces';
import { useUsers } from '../hooks/useUsers';
import { UserRow } from './UserRow';


export const UsersPage = () => {

    const { users, nextPage, prevPage} = useUsers(); 

    

    // const prevPage = async() => {
    //     if(currentPageRef.current < 1) return;
    //     currentPageRef.current--;
    //     const users = await loadUsers(currentPageRef.current);
    //     setUsers(users);
    // }

    // const nextPage = async() => {        
    //     currentPageRef.current++;
    //     const users = await loadUsers(currentPageRef.current);
    //     if(users.length > 0){
    //         setUsers(users);
    //     } else {
    //         currentPageRef.current--;
    //     }
    // }
  return (
    <>
    <h3>Usuarios:</h3>
    <table>
        <thead>
            <tr>
                <th>Avatar</th>
                <th>Nombre</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map(user => (
            <UserRow key={user.id} user={user}/>
                ))}
            
        </tbody>
    </table>

    <button onClick={prevPage}>Prev</button>

    <button onClick={nextPage}>Next</button>
    </>
  );
};




