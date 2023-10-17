

const handleButtonClick = () => {
  // Add your logic here to handle the button click event
  alert("Button clicked!");
};
const GlobalLayout = () => {
    return (
      <div>
        <h1>Your Page Title</h1>
        <div>
          {/* Add buttons or other header elements */}
          <button onClick={() => handleButtonClick()}>Button</button>
        </div>
      </div>
    );
};

export default GlobalLayout;

