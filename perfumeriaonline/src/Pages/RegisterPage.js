import React from "react";
import {useForm} from "react-hook-form";

function RegisterPage(){    
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = (data)=>{
        console.log("Form", data);
    };
    return(
        <>
            <div className="main-container">                
                Estoy en el Registro
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Nombre</label>
                        <input type="text" {...register("nombre", { required: true })} />
                        {errors.nombre && <span>* El nombre es obligatorio</span>}
                    </div>
                    <div>
                        <label>Apellido</label>
                        <input type="text" {...register("apellido", { required: true })} />
                        {errors.apellido && <span>* El campo apellido es obligatorio</span>}
                    </div>
                    <div>
                        <label>Nacionalidad</label>
                        <select {...register("nacionalidad")}>
                            <option value="argentino">Argentino</option>
                            <option value="uruguayo">Uruguayo</option>
                            <option value="otro">otro</option>
                        </select>
                    </div>
                    <div>
                        <label>Telefono</label>
                        <input type="text" {...register("telefono")} />                        
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" {...register("email", { required: true })} />
                        {errors.email && <span>* El campo email es obligatorio</span>}
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" {...register("password", { required: true })} />
                        {errors.password && <span>* El campo password es obligatorio</span>}
                    </div>
                    <button type="submit">Registrarme</button>
                </form>
            </div>
        </>
    );
}

export default RegisterPage;