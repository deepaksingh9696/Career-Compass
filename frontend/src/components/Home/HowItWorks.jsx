import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How Career Compass Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
                
                Research different job portals to find the one that
                 best suits your industry, location, and job search preferences.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
              Use the search feature to find jobs that match your skills, experience, and interests. Use filters like job title, location, industry, salary range, 
              and employment type (full-time, part-time, freelance, etc.) to narrow down your search
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
              Pay attention to specific instructions provided in the job listing. Some employers may ask for a specific
               format for your documents or request additional information like a portfolio or references.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;