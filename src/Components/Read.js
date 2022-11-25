import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Read() {
    const [data, setData] = useState([]);

    useEffect(() => {
        load();
    }, [])

    function load() {
        axios.get("https://6374912c08104a9c5f82e883.mockapi.io/form")
            .then((res) => {
                // console.log(res.data);
                setData(res.data)
            })
    }
    function handleDelete(id) {
        axios.delete(`https://6374912c08104a9c5f82e883.mockapi.io/form/${id}`)
            .then(() => {
                alert("Record Deleted Successfully")
                load();
            })
    }

    // function handleRead(id) {
    //     axios.put(`https://6374912c08104a9c5f82e883.mockapi.io/form/${id}`)
    //         .then((res) => {
    //             console.log(res.data);
    //         })
    // }

    return (
        <div>
            <table className="table mt-5">
                <thead>
                    <tr>
                        <th scope="col">Sr.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th className='text-center' scope="col" colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((eachData,i) => {
                            return (
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{eachData.name}</td>
                                    <td>{eachData.email}</td>
                                    <td>
                                        <Link to={"/" + eachData.id}>
                                        <button className='btn btn-success'><i className="fa-sharp fa-solid fa-pen"></i></button>
                                        </Link>
                                    </td>
                                    <td><button onClick={() => handleDelete(eachData.id)} className='btn btn-danger'><i className="fa-sharp fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Read