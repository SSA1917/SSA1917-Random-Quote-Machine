export function RequestDates(){
    return function fetchPosts(dispatch){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                let post = [];
                let authors = [];
                for(const {body:Body} of json){
                    post.push(Body);
                }
                for(const {userId:UserId} of json){
                    authors.push(UserId)
                }
                dispatch(fetchDates(post,authors))
            })
    };
};

export const DATES = "GetDates";
export const fetchDates = (dates,authors) => ({
    type: DATES,
    payload: dates,
    Users: authors
});


