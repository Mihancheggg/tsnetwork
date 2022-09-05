import React from 'react';

type ProfileStatusPropsType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType, {}> {

    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({editMode: true})
        //this.state.editMode = true
    }

    deactivateEditMode() {
        this.setState({editMode: false})
        //this.state.editMode = true
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {

    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <input autoFocus onBlur={this.deactivateEditMode.bind(this)} type="text" value={this.props.status}/>
                    </div>
                    : <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>}

            </div>
        );
    }
};
