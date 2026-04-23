import React from "react";
import "./Notice.css";

const Notice = () => {
  return (
    <div className="notice-container">
      <div className="notice-header">
        <h1 className="notice-title">Final Inductees 2K25 Batch</h1>
      </div>

      <div className="notice-grid">
        <div className="notice-card">
          <h2 className="branch-title">MME</h2>
          <ul className="branch-list">
            <li>Yogesh Mandal – 2025UGMM023</li>
            <li>Trisha Deogharia – 2025UGMM026</li>
            <li>Pratyush Verma – 2025UGMM028</li>
            <li>Priyanshu Kumar Varun – 2025UGMM034</li>
            <li>Yash Raj – 2025UGMM036</li>
            <li>Kanika Gupta – 2025UGMM052</li>
            <li>Ayman Ejaz – 2025UGMM055</li>
            <li>Ankush Kumar – 2025UGMM060</li>
            <li>Karan Saharan – 2025UGMM068</li>
            <li>Allama Alim – 2025UGMM083</li>
            <li>Nitin Sharma – 2025UGMM092</li>
            <li>Sonu Jaiswal – 2025UGMM093</li>
          </ul>
        </div>

        <div className="notice-card">
          <h2 className="branch-title">ELECTRICAL</h2>
          <ul className="branch-list">
            <li>Ashutosh Singh Munda – 2025UGEE028</li>
            <li>Suryadeep Nashkar – 2025UGEE047</li>
            <li>Karan Kumar Das – 2025UGEE050</li>
            <li>Atul Prakash – 2025UGEE079</li>
            <li>Manish Patel – 2025UGEE088</li>
            <li>Shreya Kumari – 2025UGEE103</li>
            <li>Yash Raj – 2025UGEE105</li>
          </ul>
        </div>

        <div className="notice-card">
          <h2 className="branch-title">MECHANICAL</h2>
          <ul className="branch-list">
            <li>Raj Shri – 2025UGME023</li>
            <li>K Narendra Reddy – 2025UGME066</li>
            <li>Prasanth Kanchu – 2025UGME084</li>
            <li>B Chandra Sekhar – 2025UGME093</li>
          </ul>
        </div>

        <div className="notice-card">
          <h2 className="branch-title">PIE</h2>
          <ul className="branch-list">
            <li>Ankur Rathour – 2025UGPI029</li>
            <li>P Kausthub Reddy – 2025UGPI060</li>
          </ul>
        </div>

        <div className="notice-card">
          <h2 className="branch-title">CIVIL</h2>
          <ul className="branch-list">
            <li>Nishant Kr Manjhi – 2025UGCE071</li>
            <li>Shivam Kumar – 2025UGCE087</li>
          </ul>
        </div>

      </div>


      <div className="notice-footer">
        <h2 className="welcome-message">Welcome To Revanta Family!</h2>
      </div>
    </div>
  );
};

export default Notice;