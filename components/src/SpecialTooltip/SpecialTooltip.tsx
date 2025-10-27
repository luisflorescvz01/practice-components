import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';

import "./SpecialTooltip.css";

export default function SpecialTooltip() {
    return (
        <div className="page">
            <div className='semicircle'>
                <div className="icon-container">
                    <div className="icon-wrapper">
                        <span className="tooltip">Add</span>
                        <AddCircleOutlinedIcon fontSize="large" />
                    </div>
                    <div className="icon-wrapper">
                        <span className="tooltip">Edit</span>
                        <EditIcon fontSize="large" />
                    </div>
                    <div className="icon-wrapper">
                        <span className="tooltip">Delete</span>
                        <DeleteIcon fontSize="large" />
                    </div>
                    <div className="icon-wrapper">
                        <span className="tooltip">Log Out</span>
                        <LogoutIcon fontSize="large" />
                    </div>
                </div>
            </div>

        </div>

    );
}
