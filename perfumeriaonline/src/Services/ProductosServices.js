import instace from "../Config/axios";

export function getAll(query=""){
    return instance.get(""+query);
}

export function getAllPerfumes(){
    return instance.get("sites/MLA/search?category=MLA1271");
}

export function getById(id){
    return instance.get("items/"+id);
}