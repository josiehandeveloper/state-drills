import React from 'react';
import Accordion


class Accordion extends React.Component {
    static defaultProps = { 
        sections: [] 
    };
    state = {
        currentSectionsIndex: 0
    };
    handleButtonClick = () => {
        this.setState({ currentSectionIndex: index })
    }
    renderButtons() {
        return this.props.sections.map((sections, index) => (
            <button key={index} onClick={() => this.handleButtonClick(index)}>
                {sections.title}
            </button>
        ))
    }
    renderContent() {
        const currentSection = this.props.sections[0]
        return (
            <div className='content'> 
                {currentSection.content}
            </div>
        )
    }
    render() {
        return (
            <div>
                {this.renderButtons()}
                {this.props.sections.length && this.renderContent()}
            </div>
        )
    }
}

export default Accordion


