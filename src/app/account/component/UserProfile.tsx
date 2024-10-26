// app/account/components/UserProfile.tsx
import React from 'react';

const UserProfile = () => {
  return (
    <div className="py-4">
      <h3 className="text-2xl font-bold text-black">Account Details</h3>
      <div className="login">
        <div className="login_form_container">
          <div className="account_login_form">
            <form action="#" className="mx-auto flex-1">
              <p className="mb-2 text-black">
                Already have an account?{' '}
                <a href="#" className="text-blue-500" data-bs-toggle="modal" data-bs-target="#loginActive">
                  Log in instead!
                </a>
              </p>
              <div className="input-radio mb-1">
                <span className="custom-radio py-1 text-black">
                  <input type="radio" value="1" name="id_gender" /> Mr.
                </span>
                <span className="custom-radio ml-4 py-1 text-black">
                  <input type="radio" value="2" name="id_gender" /> Mrs.
                </span>
              </div>
              <div className="default-form-box mb-1 py-1">
                <label className="text-black">First Name</label>
                <input type="text" name="first-name" className="border p-2 w-full" />
              </div>
              <div className="default-form-box mb-1 py-1">
                <label className="text-black">Last Name</label>
                <input type="text" name="last-name" className="border p-2 w-full" />
              </div>
              <div className="default-form-box mb-1 py-1">
                <label className="text-black">Email</label>
                <input type="text" name="email-name" className="border p-2 w-full" />
              </div>
              <div className="default-form-box mb-1 py-1">
                <label className="text-black">Password</label>
                <input type="password" name="user-password" className="border p-2 w-full" />
              </div>
              <div className="default-form-box mb-1 py-1">
                <label className="text-black">Birthdate</label>
                <input type="date" name="birthday" className="border p-2 w-full" />
              </div>
              <label className="checkbox-default mb-1 py-1" htmlFor="offer">
                <input type="checkbox" id="offer" />
                <span className="text-black"> Receive offers from our partners</span>
              </label>
              <br />
              <label className="checkbox-default mb-1 py-1" htmlFor="newsletter">
                <input type="checkbox" id="newsletter" />
                <span className="text-black"> Sign up for our newsletter
                  <br />
                  <em className='text-[#3B3B3B]'>You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.</em>
                </span>
              </label>
              <div className="save_button mt-3">
                <button className="btn bg-[#3B3B3B] text-white p-2 rounded hover:bg-blue-500" type="submit">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;