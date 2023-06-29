class Github{
    constructor(){
        this.url = " https://api.github.com/users/"
    }

    async getUserData(username){

        const userInfo = await fetch(this.url + username);
        const userInfoJson = await userInfo.json();

        const userRepos = await fetch(this.url + username + "/repos");
        const userReposJson = await userRepos.json();
        

        return {
            user : userInfoJson,
            repos : userReposJson
        }

    }

}