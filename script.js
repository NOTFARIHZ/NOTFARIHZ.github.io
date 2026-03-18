document.addEventListener("DOMContentLoaded", () => {

  // This is a "Classic" script - no modules, no imports
  console.log("Classic JS is running!");
  
  let count = 0;
  // We'll create a new element just to test
  const testDiv = document.createElement('div');
  testDiv.style.position = 'fixed';
  testDiv.style.top = '0';
  testDiv.style.background = 'red';
  testDiv.innerText = "JS IS ALIVE";
  document.body.appendChild(testDiv);

  setInterval(() => {
    count++;
    testDiv.innerText = "Seconds: " + count;
  }, 1000);

});
