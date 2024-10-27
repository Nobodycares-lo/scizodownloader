document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector(".input");
    input.addEventListener("keydown", handleInput);
    function handleInput(e) {
      // We only want the function to run if the key pressed is the Enter key
      if (e.key !== "Enter") return;
      const url = input.value;
      fetch('http://172.93.102.44:9000/', {
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
        const url2 = data.url.replace("localhost:", "172.93.102.44:")
        window.open(url2);
        
      })
  }})