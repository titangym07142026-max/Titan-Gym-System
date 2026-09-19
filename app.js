const GOOGLE_SCRIPT_URL="https://script.google.com/macros/s/AKfycbwmsgEQ_xOtnzWX3O5rnJERaJNg5mrenDteDQIMZ79uboSwGfxcYlTnZWJt_Q3KQbAa/exec";

function testConnection(){
fetch(GOOGLE_SCRIPT_URL)
.then(()=>{
document.getElementById("status").innerHTML="Titan Gym Google Sheet Connected ✅";
})
.catch(()=>{
document.getElementById("status").innerHTML="Connection Error";
});
}
