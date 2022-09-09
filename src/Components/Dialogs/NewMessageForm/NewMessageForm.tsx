import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

export type FormDataType = {
    newMessage: string
}

const NewMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name={'newMessage'} component={'textarea'} type="text" placeholder={'New message'}/></div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    );
};

export const NewMessageReduxForm = reduxForm<FormDataType>({form: 'newMessageForm'})(NewMessageForm)