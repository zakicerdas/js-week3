let tasks = [];
let counter = 0;

export function getAllTask() {
    return tasks;
}

export function addTask(judul){
    tasks.push({id: ++counter, judul: judul});
    return tasks;
}

export function deleteTask(id){
    tasks = tasks.filter(t => t.id !== id);
    return tasks;
}