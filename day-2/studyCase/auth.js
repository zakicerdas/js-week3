import data from './users.json' with { type: 'json' };

export function login(username, password){
    return data.some( user => user.username === username && user.password === password);
    
}

export function register(username, password){
   data.push({username, password});
   console.log("User registered:", username);
    return data;
}
    