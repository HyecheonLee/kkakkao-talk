import React, {useRef, useState} from 'react';
import {Link} from "react-router-dom";
import "./registerPage.css";
import {useForm} from "react-hook-form";
import firebase from "../../firebase";
import md5 from "md5";

const RegisterPage = () => {
  const {
    register, handleSubmit, watch, formState: {errors}
  } = useForm({mode: "onChange"});
  const [errorFromSubmit, setErrorFromSubmit] = useState('');
  const [loading, setLoading] = useState(false);

  const password = useRef();
  password.current = watch("password");

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const createUser = await firebase.auth()
        .createUserWithEmailAndPassword(data.email, data.password);
      setLoading(false);
      console.log('createUser', createUser)

      await createUser.user.updateProfile({
        photoURL: `http://gravatar.com/avatar/${md5(createUser.user.email)}?d=identicon`
      });
      firebase.database().ref('users').child(createUser.user.uid)
        .set({
          email: createUser.user.email,
          image: createUser.user.photoURL
        });

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
        <h3>회원가입</h3>
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

        <label>비밀번호 확인</label>
        <input name="password_confirm"
               type={"password"} {...register("password_confirm",
          {required: true, validate: value => value === password.current})}/>
        {errors.password_confirm && <p>비밀번호가 다릅니다.</p>}
        {errorFromSubmit && <p>{errorFromSubmit}</p>}
        <input type="submit" disabled={loading}/>
      </form>
      <Link to={"/login"}>이미 아이디가 있다면</Link>
    </div>
  );
};

export default RegisterPage;
