import React from 'react'
import {useForm} from 'react-hook-form';

type formInputs = {
    email: string;
    password: string;
}

export const FormsPage = () => {

    
    const {register, handleSubmit, formState, watch} = useForm<formInputs>({
        defaultValues: {
            email: 'ivan.rosero@outlook.com',
            password: 'ABC123'
        }
    });

    const onSubmit = (myForm:formInputs) => {
        console.log(myForm)
    }

    console.log(watch('email'))
    
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Formularios</h3>
        <div style={{ display: 'flex', flexDirection: 'column'}}></div>
        <input type="text" placeholder='email' {...register('email', {required: true})} />
        <input type="text" placeholder='password' {...register('password')}/>
        <button type="submit"> Ingresar</button>
    </form>

    <pre>
        {JSON.stringify(formState, null, 2)}
    </pre>
    </>
  )
}
