import React, { useEffect, useState } from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarExport, gridClasses } from '@mui/x-data-grid';
import Link  from '@mui/material/Link';
import { SERVER_URL } from '../../constants.js'
import AddTrail from './AddTrail.js';
import EditTrail from './EditTrail.js';

// for manually created trails; use an api to add trails if time allows
function Trail(props) {
    const [trail, setTrail] = useState([]);
    const [comments, setComments] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fetchTrail(props.tid);
        fetchComments(props.tid);
    }, []);

    const columns = [
        { field: 'comments', headerName: 'Comments', width: 400,
            renderCell: (row) =>
                {return <Link href={row.id}>Link</Link>}
        },
        {
            field: 'delete',
            headerName: '',
            sortable: false,
            filterable: false,
            renderCell: row =>
                <button
                    onClick={() => onDelClick(row.id)}>Delete
                </button>
        }
    ];

    const onDelClick = (url) => {
        // if (window.confirm("Please confirm you want to delete the trail.")) {
        //     fetch(url, { method: 'DELETE' })
        //         .then(response => {
        //             if (response.ok) {
        //                 fetchTrails();
        //                 setOpen(true);
        //             }
        //             else {
        //                 alert('There is an error processing the delete request.');
        //             }
        //         })
        //         .catch(err => console.error(err))
        // }
    }

    const addTrail = (trail) => {
        // fetch(SERVER_URL + 'api/trails',
        //     {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(trail)
        //     })
        //     .then(response => {
        //         if (response.ok) {
        //             fetchTrails();
        //         }
        //         else {
        //             alert('There is an error processing the create request.');
        //         }
        //     })
        //     .catch(err => console.error(err))
    }

    const updateTrail = (trail, link) => {
        // fetch(link,
        //     { 
        //       method: 'PUT', 
        //       headers: {
        //       'Content-Type':  'application/json',
        //     },
        //     body: JSON.stringify(trail)
        //   })
        //     .then(response => {
        //         if (response.ok) {
        //             fetchTrails();
        //         }
        //         else {
        //             alert('There is an error processing the update request.');
        //         }
        //     })
        //     .catch(err => console.error(err))
    }

    const fetchTrail = (tid) => {
        fetch("http://localhost:8080/api/trail?tid=" + tid)
            .then(response => response.json())
            .then(data => setTrail(data))
            .catch(err => console.error(err));
    }

    const fetchComments = (tid) => {
        fetch("http://localhost:8080/api/comments?tid=" + tid)
            .then(response => response.json())
            .then(data => setComments(data))
            .catch(err => console.error(err));
    }

    return (
        <React.Fragment>
            {/* <AddTrail addTrail={addTrail} /> */}
            <div style={{ height: 500, width: '100%' }}>
                <DataGrid
                    rows={comments}
                    columns={columns}
                    // generate a unique id for each row using each trail's detailed page
                    getRowId={row => SERVER_URL + 'api/trail?tid=' + row.id} />
            </div>
        </React.Fragment>
    );
}
export default Trail;