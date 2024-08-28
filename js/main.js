


// active class

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.navbar-nav .nav-link');
    links.forEach(link => {
        link.addEventListener('click', function () {
            links.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// button to move top



function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTopBtn").style.display = "block";
    } else {
        document.getElementById("backToTopBtn").style.display = "none";
    }
}
function scrollToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}
window.onscroll = function () {
    scrollFunction();
};



// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

function scrollToSection(elements) {
    elements.forEach(ele => {
        ele.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.currentTarget.dataset.section).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

scrollToSection(allBullets);

// contact us

function sendMessage() {
    let name=document.getElementById('Name').value;
    let phone=document.getElementById('Phone').value;
    let Email=document.getElementById('Email').value;
    let subject=document.getElementById('subject').value;
    let message=document.getElementById('Message').value;

    const data = {
        name: name,
        phone: phone,
        Email: Email,
        subject:subject,
        message:message,
    };
    axios.post('https://inmaa.vercel.app/message/addMessage', data)
        .then(response => {
            console.log('Message sent successfully:', response.data);
            if(response.data.message=="Message Sent successfully"){
                alert('لقد تم إرسال رسالتك بنجاح..انتظر لحين التواصل معك')
            
            }
            else{
                alert('حدث خطأ أثنار إرسال رسالتك يرجي إعادة المحاولة')
            }
    })
    .catch(error => {
        console.error('Error sending message:', error);
    });
}






