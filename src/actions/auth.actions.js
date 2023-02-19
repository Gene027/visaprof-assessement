import { useCallback } from "react";

const url = "http://localhost:3001/api/v1/users";

export function useAuthActions() {

    const signIn = useCallback((email, password) => {
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        }

       const response = fetch(`${url}/login`, options)
            .then(res => res.json())
            .then(data => data)
            .catch(err => {error: err})
    
    }, [])
    
    const signUp = useCallback((firstName, lastName, phoneNumber, email, password) => {
        const options = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                firstName,
                lastName,
                phoneNumber,
                email, 
                password,
                isAgent: false
            })
        }

        const response = fetch(url, options)
            .then(res => res.json())
            .then(data => data)
            .catch(err => {error: err})

    }, [])

    return {
        signIn,
        signUp
    }
}

