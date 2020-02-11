import React from 'react'

export default function Table(props) {
    const data = props.movieList;

    let headers_array = Object.keys(data[0]);

    let headers = headers_array.map((item,index)=>{
        return <th key={index} scope="col" >{item}</th>
    })

    let rows = data.map(item =>{
        let temp_data = headers_array.map((name,index) =>{
            return <td key={index}>{item[name]}</td>
        })
        return  <tr key={item['_id']}>
                    {temp_data}
                    <td>
                        <button id={item['_id']} 
                                className="btn btn-danger"
                                onClick={props.delete}
                                >
                                Delete
                        </button>
                    </td>
                </tr>
    })


    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        {headers}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}
