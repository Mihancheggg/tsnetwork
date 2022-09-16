import React, {ChangeEvent, useEffect, useState} from 'react';
import {ProfileStatusPropsType} from './ProfileStatus';

export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    useEffect(()=> {
            setStatus(props.status)
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {editMode
                ? <div>
                    <input onChange={changeStatusHandler} autoFocus onBlur={deactivateEditMode} type="text"
                           value={status}/>
                </div>
                : <div>
                    <span onDoubleClick={activateEditMode}>{status || 'No status'}</span>
                </div>}

        </div>
    );
};
