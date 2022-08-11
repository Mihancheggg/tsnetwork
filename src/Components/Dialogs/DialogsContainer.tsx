import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../Redux/Reducers/DialogsReducer';
import {Dialogs, DialogsPropsType} from './Dialogs';
//import {StoreContext} from '../../StoreContext';
import {AppPropsType} from '../../Redux/ReduxStore';
import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';


export type DialogsContainerDataType = DialogsPropsType & MapDispatchPropsType

/*export const DialogsContainer = (/!*props: DialogsContainerDataType*!/) => {

    /!*const onTextAreaChangeHandler = (text: string) => {
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }*!/

    return (
       /!* <StoreContext.Consumer>
            {(store: ReduxStoreType) => {

                const dialogs = store.getState().dialogsReducer

                const onTextAreaChangeHandler = (text: string) => {
                    store.dispatch(updateNewMessageTextActionCreator(text))
                }

                const addMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }
                return (
                    <Dialogs //dialogsPageData={store.getState().dialogsPageData}
                        dialogsData={dialogs.dialogsData}
                        messagesData={dialogs.messagesData}
                        newMessageText={dialogs.newMessageText}
                        addMessage={addMessage}
                        updateTextAreaValue={onTextAreaChangeHandler}
                    />)
            }
            }
        </StoreContext.Consumer>*!/
        <></>
    )
};*/

type MapDispatchPropsType = {
    addMessage: () => void
    updateTextAreaValue: (text: string) => void
}

let mapStateToProps = (state: AppPropsType): DialogsPropsType => {
    return {
        dialogsData: state.dialogsReducer.dialogsData,
        messagesData: state.dialogsReducer.messagesData,
        newMessageText: state.dialogsReducer.newMessageText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateTextAreaValue: (text: string) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
    }
}

//export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
//export default compose<React.FC>(connect(mapStateToProps, mapDispatchToProps))(Dialogs);
export const DialogsContainer = compose<React.FC>(connect(mapStateToProps, mapDispatchToProps))(Dialogs)