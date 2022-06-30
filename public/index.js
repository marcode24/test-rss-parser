fetch("/json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const root = document.getElementById("root");
    root.innerHTML = data.description;
  })
  .catch(console.error);
