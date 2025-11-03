// hooks/useFetchPlans.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchPlans = () => {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPlans = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get('https://rimac-front-end-challenge.netlify.app/api/plans.json');
                setPlans(response.data.list);
            } catch (err) {
                console.error('Error fetching plans:', err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPlans();
    }, []);
    return { plans, loading, error };
};
