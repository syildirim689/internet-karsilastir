import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

function MainLoading() {
    const [progress, setProgress] = useState(0)
    return (
        <LoadingBar
            color='#f11946'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
        />
    )
}

export default MainLoading
