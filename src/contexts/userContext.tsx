import React from 'react'
import { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react";


export type User =  {
    name: string;
    email: string;
}

const defaultState = {
    user: {
        name: '',
        email: '',
    },
    setUser: (user: User) => {}
} as userContextInterface


export interface userContextInterface {
    user: User,
    setUser: Dispatch<SetStateAction<User>>
}

export const UserContext = createContext(defaultState)

type UserProviderProps = {
    children: ReactNode
}

export default function UserProvider({children}: UserProviderProps)
{
    const [user, setUser] =useState<User>({
        name: '',
        email: ''
    });

    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider >
    )
}