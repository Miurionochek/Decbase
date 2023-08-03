async function getData(id){ 
    try{
        const data = await fetch("https://jsonplaceholder.typicode.com/posts/")
        const post = await data.json()
        const array = post.filter(i => i.userId == id).slice(0, 5);
        for(let i in array){
            delete array[i].userId;
            delete array[i].id;
        }
        return array;
    }
    catch(err){
        console.error(err);
    }
}
export default getData;