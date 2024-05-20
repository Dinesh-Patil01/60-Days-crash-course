import React, { useRef, useState } from 'react';

const DynamicForm = () => {
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const ageRef = useRef(null);

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    age: ''
  });

  const handleFocus = (ref) => {
    ref.current.focus();
  };

  const validateInput = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        if (value.length < 3) {
          error = 'Name must be at least 3 characters long';
        }
        break;
      case 'email':
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
          error = 'Invalid email address';
        }
        break;
      case 'age':
        if (!Number.isInteger(Number(value)) || value <= 0) {
          error = 'Age must be a positive number';
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = validateInput(name, value);
    setErrors({
      ...errors,
      [name]: error
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {};
    for (let [key, value] of formData.entries()) {
      const error = validateInput(key, value);
      if (error) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [key]: error
        }));
        return;
      }
      data[key] = value;
    }
    // Custom processing or form submission logic
    console.log('Form data:', data);
    alert('Form submitted successfully!');
  };

  return (
    <div>
      <h2>Dynamic Form</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              ref={nameRef}
              type="text"
              name="name"
              onChange={handleChange}
              onClick={() => handleFocus(nameRef)}
            />
          </label>
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
        </div>
        <div>
          <label>
            Email:
            <input
              ref={emailRef}
              type="email"
              name="email"
              onChange={handleChange}
              onClick={() => handleFocus(emailRef)}
            />
          </label>
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>
        <div>
          <label>
            Age:
            <input
              ref={ageRef}
              type="number"
              name="age"
              onChange={handleChange}
              onClick={() => handleFocus(ageRef)}
            />
          </label>
          {errors.age && <span style={{ color: 'red' }}>{errors.age}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DynamicForm;
