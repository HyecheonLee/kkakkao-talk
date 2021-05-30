import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import firebase from "firebase";

const LoginPage = () => {
  const {
    register, handleSubmit, formState: {errors}
  } = useForm({mode: "onChange"});
  const [errorFromSubmit, setErrorFromSubmit] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
      setLoading(false);
    } catch (e) {
      console.log(e.message)
      setErrorFromSubmit(e.message)
      setLoading(false)
      setTimeout(() => {
        setErrorFromSubmit('')
      }, 5000)
    }
  };
  return (
    <div>
      <div style={{textAlign: 'center'}}>
        <h3>로그인</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>이메일</label>
        <input name="email" type={"email"}
               {...register("email", {required: true})}/>
        {errors.email && <span>This field is required</span>}
        <label>비밀번호</label>
        <input name="password"
               type={"password"} {...register("password",
          {required: true, minLength: "6"})}/>
        {errors.password && errors.password.type === "required" &&
        <p>비밀번호는 필수 입니다.</p>}
        {errors.password && errors.password.type === "minLength" &&
        <p>비밀번호는 6글자 이상이 필요 합니다.</p>}
        {errorFromSubmit && <p>{errorFromSubmit}</p>}
        <input type="submit" disabled={loading}/>
      </form>
      <Link to={"/register"}>회원가입 하러 가기</Link>
    </div>
  );
};

export default LoginPage;
