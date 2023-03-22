import React from 'react'

interface Props {

}

export default function HomeHeader(props: Props) {
    return (
        <div className='wrapper'>
            <div className="text--center get-started-box">
                <h1 className='headline'>Introduce <span className='color-text'>streamlined</span> dependency management into your <span className='color-text'>Swift</span> codebase with <span className='color-text'>ease</span>.</h1>
                <div className='get-started-links'>
                    <a href='docs/introduction'>Get Started</a>
                    <div className='github-wrapper'>
                        <iframe src="https://ghbtns.com/github-btn.html?user=broken-bytes&repo=syringe&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}