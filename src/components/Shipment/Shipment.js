import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';

const Shipment = () => {
    const [LogedInUser, setLogedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example")); // watch input value by passing the name of it
  
    return (
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={LogedInUser.name} {...register("name", { required: true })} />
        {errors.name && <span>Name is field required</span>}
        <input defaultValue={LogedInUser.email} {...register("email", { required: true })} />
        {errors.email && <span>Email is field required</span>}
        <input {...register("address", { required: true })} />
        {errors.address && <span>Address field is required</span>}
        <input type="submit" />
      </form>
    );
};

export default Shipment;