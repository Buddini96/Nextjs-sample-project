import React from 'react'

function page({params}) {
    console.log(params);
  return (
    <>
      <div>Catch All routes</div>
      <ul>
        {params.dpath.map((item) => (
            <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default page