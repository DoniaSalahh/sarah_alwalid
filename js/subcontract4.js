document
  .getElementById("ownerForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const form = document.getElementById("ownerForm");
    const formData = new FormData(form);
    const data = {};
    const allowedFileTypes = ["image/jpeg", "image/png", "application/pdf"];
    for (let [key, value] of formData.entries()) {
      if (value instanceof File) {
        if (!allowedFileTypes.includes(value.type)) {
          alert("Only image files (jpeg, png) or PDFs are allowed.");
          return;
        }
        data[key] = await readFileAsDataURL(value);
      } else {
        data[key] = value;
      }
    }
    const existingData =
      JSON.parse(sessionStorage.getItem("ownerFormData")) || {};
    /*  const updatedData = { ...existingData, ...data };
    sessionStorage.setItem("ownerFormData", JSON.stringify(updatedData));
    console.log(updatedData); */
  });

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}

async function storeData() {
  let storedData = sessionStorage.getItem("ownerFormData");
  let owner = document.getElementById("owner").files;
  let client = document.getElementById("client").files;

  let agent = document.getElementById("agent").files;

  if (storedData) {
    const data = JSON.parse(storedData);
    const formData = new FormData();
    for (let i = 0; i < owner.length; i++) {
      let fileName = owner[i].name.toLowerCase();
      let fileExtension = fileName.split(".").pop();

      formData.append("owner", owner[i]);
    }
    for (let i = 0; i < client.length; i++) {
      let fileName = client[i].name.toLowerCase();
      let fileExtension = fileName.split(".").pop();

      formData.append("client", client[i]);
    }
  
    for (let i = 0; i < agent.length; i++) {
      let fileName = agent[i].name.toLowerCase();
      let fileExtension = fileName.split(".").pop();

      formData.append("agent", agent[i]);
    }

    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }

    try {
      const response = await axios.post(
        "https://inmaa.vercel.app/elbaten/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if(response.data.message==="Data Added Successfully"){
        alert("تم إرسال البيانات بنجاح!")
        window.location.href = 'subcontract5.html';
    }
    else{
        alert('حدث خطأ أثناء رفع البيانات يرجي إعادة المحاولة')
    }
      console.log("Data sent successfully:", response.data);
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response);
      } else if (error.request) {
        console.error("Error request:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    }
  } else {
    console.error("No data found in sessionStorage.");
  }
}
