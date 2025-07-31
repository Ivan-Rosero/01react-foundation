import React from 'react'

interface Person {

    firstName: string;
    lastName: string;
    age: number;
    address: Address;
    isAlive?: boolean;    
};

interface Address {
        country: string;
        houseNo: number;
}

export const ObjectLiterals = () => {

    const person:Person = {
        firstName: 'Iván',
        lastName: 'Rosero',
        age: 32,
        address: {
            country: 'Colombia',
            houseNo: 1624
        }
    }

  return (
    <>
    <h3>Objetos Literales</h3>
    <pre>
     {JSON.stringify( person, null, 2) }
    </pre>
    </>
  )
}
