async function messages() {
    let res = await axios.get("https://inmaa.vercel.app/message");
    console.log(res.data.messages);
    let placeholder = document.querySelector("#data");
    let out = "";
    for (let users of res.data.messages) {
      out += `
                  <tr>
                  <td>${users.name}</td>
                  <td>${users.phone}</td>
                  <td>${users.subject}</td>
                  <td>${users.message}</td>
                
    
                  </tr>
                  `;
    }
    placeholder.innerHTML = out;
  }
  window.onload = function() {
    messages()
  };
  