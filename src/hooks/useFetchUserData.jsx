import { useState, useEffect } from "react";

const useFetchUserData = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch("https://rimac-front-end-challenge.netlify.app/api/user.json");
                if (!response.ok) throw new Error("Failed to fetch user data");

                const data = await response.json();
                setUserData(data);
                localStorage.setItem("userData", JSON.stringify(data));
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserData();
    }, []);

    return userData;
};

export default useFetchUserData;
