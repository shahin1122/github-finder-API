// Init github
const github = new Github;


// init UI class
const ui = new UI;


const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup' , (e)=>{
    const userText = e.target.value;
    if(userText !== ''){
        // make http call
        github.getUser(userText)
        .then(data=>{
            if(data.profile.message === 'Not Found'){
                //Show an alert
                ui.showAlert('Not Found' , 'alert alert-danger');
            }else{
                //Show Profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);

            }
        })
    }else{
        //Clear the profile

        ui.clearProfile();
       

    }
});