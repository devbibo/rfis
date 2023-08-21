document.addEventListener("DOMContentLoaded", () => {
    const uploadInput = document.getElementById("upload");
    const board = document.getElementById("board");
  
    uploadInput.addEventListener("change", handleImageUpload);
  
    function handleImageUpload(event) {
      const files = event.target.files;
  
      // Loop through each uploaded file
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
  
        reader.onload = function (e) {
          const imageUrl = e.target.result;
          const image = document.createElement("img");
          image.src = imageUrl;
          image.classList.add("image");
  
          // Create a container for the image and caption
          const imageContainer = document.createElement("div");
          imageContainer.classList.add("image-container");
  
          // Append the image to the container
          imageContainer.appendChild(image);
  
          // Calculate and display the aspect ratio as a caption
          const aspectRatio = getAspectRatio(image.naturalWidth, image.naturalHeight);
          const imageCaption = document.createElement("div");
          imageCaption.classList.add("image-caption");
          imageCaption.textContent = aspectRatio;
          imageContainer.appendChild(imageCaption);
  
          // Append the container to the board
          board.appendChild(imageContainer);
        };
  
        reader.readAsDataURL(file);
      }
    }
  
    function getAspectRatio(width, height) {
      const gcd = calculateGCD(width, height);
      const aspectRatio = `${width / gcd}x${height / gcd}`;
      return aspectRatio;
    }
  
    function calculateGCD(a, b) {
      return b === 0 ? a : calculateGCD(b, a % b);
    }
  });