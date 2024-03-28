import React from 'react';
import ReactDOM from 'react-dom';

function PortalDemo() {
    return ReactDOM.createPortal(
        <h1>Portal Demo</h1>,       // it will show an error if we don't separate it with comma
        document.getElementById('portal-root')

    )
}

export default PortalDemo