const serviceID = 'service_xyz123'; 
const templateID = 'template_abc456'; 
const publicKey = 'user_def789'; 

if (typeof emailjs !== 'undefined') {
    emailjs.init(publicKey);
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
            to_email: 'std_251152@suffa.edu.pk'
        };
        
        emailjs.send(serviceID, templateID, templateParams)
            .then(function(response) {
                alert('Message sent successfully!');
                contactForm.reset();
            }, function(error) {
                alert('Failed to send message. Please try again.');
                console.error('EmailJS error:', error);
            });
    });
}

const reviews = document.querySelectorAll('.review');
if (reviews.length > 0) {
    let currentReview = 0;
    
    function showReview(index) {
        reviews.forEach(review => review.classList.remove('active'));
        reviews[index].classList.add('active');
    }
    
    document.getElementById('nextBtn').addEventListener('click', () => {
        currentReview = (currentReview + 1) % reviews.length;
        showReview(currentReview);
    });
    
    document.getElementById('prevBtn').addEventListener('click', () => {
        currentReview = (currentReview - 1 + reviews.length) % reviews.length;
        showReview(currentReview);
    });
}

function addToCart(product) {
    alert(`${product} added to cart!`);
}