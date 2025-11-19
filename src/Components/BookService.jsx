import React, { useRef, useState } from "react";
import toast from 'react-hot-toast';
import 'animate.css';


const BookService = () => {
    const refForm = useRef("");
    const [error, setError] = useState('')
    const handleBookNow = (e) => {
        e.preventDefault();
        const name = refForm.current.name.value;
        setError('')
        if(name.length < 5){
          return setError('Name Min 5 characters required')
        }
        refForm.current.reset();
        toast.success('Book successful');
    }

  return (
    <div className="animate__animated animate__fadeInUp flex flex-col md:flex-row md:justify-between p-5 bg-blue-50 rounded-xl items-center">
      <div>
        <h1 className="text-4xl mb-5 md:mb-0 font-bold">Book Now Service...</h1>
      </div>
      <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div class="card-body">
          <form ref={refForm} onSubmit={handleBookNow}>
            <fieldset class="fieldset">
              <label class="label">Name</label>
              <input type="text" name="name" required class="input" placeholder="Name" />
              <label class="label">Email</label>
              <input type="email" name="email" required class="input" placeholder="Email" />
              {error && <p className="text-red-600">{error}</p>}
              <button class="btn btn-neutral mt-4">Book Now</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookService;
