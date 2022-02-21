
export default class Api{
    
    api(path, method ='GET', body= null){
        let url = path;

        const options={
            method,
            headers:{
                'Content-Type':'application/json;charset=utf-8'
            }
        };

        if(body !=null){
            options.body = JSON.stringify(body);
        }

        return fetch(url,options);

    }

    async getAllBooks(){
        try{
            const rez = await this.api('http://localhost:5000/api/v1/books');

            if(rez.status === 200){
                return rez.json();
            }else{
                return 0;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async getBookById(id){
        try{
            const rez = await this.api(`http://localhost:5000/api/v1/books/${id}`);

            if(rez.status === 200){
                return rez.json();
            }else{
                const data = await rez.json();
                return data.error;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async addBook(newBook){
        try{
            const rez = await this.api(`http://localhost:5000/api/v1/books`,'POST', newBook);
            
            if(rez.status === 204){
                return "success";

            }else{
                const data = await rez.json();
                return data.error;
            }

         }catch(e){
           
            throw new Error(e);
         }
        
    }

    async updateBook(newBook,id){

        try{
            const rez = await this.api(`http://localhost:5000/api/v1/books/${id}`,'PUT', newBook);

            if(rez.status === 204){
                return 'update success';
            }else{
                const data = await rez.json();
                return data.error;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }

    async deleteBook(id){
        try{
            const rez = await this.api(`http://localhost:5000/api/v1/books/${id}`,'DELETE');

            if(rez.status === 204){
                return 'delete success';
            }else{
                const data = await rez.json();
                return data.error;
            }

        }catch(e){
            throw new Error(e);
        }
        
    }
    
}