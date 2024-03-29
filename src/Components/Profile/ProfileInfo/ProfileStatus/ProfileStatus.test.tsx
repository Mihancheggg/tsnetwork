import React from 'react';
import {create} from 'react-test-renderer';
import {ProfileStatus} from './ProfileStatus';

describe('ProfileStatus component', () => {
    test('status from props should be in state', () => {
        const component = create(<ProfileStatus status="status" updateStatus={() => {
        }}/>);
        const instance = component.getInstance();
        //@ts-ignore
        expect(instance.state.status).toBe('status')
    });

    test('input shouldn\'t be displayed', () => {
        const component = create(<ProfileStatus status="status" updateStatus={() => {
        }}/>);
        const root = component.root;
        //@ts-ignore
        expect(() => {
            let input = root.findByType('input')
        }).toThrow()
    });

    test('span should be displayed with correct status', () => {
        const component = create(<ProfileStatus status="status" updateStatus={() => {
        }}/>);
        const root = component.root;
        let span = root.findByType('span')
        //@ts-ignore
        expect(span.children[0]).toBe('status')
    })

    test('input should be displayed in editMode instead of span', () => {
        const component = create(<ProfileStatus status="status" updateStatus={() => {
        }}/>);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input')
        //@ts-ignore
        expect(input.props.value).toBe('status')
    });

    test('callback should be called', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="status" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        //@ts-ignore
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})