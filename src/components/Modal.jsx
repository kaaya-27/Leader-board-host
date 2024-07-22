import React, { useState } from 'react'
import "./Modal.css";

export const Modal = ({ closemodal, onSubmit }) =>{
    const [formState, setFormState] = useState(
        {
          id: "",
          name: "",
          time: "",
        }
      );

    const [errors, setErrors] = useState("");

    const validateForm = () => {
        if (formState.id && formState.name && formState.time) {
            setErrors("");
            return true;
          } else {
            let errorFields = [];
            for (const [key, value] of Object.entries(formState)) {
              if (!value) {
                errorFields.push(key);
              }
            }
            setErrors(errorFields.join(", "));
            return false;
          }
    }

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
      };  

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        onSubmit(formState);
        setFormState({ id: "", name: "", time: "" }); 
      };
    

    return (
        <div 
         className='modal-container' 
         onClick ={(e) => {
            if(e.target.className === "modal-container")closemodal();
        }}
        >
            <div className='modal'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="id">Id</label>
                        <input name='id' value={formState.id} onChange={handleChange }/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="name">Name</label>
                        <input name='name' value={formState.name} onChange={handleChange }/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="time">Time</label>
                        <input name='time' value={formState.time} onChange={handleChange }/>
                    </div>
                    {errors && <div className="error">{`Please include: ${errors}`}</div>}
                    <button type='submit'className='btn'>Submit</button>
                </form>
            </div>
        </div>
    );
};