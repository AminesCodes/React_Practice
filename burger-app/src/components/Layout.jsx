import React from 'react'

export default function Layout(props) {
    return (
        <>
            <div>
                nav ....
            </div>
            <main>
                {props.children}
            </main>
        </>
    )
}