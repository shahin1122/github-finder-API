class Github{
    constructor(){
        this.clint_id = '0e6a4d467fe1a490fd33' ; 
        this.clint_secret = '83cf6cdb7e4aa0085b0b2febddb82915a8197a28';
        this.repos_count = 5;
        this.repos_sort = 'created:asc' ; 
    }

    async getUser(user){
        const profileResponse =  await fetch
        (`https://api.github.com/users/${user} ? clint_id=${this.clint_id} & clint_secret=${this.clint_secret}`);

        const repoResponse = await fetch
        (`https://api.github.com/users/${user}/repos ? clint_id=${this.clint_id} & clint_secret=${this.clint_secret}`);



        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        console.log(repos)

        return{
            profile  ,
            repos ,       
        }
    }
}