import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import type { ReqResUserListResponse, Datum} from '../interfaces';

const loadUsers = async(page: number = 1): Promise<Datum[]> => {
    try{
    const {data} = await axios.get<ReqResUserListResponse>('https://reqres.in/api/users', {
        params: {
            page: page
        }
    });
        return data.data;
    } catch (error){
        console.log(error);
        return[];

    }
    
}

export const useUsers = () => {

    const [users, setUsers] = useState<Datum[]>([])

    const currentPageRef = useRef(1);


    useEffect(() => {

        loadUsers(currentPageRef.current)
        .then(setUsers)
        
        // fetch('https://reqres.in/api/users?page=2')
        // .then(resp => resp.json())
        // .then(data => console.log(data))
    }, [])

    const prevPage = async() => {
        if(currentPageRef.current < 1) return;
        currentPageRef.current--;
        const users = await loadUsers(currentPageRef.current);
        setUsers(users);
    }

    const nextPage = async() => {        
        currentPageRef.current++;
        const users = await loadUsers(currentPageRef.current);
        if(users.length > 0){
            setUsers(users);
        } else {
            currentPageRef.current--;
        }
    }

    return {
        nextPage,
        prevPage,
        users
    }
}




interface Props {
    user: Datum;
}

export const UserRow = ({user}: Props) => {

    const { avatar, first_name, last_name, email} = user;
    return (
        <tr key={user.id}>
                <td><img style={{width: '50px'}} src={avatar} alt="user avatar" /></td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
    )
}
