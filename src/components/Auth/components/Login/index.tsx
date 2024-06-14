import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import hidePasswordSvg from "@public/icons/eyes/hide_password.svg";
import showPasswordSvg from "@public/icons/eyes/show_password.svg";
import authApi from '@components/Auth/components/auth.api';
import useUser from '@components/User/hooks/useUser';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {setUser} = useUser()
  const schema = yup.object().shape({
    email: yup.string().email('Введите валидную почту').required('Обязательное поле'),
    password: yup.string().required('Обязательное поле')
  });

  type FormData = yup.InferType<typeof schema>;

  const { register, handleSubmit, formState: { errors, dirtyFields },setError } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const navigate = useNavigate()

   const handleLogin = async (formValue: { email: string; password: string }) => {
    // sending
     authApi.handleLogin(formValue.email,formValue.password).then((r)=>{
      if(r.status === 'success'){
        setUser(r.body.user)
        navigate('/')
      }
      else {
        setError('email',{
          type:'server',
          message:r.message
        })
        setError('password',{
          type:'server'
        })
      }
     })

  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="text-center mb-12 font-semibold text-3xl">Вход</div>
        <label className={`block mb-16 relative ${errors.email ? "text-bt_danger" : ""}`}>
          <input
            {...register("email")}
            type="text"
            placeholder="Почта от ЛК УрФУ"
            className={`block w-full h-14 p-4 font-light text-lg bg-pnl_fourth border border-pnl_secondary rounded-md placeholder-pnl_secondary ${errors.email ? "border-bt_danger placeholder-bt_danger" : ""}`}
          />
          {(
            <p className="absolute  left-1 text-bt_danger font-normal text-lg leading-5">
              {errors.email?.message}
            </p>
          )}
        </label>
        <label className={`block mb-16 relative ${errors.password ? "text-bt_danger" : ""}`}>
          <input
            type={showPassword ? "text" : "password"}
            {...register("password")}
            placeholder="Пароль"
            autoComplete="off"
            className={`block w-full h-14 p-4 font-light text-lg bg-pnl_fourth border border-pnl_secondary rounded-md placeholder-pnl_secondary ${errors.password ? "border-bt_danger placeholder-bt_danger" : ""}`}
          />
          <img
            alt={showPassword ? "Hide password" : "Show password"}
            src={showPassword ? hidePasswordSvg : showPasswordSvg}
            onClick={() => setShowPassword(prevState => !prevState)}
            className="absolute right-4 top-4 cursor-pointer"
          />
          <p className="absolute bottom-[-1.2rem] left-1 text-bt_danger font-normal text-lg leading-5">
            {errors.password?.message || (
              <Link to="/auth/recovery/search-email" className="text-txt_secondary hover:text-blue-600">
                Забыли пароль?
              </Link>
            )}
          </p>
        </label>
        <button
          type="submit"
          className="w-full bg-bt_secondary hover:bg-bt_secondary_hover active:bg-bt_secondary_pressed rounded-md flex items-center justify-center font-semibold text-2xl h-14 my-14 transition-colors duration-300"
        >
          Войти
        </button>
      </form>
      {/*<Link to="/auth/register" className="block font-light text-center text-lg text-bt_secondary hover:text-txt_main transition-colors duration-300">*/}
      {/*  Регистрация*/}
      {/*</Link>*/}
    </div>
  );
};

export default Login;
