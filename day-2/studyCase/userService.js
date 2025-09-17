import userData from './user.json' with { type: 'json' };

export function getAllUser(){
    return userData;
}

export function getUserById(id){
    return userData.find( user => user.id === id);
}

