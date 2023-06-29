class Storage {


    static getStorageSearch(){
        let users;

         if(localStorage.getItem("searched") === null)
         {
            users = [];
         }
         else{
            users = JSON.parse(localStorage.getItem("searched"));
         }

         return users;
    }


    static addToSearchStorage(search){
        
        let data = this.getStorageSearch();
        
        if(data.indexOf(search) === -1){
            data.push(search);
        }
        localStorage.setItem("searched",JSON.stringify(data));

    }

    static clearAllSearchStorage(){

        localStorage.removeItem("searched");

    }



}