// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorBanner=document.getElementById('modal')
const errorCode=document.getElementById('modal-message')
// Your JavaScript code goes here!

const postsHeart=document.querySelectorAll('.media-post .like-glyph')
for(const element of postsHeart){
  element.addEventListener('click',function(e){
    if(element.className==="activated-heart"){
      element.innerHTML = EMPTY_HEART
      element.className=""
    } else {
    mimicServerCall().then(function(e){
      console.log(e)
      if(e === "Pretend remote server notified of action!"){
        element.innerHTML = FULL_HEART
        element.className='activated-heart'
      }}).catch(function(error){
        errorBanner.className=""
        errorCode.innerText=error
        setTimeout(function(){
          errorBanner.className="hidden"
          errorCode.innerText=''
        }, 5000)
      })
    }
  })
  
}
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
