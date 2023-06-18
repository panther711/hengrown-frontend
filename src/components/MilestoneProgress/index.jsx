import React from 'react';
import './index.css';

const MilestoneProgress = ({data}) => {
    return <div className="vefs-milestone-wrapper">
        <div className="label-container-2">
            <p className='painted'>Rooting & Cloning</p>
            <p>93 days remaining until harvest time</p>
        </div>
        <div className="milestone-container">
            <div className="chart-container">
                <div className="label-container">
                    <div className="milestones milestone__0">
                        <div className="label colored">Rooting & Cloning</div>
                        <div className="label">14 days</div>
                    </div>
                    <div className="milestones milestone__33">
                        <div className="label colored">Vegetation & Mass Gain</div>
                        <div className="label">167 days</div>
                    </div>
                    <div className="milestones milestone__66">
                        <div className="label colored">Flowering & Preharvest</div>
                        <div className="label">83 days</div>
                    </div>
                    <div className="milestones milestone__100">
                        <div className="label colored">Harvest</div>
                        <div className="label">1 days</div>
                    </div>
                </div>
                <div className="line-container">
                    <div className="line" style={{width: 'calc(57%)'}}></div>
                    <div className="milestones" style={{left: '57%'}}>
                        <div className="dot"/>
                        <div className='pointer'>
                            <div className='pointer-arrow'/>
                            <div className='pointer-content'>
                                140 days
                            </div>
                        </div>
                    </div>
                    <div className="line left"></div>
                </div>
                <div className="dot-container">
                    <div className="milestones" style={{left: '57%'}}>
                        <div className="dot completed colored current"/>
                    </div>
                    <div className="milestones milestone__0">
                        <div className="dot completed colored"/>
                    </div>
                    <div className="milestones milestone__33">
                        <div className="dot completed colored"/>
                    </div>
                    <div className="milestones milestone__66">
                        <div className="dot"/>
                    </div>
                    <div className="milestones milestone__100">
                        <div className="dot"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default MilestoneProgress;