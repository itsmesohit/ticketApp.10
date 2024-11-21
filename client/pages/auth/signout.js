import useRequest from "../../hooks/use-request";
import Router from 'next/router';
import { useEffect } from "react";


const Singout = () => {

    const { doRequest, errors } = useRequest({
        url: '/api/users/signout',
        method: 'post',
        body: {},
        onSuccess: () => Router.push('/')
    });

    useEffect(() => {
        doRequest();
    }, []);

    return <div>Signout</div>;
};


export default Singout;