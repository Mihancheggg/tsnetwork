import React from 'react';
import styles from './FormsControls.module.css'
import {Field} from 'redux-form';

const FormControl = ({input, meta:{touched, error},children, ...restProps}: any) => {
    const hasError = touched && error
    return (
        <div className={`${styles.formControl} ${hasError && styles.error}`}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props: any) => {
    const {child, input, meta, ...restProps} = props
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps}/>
        </FormControl>
    )
}

export const Input = (props: any) => {
    const {child, input, meta, ...restProps} = props
    return (
        <FormControl {...props}>
            <input {...input} {...restProps}/>
        </FormControl>
    )
}

export const createField = (placeholder: string | null, name: string,type: string, component: {(props: any): JSX.Element}, validators: any[], text?:string) => (
    <div>
        <Field name={name} component={component} type={type} placeholder={placeholder} validate={validators}/>{text}
    </div>
)

/*export const Textarea = ({input,meta,...props}: any) => {
    const hasError = meta.touched && meta.error
    return(
        <div className={`${styles.formControl} ${hasError && styles.error}`}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}*/

/*
export const Input = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={`${styles.formControl} ${hasError && styles.error}`}>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}*/
