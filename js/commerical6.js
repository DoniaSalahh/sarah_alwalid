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

    const existingData = JSON.parse(sessionStorage.getItem("ownerFormData")) || {};
    // const updatedData = { ...existingData, ...data };
    // sessionStorage.setItem("ownerFormData", JSON.stringify(updatedData));
    // console.log(updatedData);

    // storeData(); // Call storeData function after storing the form data
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

  if (storedData) {
    const data = JSON.parse(storedData);
    const formData = new FormData();

    const owner = document.getElementById("owner").files;
    const client = document.getElementById("client").files;
    const sak = document.getElementById("sak").files;
    const commercialImage = document.getElementById("commercialImage").files;
    const agency = document.getElementById("agency").files;
    const agent = document.getElementById("agent").files;

    const fileGroups = [
      { name: "owner", files: owner },
      { name: "client", files: client },
      { name: "sak", files: sak },
      { name: "commercialImage", files: commercialImage },
      { name: "agency", files: agency },
      { name: "agent", files: agent },
    ];

    for (const group of fileGroups) {
      if (group.files.length === 0) {
        alert(`Please upload all required images: ${group.name}`);
        return;
      }
      for (let i = 0; i < group.files.length; i++) {
        let fileName = group.files[i].name.toLowerCase();
        let fileExtension = fileName.split(".").pop();
        formData.append(group.name, group.files[i]);
      }
    }

    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }

    try {
      const response = await axios.post(
        "https://inmaa.vercel.app/commercial/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data)
      if (response.data.message === "Data Added Successfully") {
        window.location.href = 'commerical7.html';
        console.log(response.data);
      } else {
        alert('حدث خطأ أثناء رفع البيانات يرجي إعادة المحاولة');
      }
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
