const nameInput = document.querySelector("#githubname");
const form = document.querySelector("#github-form");
const clearButon = document.querySelector("#clear-last-users");
const lastUser = document.querySelector("#last-users");



const github = new Github();

eventListeners();


function eventListeners(){
    form.addEventListener("submit",searchGithubUser);
    clearButon.addEventListener("click",clearStorage);
    document.addEventListener("DOMContentLoaded",getAllSearchStorage);
    
}

function searchGithubUser(e){
    let search = nameInput.value.trim();
    if(search.value === "")
    {
        UI.alertUI("danger","geçerli bir bilgi girin");
    }
    else{
      github.getUserData(search).then(data => {
        if(data.message === "Not Found"){
            UI.alertUI("danger","Kullanıcı yok");
        }
        else{
            UI.userToUI(data.user,data.repos);
            Storage.addToSearchStorage(data.user.login);
            UI.lastToUI(data.user.login);
            clearInput();
        }

     
      }).catch(err => console.log(err));   
    }
    
    e.preventDefault();
}

function clearInput(){
    nameInput.value = "";
}

function clearStorage(){

    if(confirm("Tüm aramalarınızı silmek istediğinizden emin misiniz?")){

        Storage.clearAllSearchStorage();
        UI.clearAllSearchUI();
    }


}

function getAllSearchStorage(){

    let users =  Storage.getStorageSearch();

    users.forEach(element => {
        lastUser.innerHTML += `
        <li class="list-group-item">${element}</li>
        `;
    });

    
}