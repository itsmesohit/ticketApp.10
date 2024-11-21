// hooks/use-request.js
import axios from 'axios';
import { useState } from 'react';

const useRequest = ({ url, method, body, onSuccess }) => {
    const [errors, setErrors] = useState(null);

    const doRequest = async () => {
        try {
            setErrors(null);
            const response = await axios[method](url, body);
            if(onSuccess)onSuccess(response.data);
            return response.data;
        } catch (e) {
            setErrors(
                <div className="alert alert-danger mt-3">
                    <h4>Ooops....</h4>
                    <ul className="my-0">
                        {e.response.data.errors.map((err, index) => (
                            <li key={index}>{err.message}</li>
                        ))}
                    </ul>
                </div>
            );
        }
    };

    return { doRequest, errors };
}

export default useRequest;
