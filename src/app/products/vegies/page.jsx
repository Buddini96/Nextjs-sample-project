import Link from 'next/link';
import React from 'react'

function page() {
  const vegies = [
    {
      id: 1,
      veginame: "Carrot",
    },
    {
      id: 2,
      veginame: "Tomato",
    },
    {
      id: 3,
      veginame: "Cucumber",
    },
    {
      id: 4,
      veginame: "Spinach",
    },
    {
      id: 5,
      veginame: "Potato",
    },
  ];
  return (
    <>
      <div>Vegie page</div>
      <ul>
        {vegies.map((vegi) => (
          <li>
            <Link href={`/products/vegies/${vegi.veginame}`}>
              {vegi.veginame}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default page
