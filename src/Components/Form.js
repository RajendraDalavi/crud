import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Form() {
    let { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        email: ""
    });

    useEffect(() => {
        if (id !== undefined) {
            axios.get("https://6374912c08104a9c5f82e883.mockapi.io/form/" + id)
                .then((res) => {
                    setData({ name: res.data.name, email: res.data.email });
                })
        }
    }, []);


    function newData(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    function submit(e) {
        e.preventDefault();
        if (id === undefined) {
            axios.post("https://6374912c08104a9c5f82e883.mockapi.io/form", data)
                .then((res) => {
                    console.log(res.data);
                    alert("Data Submited Successfully")
                    navigate("/read");
                })
        }
        else {
            axios.put("https://6374912c08104a9c5f82e883.mockapi.io/form/" + id, data)
                .then((res) => {
                    console.log(res.data);
                    alert("Data updated Successfully")
                    navigate("/read");
                })
        }
    }


    return (
        <div>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name='name' value={data.name} onChange={(e) => newData(e)} className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="text" name='email' value={data.email}
                        onChange={(e) => newData(e)} className="form-control" />
                </div>
                <button type="submit"
                    onClick={submit}
                    className="btn btn-primary">Submit</button>
            </form>
        </div>
    )

}

export default Form;