import React from 'react'

export const BasicTypes = () => {

  const name:string = 'Iván';
  const age:number = 32;
  const isActive:boolean = true;

  //const powers: string[] = ['React', 'ReactNative', 'Angular', 'Vue', 'Qwik'];
  
  return (
    <>
    <h3>
      Tipos basicos
    </h3>

    { name } { age } { isActive ? 'true' : 'false'}

    </>
  )
}
