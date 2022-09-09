import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLength140, maxLengthCreator, requiredField} from '../../../../Utils/Validators/validators';

export type FormDataType = {
    newPost: string
}

const maxLength10 = maxLengthCreator(10)

const NewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPost'} component={'textarea'} type="text" placeholder={'New post'} validate={[requiredField,maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};

export const NewPostReduxForm = reduxForm<FormDataType>({form: 'newPostForm'})(NewPostForm)