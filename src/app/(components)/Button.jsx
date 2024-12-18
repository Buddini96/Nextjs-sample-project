'use client'

function Button() {

    const handleClick = () => {
      alert("Hellooooooooo");
    };

  return (
    <button onClick={handleClick} 
    style={{ padding: "10px" }}>
      Click here
    </button>
  );
}

export default Button
