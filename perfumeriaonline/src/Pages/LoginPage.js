import React from "react";
import {useForm} from "react-hook-form";

function LoginPage(){    
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        console.log("Logeo al usuario: ", data);
    };

    return(
        <>
            <div className="main-container-full">                
                <h1 className="subheader">Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="mid-form">
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
                    <button type="submit" className="btn btn-success">Ingresar</button>
                </form>
            </div>
        </>
    );
}

export default LoginPage;