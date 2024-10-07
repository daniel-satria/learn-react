import React, { Fragment, useEffect, useState } from "react";
import './App.css'

function HelloWorld(props){
    const [isTrue, setIstrue] = useState(false);
    const [crowd, setCrowd] = useState([]);

    const toggleTrue = () => {
        if (isTrue) {
            setIstrue(false);
            return
        } 
        setIstrue(true);
    };

    useEffect(() => {
        console.log("useEffect Fired!");

        let people = [
            {
                id: 1,
                firstName: "John",
                lastName: "Doe",
                dob: "1994-27-12",
            },
            {
                id: 2,
                firstName: "Kaka",
                lastName: "Ricardo",
                dob: "1965-18-01",
            }
        ]
        setCrowd(people)
    }, []);

    return (
        <Fragment>
            <hr />
            <h1 className="h1-green"> {props.msg} </h1>
            <hr />
            {isTrue &&
                <Fragment>
                    <p>The current value isTrue is True.</p>
                    <hr />
                </Fragment>
            }
            <a href="#!" className="btn btn-outline-secondary" onClick={toggleTrue}>
                Toggle isTrue
            </a>
            <hr />
            <h3> People</h3>
            <ul className="list-group">
                {crowd.map((m) => (
                    <li key={m.id} className="list-group-name"> {m.firstName} {m.lastName}</li>
                ))}
            </ul>
        </Fragment>
    )
}

export default HelloWorld;