import React from 'react';
import { useForm } from 'react-hook-form';
import './SignupForm.css';

const SignupForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>이름</label>
        <input type="text" {...register('name', { required: true })} />
        {errors.name && <span>이름을 입력해주세요.</span>}
      </div>

      <div>
        <label>전화번호</label>
        <input type="tel" {...register('phoneNumber', { required: true })} />
        {errors.phoneNumber && <span>전화번호를 입력해주세요.</span>}
      </div>

      <div>
        <label>비밀번호</label>
        <input type="password" {...register('password', { required: true })} />
        {errors.password && <span>비밀번호를 입력해주세요.</span>}
      </div>

      <div>
        <label>비밀번호 확인</label>
        <input type="password" {...register('passwordConfirm', { required: true })} />
        {errors.passwordConfirm && <span>비밀번호를 확인해주세요.</span>}
      </div>

      <button type="submit">회원가입</button>
    </form>
  );
};

export default SignupForm;