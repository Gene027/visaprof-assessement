import { useCallback } from "react";

const url = "http://localhost:3001/api/v1/users";

export function useAuthActions() {

    const signIn = useCallback(async (email, password) => {
        return new Promise((resolve) => {
            const options = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email, password})
            }
    
           fetch(`${url}/login`, options)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => resolve({error: err}))
        })
        
    }, [])
    
    const signUp = useCallback(async (firstName, lastName, phoneNumber, email, password) => {
        return new Promise((resolve) => {
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
                .then(data => resolve(data))
                .catch(err => resolve({error: err}))
        })
    }, [])

    return {
        signIn,
        signUp
    }
}

