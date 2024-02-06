const count= 0;

export default function reducer(state= count, action){
    const{ type,payload } = action;

    switch(type){
        case "INCREMENT":
            return count+payload;
        case "DECREMENT":
            return count-payload;
        default:
            return count;
    }
}
