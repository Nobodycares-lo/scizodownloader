document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector(".input");
    input.addEventListener("keydown", handleInput);
    function handleInput(e) {
      // We only want the function to run if the key pressed is the Enter key
      if (e.key !== "Enter") return;
      const url = input.value;
      fetch('https://us2.cobalt.immortal2willlose.xyz', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({
            "url": url,
            "audioFormat": "mp3",
            "filenameStyle": "pretty"
          })
      }
    )
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        const url2 = data.url.replace("http://localhost:9000", "https://us2.cobalt.immortal2willlose.xyz")
        window.open(url2);
        
      })
  }})
