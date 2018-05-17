import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <textarea {...input} />
      <div className="red-text">
        {touched && error}
      </div>
    </div>
  );
};
