import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, requiredField} from '../../../../Utils/Validators/validators';
import {Textarea} from '../../../Common/FormsControls/FormsControls';

export type AddPostFormType = {
    newPost: string
}

export const maxLength10 = maxLengthCreator(10)

const NewPostForm: React.FC<InjectedFormProps<AddPostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPost'} component={Textarea} type="text" placeholder={'New post'} validate={[requiredField,maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};

export const NewPostReduxForm = reduxForm<AddPostFormType>({form: 'newPostForm'})(NewPostForm)