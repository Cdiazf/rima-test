import { useEffect, useState } from "react";

const TitlePlan = () => {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const storedUserData = localStorage.getItem("userData");
        if (storedUserData) {
            const userData = JSON.parse(storedUserData);
            setUserName(userData.name || "");
        }
    }, []);

    return (
        <>
            <h1 className="content__title">{userName ? `${userName}, ¿Para quién deseas cotizar?` : "¿ Sin Nombre Para quién deseas cotizar?"}</h1>
            <p className="content__subtitle">Selecciona la opción que se ajuste más a tus necesidades.</p>
        </>
    );
};

export default TitlePlan;
