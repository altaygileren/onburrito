import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
    return (
        <div>
            <h1 className="timelineHeadline">Your <span className="timelineBg">onBurrito</span> Timeline</h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(58, 40, 33)'}}
                >
                    <h3 className="vertical-timeline-element-title">Sign up / Login</h3>

                    <h3 className="timelineParagraph">
                        Sign up or log in to your account to begin your order
                    </h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(58, 40, 33)'}}
                >
                    <h3 className="vertical-timeline-element-title">Build your meal</h3>
                    <h3 className="timelineParagraph">
                        Pick what you want on your burrito
                    </h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(58, 40, 33)'}}
                >
                    <h3 className="vertical-timeline-element-title">Check out</h3>
                    <h3 className="timelineParagraph">
                        Once your order is complete click check out
                    </h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(58, 40, 33)'}}
                >
                    <h3 className="vertical-timeline-element-title">Sit back and relax!</h3>
                    <h3 className="timelineParagraph">
                        Your burrito is being built by one of our professional Burrito Artists and being delivered to you!
                    </h3>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Timeline;