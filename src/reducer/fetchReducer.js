import
{
    fetchRequest,
    fetchSuccess,
    fetchError
} from './../actions/fetchAction';

export function fetchPosts()
{
    const URL = "https://www.reddit.com/r/funny.json";
    return fetch( URL, { method: 'GET' } )
        .then( response => Promise.all( [ response, response.json() ] ) );
}

export function fetchPostsWithRedux()
{
    return ( dispatch ) =>
    {
        dispatch( fetchRequest() );
        return fetchPosts().then( ( [ response, json ] ) =>
        {
            if ( response.status === 200 )
            {
                dispatch( fetchSuccess( json.data.children.map( child => child.data ) ) )
            }
            else
            {
                dispatch( fetchError() )
            }
        } )
    }
}

export function fetchReducer( state = { posts: [] }, action )
{
    switch ( action.type )
    {
        case "FETCH_REQUEST":
            return state;
        case "FETCH_SUCCESS":
            return Object.assign( {}, state, { posts: action.payload } )
        default:
            return state;
    }
}