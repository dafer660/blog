import React from 'react'

import github from '../../../assets/svg/github.svg'
import linkedin from '../../../assets/svg/linkedin.svg'
import reddit from '../../../assets/svg/reddit.svg'
import Icon from "./Icon/Icon";

const Icons = () => {

    const linkedInURL = 'https://www.linkedin.com/in/daniel-f-684b3666'
    const redditURL = 'https://www.reddit.com/user/dafer18'
    const githubURL = 'https://github.com/dafer660'

    return (
        <div className="flex flex-wrap">
            <Icon href={githubURL} src={github} alt={'Github'} title={'Github'}/>
            <Icon href={linkedInURL} src={linkedin} alt={'LinkedIn'} title={'LinkedIn'}/>
            <Icon href={redditURL} src={reddit} alt={'Reddit'} title={'Reddit'}/>
        </div>
    )
}

export default Icons