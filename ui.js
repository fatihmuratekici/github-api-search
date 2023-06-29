class UI {


    constructor() {
        this.profile = document.querySelector("#profile");
        this.repos = document.querySelector("#repos");
        this.lastUser = document.querySelector("#last-users");
        this.githubName = document.querySelector("#githubname");
        
    }

    static userToUI(user, data) {

        profile.innerHTML = `
        <div class="card card-body mb-3">
                    <div class="row">
                      <div class="col-md-4">
                        <a href="" target = "_blank">
                         <img class="img-fluid mb-2" src="${user.avatar_url}"> </a>
                         <hr>
                         <div id="fullName"><strong>${user.name === null ? "Bilgi Yok" : user.name}</strong></div>
                         <hr>
                         <div id="bio">${user.bio === null ? "Bilgi Yok" : user.bio}</div>
                        </div>
                      <div class="col-md-8">
                            <button class="btn btn-secondary">
                                  Takipçi  <span class="badge badge-light">${user.followers}</span>
                            </button>
                            <button class="btn btn-info">
                                 Takip Edilen  <span class="badge badge-light">${user.following}</span>
                              </button>
                            <button class="btn btn-danger">
                                Repolar  <span class="badge badge-light">${user.public_repos}</span>
                            </button>
                            <hr>
                            <li class="list-group">
                                <li class="list-group-item borderzero">
                                    <img src="images/company.png" width="30px"> <span id="company">${user.company === null ? "Bilgi Yok" : user.company}</span>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/location.png" width="30px"> <span id = "location">${user.location === null ? "Bilgi Yok" : user.location}</a>
                                    
                                </li>
                                <li class="list-group-item borderzero">
                                    <img src="images/mail.png" width="30px"> <span id="company">${user.email === null ? "Bilgi Yok" : user.email}</span>
                                    
                                </li>
                                
                            </div>
                               
                            
                      </div>
                </div>
        `;
        repos.innerHTML = "";
        data.forEach(repo => {
            repos.innerHTML += `
            <div class="mb-2 card-body">
            <div class="row">
                <div class="col-md-2">
                <span></span> 
                <a href="${repo.html_url}" target = "_blank" id = "repoName">${repo.name}</a>
                </div>
                <div class="col-md-6">
                    <button class="btn btn-secondary">
                        Starlar  <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
                    </button>

                    <button class="btn btn-info">
                        Forklar  <span class="badge badge-light" id ="repoFork">${repo.forks_count}</span>
                    </button>
            
                        </div>
                </div>

                </div>
            `;
        })
    }

    static alertUI(type,message){

        const alert = document.createElement("div");
        alert.className= `alert alert-${type}`;
        alert.textContent = message;

        document.querySelector(".search").appendChild(alert);

        setTimeout(() => {
            alert.remove();
        },2000)


    }

    static lastToUI(username){

        let users =  Storage.getStorageSearch();
        const ulusers = document.querySelector("#last-users");
        ulusers.innerHTML = "";
        users.forEach(element => {
            ulusers.innerHTML += `
            <li class="list-group-item">${element}</li>
            `;
        });
        

    }

    static clearAllSearchUI(){
        const users = document.querySelector("#last-users");
        while(users.firstChild != null){
            users.firstChild.remove();
        }

    }


}