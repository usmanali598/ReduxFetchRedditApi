export function fetchRequest()
{
    return { type: "FETCH_REQUEST" }
}

export function fetchSuccess( payload )
{
    return {
        type: "FETCH_SUCCESS",
        payload
    }
}
export function fetchError()
{
    return { type: "FETCH_ERROR" }
}