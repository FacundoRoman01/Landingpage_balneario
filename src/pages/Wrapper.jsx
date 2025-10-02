import { useState, useEffect } from "react";
import { Navigate} from "react-router-dom";
import supabase from "../js/supabaseClient.js"

function Wrapper ({children}){

    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);


    useEffect(() =>{
        const getSession = async () =>{
            const {
                data:{session},

            } = await supabase.auth.getSession();

            setAuthenticated(!!session);
            setLoading(false);
        };


        getSession();
    }, []);


    if (loading) {
        return <div>Loading...</div>
    }else{
        if (authenticated) {
            return children;
        }

        return <Navigate to="/auth" />;
    }


}

export default Wrapper;