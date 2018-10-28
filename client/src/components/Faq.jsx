import React, { Component } from 'react';
import Collapsible from 'react-collapsible';

class Faq extends Component {
    state = {
        faqQA: [
            { ques: "Options for Vegans?", ans: "Just try our amazing sides and toppings!" },
            { ques: "What hours do you operate?", ans: "We operate 24 hours a day 7 days a week" },
            { ques: "Do you deliver?", ans: "Yes we do!" },
            { ques: "Do you cater?", ans: "You better believe it!" },
            { ques: "Do you use GMO in your products?", ans: "No we don't. Never did and never will." },
            { ques: "My friends say I'm weird for eating my burrito from the side", ans: "We agree with your friends!" },
        ]
    }

        render() {
            return (
                <div>
                    {this.state.faqQA.map((event, index) => {
                        return (
                            <div key={index}>
                            <Collapsible
                            transitionTime={90}
                            className="Collapsible"
                            trigger={`${event.ques}`} >
                                <p>{event.ans}</p>
                            </Collapsible>
                            <hr />
                            </div>
                        )
                    })}
                </div>
            )
        }
}

export default Faq;