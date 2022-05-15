import React from "react";
import {useForm} from "react-hook-form";

function RegisterPage(){    
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = (data)=>{
        console.log("Form", data);
    };
    return(
        <>
            <div className="main-container-full">                
                <h1 className="subheader">Registro de Usuario</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="mid-form form-register">
                    <div className="form-group">
                        <label>Nombre</label>
                        <input type="text" {...register("nombre", { required: true })} />
                        {errors.nombre && <span>* El nombre es obligatorio</span>}
                    </div>
                    <div className="form-group">
                        <label>Apellido</label>
                        <input type="text" {...register("apellido", { required: true })} />
                        {errors.apellido && <span>* El campo apellido es obligatorio</span>}
                    </div>
                    <div className="form-group">
                        <label>Nacionalidad</label>
                        <select {...register("nacionalidad")}>
                            <option value="argentino">Argentino</option>
                            <option value="uruguayo">Uruguayo</option>
                            <option value="otro">otro</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Telefono</label>
                        <input type="text" {...register("telefono")} />                        
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" {...register("email", { required: true })} />
                        {errors.email && <span>* El campo email es obligatorio</span>}
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" {...register("password", { required: true })} />
                        {errors.password && <span>* El campo password es obligatorio</span>}
                    </div>
                    <button type="submit" className="btn btn-success">Registrarme</button>
                </form>
            </div>
        </>
    );
}

export default RegisterPage;