class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    // display profle
    showProfile(user){
        //  console.log(user);
         //Showing user on Profile
         this.profile.innerHTML = `
            <div class="card card-body mb-3">
            <div class="row">
            <div class="col-md-3">
                <img class="img-fluid mb-2" src="${user.avatar_url}" alt="">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
            </div>
            <div class="col-md-9">
                        
                        <span class="badge bg-primary">Public repos: ${user.public_repos}</span>
                        <span class="badge bg-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge bg-success">Followers: ${user.followers}</span>
                        <span class="badge bg-warning">Following: ${user.following}</span>
            
                        <br><br>
                        <ul class="list-group">
                        
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
    
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3"> Letest Repos </h3>
            <div id="repos"></div>
         
         `;
    }


    // show user repos 
    showRepos(repos) {
        console.log(repos)
        let output = '';
        repos.forEach(function(repo){
            output += `
            <div class="card card-bodymb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank" class="">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge bg-primary">Starts: ${repo.stargazers_count}</span>
                        <span class="badge bg-secondary">Watchars : ${repo.watchers_count}</span>
                        <span class="badge bg-success">Forks: ${repo.forms_count}</span>
                    </div>
                </div>
            </div>
            `
        }); 

        // Output of that repository 
         document.getElementById('repos').innerHTML = output ;  
    }
    

    // show alert message
    showAlert(message , className){
        this.clearAlert();
        const div = document.createElement('div');
        // added className
        div.className = className;
        div.appendChild(document.createTextNode(message))
        // get parent
        const container = document.querySelector('.searchContainer');

        const search = document.querySelector('.search');
        // insert alert
        container.insertBefore(div, search); 

        // timeOut after 3 seconds
        setTimeout(()=>{
            this.clearAlert();
        } , 3000);
    }


    // clear alert message
    clearAlert(){
        const currentalert = document.querySelector('.alert');

        if(currentalert){
            currentalert.remove();
        }

    }

    // show clear message
    clearProfile(){
        this.profile.innerHTML = '';
    }


}