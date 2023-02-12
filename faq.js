const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.getElementsByClassName('accordian_body');
const faqs = [];

function showFaq(ele) {
  setTimeout(function(){
    ele.classList.toggle('hidden')
  },200)
  
}

function createFaq() {
  for(i of faqData){
    const faq = document.createElement('div')
    faq.className = 'faq';

    const faqHeader = document.createElement('div')    
    faqHeader.className = 'faq_header';

    const h3 = document.createElement('h3')
    const heading = document.createTextNode(i.question)
    h3.appendChild(heading)

    const button = document.createElement('button')
    button.className = 'show_btn'
    button.id = 'faq_'+i.id;
    const plus = document.createTextNode('+')
    button.appendChild(plus)

    const p = document.createElement('p')
    const pText = document.createTextNode(i.answer)
    p.appendChild(pText)
    p.className = 'hidden'
    p.setAttribute('data-faq','faq_'+i.id) 

    accordianBody[0].appendChild(faq)
    faq.appendChild(faqHeader)
    faqHeader.appendChild(h3)
    faqHeader.appendChild(button)
    faq.appendChild(faqHeader)
    faq.appendChild(p)

    button.addEventListener('click',btnStatusUpdate)
  }
}

function btnStatusUpdate(e) {
  e.preventDefault()
  const selector = this.id
  this.innerText = this.innerText == '+' ? '-' : '+';
  let selectedP = document.querySelectorAll(`p[data-faq=${selector}]`)[0]
  showFaq(selectedP)
}

createFaq();
