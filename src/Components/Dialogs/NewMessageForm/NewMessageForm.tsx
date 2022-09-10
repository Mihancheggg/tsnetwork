import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Textarea} from '../../Common/FormsControls/FormsControls';
import {requiredField} from '../../../Utils/Validators/validators';
import {maxLength10} from '../../Profile/MyPosts/NewPostForm/NewPostForm';

export type FormDataType = {
    newMessage: string
}

const NewMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newMessage'} component={Textarea} type="text" placeholder={'New message'} validate={[requiredField,maxLength10]}/>
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    );
};

export const NewMessageReduxForm = reduxForm<FormDataType>({form: 'newMessageForm'})(NewMessageForm)