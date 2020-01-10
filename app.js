//init class github

const github =new GitHub;

// init ui class
const ui=new UI;

// serach inpuh

const searchUser= document.getElementById("searchUser");
searchUser.addEventListener("keyup",(e)=>{

const userText=e.target.value;

if(userText !==""){

  github.getUser(userText)
  .then((data)=>{
   if(data.profile.message==="Not Found"){
     //show alert
   } else {
     //show profile
     ui.showProfile(data.profile);
   }
  })

} else{
  // clear profile
}


})