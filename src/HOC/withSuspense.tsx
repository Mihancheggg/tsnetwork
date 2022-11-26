import React from 'react';

export function withSuspense<WrappedProps>(Component: React.FC<WrappedProps>) {
    return (props: any) => {
        return (
            <React.Suspense fallback={<div>Loading...</div>}>
                <Component {...props}/>
            </React.Suspense>
        )
    }
}